import { defineConfig } from "vitepress";
export default defineConfig({
  base: "/repo/",
  title: "Microprocessor Lab",
  description: "",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Experiments", link: "/Experiment-1" },
    ],

    sidebar: [
      {
        text: "Experiments",
        items: [
          {
            text: "Introduction to ARM Assembly",
            link: "/Experiment-1.md",
          },
          
        ],
      },
      {
        text: "Resources",
        items: [
          {
            text: "Keil uVision5 IDE",
            link: "https://www.keil.com/demo/eval/arm.htm",
          },
          {
            text: "ARM Documentation",
            link: "https://developer.arm.com/documentation/dui0041/latest/",
          },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/mabushelbaia/" }],
    search: {
      provider: "local",
    },
  },
});
