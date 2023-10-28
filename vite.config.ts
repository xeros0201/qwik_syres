import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

 
import { qwikSpeakInline } from 'qwik-speak/inline';

// import { rewriteRoutes } from './src/speak-routes';

export default defineConfig(() => {
  return {
 
    plugins: [
      qwikCity(
        /** Uncomment this line to use url rewriting to translate paths */
        // { rewriteRoutes }
      ),
      qwikVite(),
      qwikSpeakInline({
        supportedLangs: ['en-US','vi-VN'],
        defaultLang: 'vi-VN',
        assetsPath: 'i18n'
      }),
      tsconfigPaths()
    ],
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    },
    test: {
      include: ['./src/**']
    },
  };
});
