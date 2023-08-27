import { defineConfig } from "unocss"
import presetMini from "@unocss/preset-mini"

export default defineConfig({
  presets: [
    presetMini({
      theme: {
        breakpoints: {
          md: "768px",
          lg: "1440px"
        }
      }
    }),
  ]
})
