// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

import tailwindcss from '@tailwindcss/vite';
import { offenePunkte } from './src/offene-punkte.mjs';

/**
 * Launch-Sperre: Ein Launch-Build (PUBLIC_STAND=launch) listet die offenen
 * Punkte und bricht ab, solange rechtliche Pflichtangaben fehlen. So geht
 * kein Stand mit leerer USt-IdNr. oder ungeprüfter Datenschutzerklärung live.
 * @returns {import('astro').AstroIntegration}
 */
function launchSperre() {
  return {
    name: 'launch-sperre',
    hooks: {
      'astro:config:setup': ({ command, logger }) => {
        const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');
        const stand = process.env.PUBLIC_STAND ?? env.PUBLIC_STAND;
        if (command !== 'build' || stand !== 'launch') return;

        for (const p of offenePunkte) logger.warn(`${p.blockiert ? 'BLOCKIERT' : 'offen'}: ${p.punkt}`);
        const blocker = offenePunkte.filter((p) => p.blockiert);
        if (blocker.length > 0) {
          throw new Error(
            `Launch-Build abgebrochen: ${blocker.length} Pflichtpunkt(e) offen (siehe src/offene-punkte.mjs).`
          );
        }
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  integrations: [launchSperre()],
  vite: {
    plugins: [tailwindcss()],
  },
});
