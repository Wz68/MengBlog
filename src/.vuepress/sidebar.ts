import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "前端客栈",
      icon: "lightbulb",
      prefix: "web/",
      children: "structure",
    },
    {
      text: "后端客栈",
      icon: "gears",
      prefix: "back-end/",
      children: "structure",
    },
    {
      text: "面试汇总",
      icon: "signs-post",
      prefix: "interview/",
      children: "structure",
    },
  ],

  "/web/": "structure",

  "/back-end/": "structure",

  "/interview/": "structure",
});
