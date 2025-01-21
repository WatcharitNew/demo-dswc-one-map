/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray: {
          100: "#F8F8FA",
          200: "##E5E7EB",
          300: "#999DA6",
          400: "#9CA3AF",
          600: "#6B7280",
          900: "#252525",
        },
        blue: {
          50: "#F4F9FD",
          800: "#1473E6",
          900: "#213166",
        },
        yellow: {
          100: "#FEF3C7",
        },
        red: {
          100: "#FFF0F0",
        },
        green: {
          100: "#EBF9EE",
        },
      },
    },
  },
  plugins: [],
};
