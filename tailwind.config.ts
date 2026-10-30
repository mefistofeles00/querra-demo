import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F6F4EF",
        ink: { DEFAULT: "#15171C", soft: "#3B3F48", mute: "#6B707A" },
        line: "#E3E0D8",
        accent: { DEFAULT: "#E4480F", soft: "#FFE7DC", deep: "#B23A0B", ink: "#962F08" },
        night: { DEFAULT: "#0F1115", card: "#171A21", line: "#262A33" },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-geist-mono)", "ui-monospace"],
      },
      maxWidth: { page: "72rem" },
      keyframes: {
        rise: { from: { opacity: "0", transform: "translateY(12px)" }, to: { opacity: "1", transform: "none" } },
        draw: { from: { strokeDashoffset: "1" }, to: { strokeDashoffset: "0" } },
        blink: { "0%,100%": { opacity: "0.2" }, "50%": { opacity: "1" } },
      },
      animation: {
        rise: "rise .7s cubic-bezier(.2,.7,.2,1) both",
        draw: "draw 1.6s ease-out both",
        blink: "blink 1.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
