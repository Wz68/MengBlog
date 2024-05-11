import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://mengblog.cn",

  author: {
    name: "Mr.LM",
    url: "https://mengblog.cn",
  },

  iconAssets: "fontawesome-with-brands",
  repoDisplay: false,
  logo: "https://mengblog-1305308047.cos.ap-guangzhou.myqcloud.com/202405081418211.png",

  repo: "vuepress-theme-hope/vuepress-theme-hope",
  favicon:
    "https://mengblog-1305308047.cos.ap-guangzhou.myqcloud.com/202405081418211.png",
  docsDir: "src",
  footer: "<a href='https://beian.miit.gov.cn/'>晋ICP备2021008453号</a>",
  contributors: true,
  // 导航栏
  navbar,
  // 侧边栏
  sidebar,

  // 页脚
  // footer: "默认页脚",
  displayFooter: true,

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,
  // 在这里配置主题提供的插件
  editLink: false,
  pageInfo: [
    "Author",
    "Original",
    "Date",
    "Category",
    "ReadingTime",
    "Word",
    "PageView",
  ],
  plugins: {
    components: {
      components: ["Badge", "VPCard"],
    },
    searchPro: {
      indexContent: true,
    },
    copyCode: true,
    copyright: {
      author: "Mr.LM",
      triggerLength: 20,
      global: true,
      license: "MIT",
      canonical: "https://mengblog.cn",
    },
    seo: {
      autoDescription: true,
      canonical: "https://mengblog.cn",
    },
    sitemap: true,
    comment: {
      // You should generate and use your own comment service
      provider: "Giscus",
      repo: "Wz68/MengBlog",
      repoId: "R_kgDOL4xPzA", // 替换下
      category: "Announcements",
      categoryId: "DIC_kwDOL4xPzM4CfSXA", // 替换下
    },
    git: {
      contributors: true,
    },
    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,
    },
  },
});
