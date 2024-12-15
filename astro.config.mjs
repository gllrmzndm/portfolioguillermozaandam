import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import serviceWorker from "astrojs-service-worker";


// https://astro.build/config
export default defineConfig({

    site: 'https://gllrmzndm.github.io',
    base: '',
    integrations: [tailwind(), serviceWorker()], 
});
