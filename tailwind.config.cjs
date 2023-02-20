const fullContentPageHight = "calc(100vh - var(--nav-height))";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      height: {
        "main-nav-page": "var(--nav-height)",
        "full-content-page": fullContentPageHight,
      },
      maxHeight: {
        "full-content-page": fullContentPageHight,
      },
      minHeight: {
        "full-content-page": fullContentPageHight,
      },
      spacing: {
        "main-nav-page": "var(--nav-height)",
        // 'content-page': 'calc(var(--nav-height))',
      },
    },
    plugins: [
      // // https://tailwindcss.com/docs/typography-plugin
      // // <article class="prose lg:prose-xl"></article>
      // require("@tailwindcss/typography"),
    ],
  },
};
