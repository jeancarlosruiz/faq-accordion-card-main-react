import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/faq-accordion-card-main-react/",
  plugins: [react()],
});
