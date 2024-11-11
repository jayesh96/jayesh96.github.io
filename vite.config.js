import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import { viteStaticCopy } from "vite-plugin-static-copy"; // Use named import

// https://vitejs.dev/config/

export default defineConfig({
    plugins: [
        react(),
        viteStaticCopy({
            targets: [
                {
                    src: "src/assets/**/*", // Source folder with assets
                    dest: "assets", // Destination folder in the build directory
                },
            ],
        }),
    ],
    css: {
        postcss: {
            plugins: [tailwindcss],
        },
    },
});
