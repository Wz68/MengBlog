import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "梦博客",
  description: "MengBlog Docs",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
