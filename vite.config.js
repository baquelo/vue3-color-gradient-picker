import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    // commonjsOptions: {
    //     esmExternals: true,
    // },
    build: {
        commonjsOptions: {
            esmExternals: true,
        },
    },
});