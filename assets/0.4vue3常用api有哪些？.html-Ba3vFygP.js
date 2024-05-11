import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as t,b as i}from"./app-DcmOWDz-.js";const s={},a=i(`<h1 id="_04-vue3常用api有哪些" tabindex="-1"><a class="header-anchor" href="#_04-vue3常用api有哪些"><span>04-vue3常用api有哪些？</span></a></h1><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token list punctuation">1.</span> createApp() ==》 创建一个应用实例。
	说明：等于Vue2的==》new Vue()
	使用场景：写插件(封装全局组件会使用)
<span class="token list punctuation">2.</span> provide/inject ==》依赖注入
	说明：其实就是传值
	使用场景：某一个父组件传值 到后代组件，如果层级过多传递麻烦，所以使用
	缺点：不好维护和查询数据来源
<span class="token list punctuation">3.</span> directive
	说明：自定义指令
	场景：后台管理系统中的按钮权限控制（ 一个用户拥有某些权限，但是只能查看和修改，不能删除）
<span class="token list punctuation">4.</span> mixin
	说明：1.全局混入 2. 局部
	场景：可以添加生命周期，我在小程序的分享功能会用到
	缺点：不好维护和查询数据来源
<span class="token list punctuation">5.</span> app.config.globalProperties
	说明：获取vue这个全局对象的属性和方法
	场景：自己封装插件的时候需要把方法添加到对象中
<span class="token list punctuation">6.</span> nextTick
	说明：等待下一次 DOM 更新刷新的工具方法 ：nextTick返回一个Pormise，回调函数是放在Promise中的，所以是异步执行的
	场景：就是把dom要更新，那么vue是数据驱动dom，所以数据的赋值就要在nextTick进行
<span class="token list punctuation">7.</span> computed
	说明：计算属性
	场景：有缓存
<span class="token list punctuation">8.</span> reactive、ref
	说明：来定义数据的和vue2的data类似
<span class="token list punctuation">9.</span> watch
	说明：监听（Vue3不需要深度监听）
<span class="token list punctuation">10.</span> markRaw()
	说明：不被new Proxy代理，说白了就是静态的数据
<span class="token list punctuation">11.</span> defineProps() 
	说明：父组件传递的值，子组件使用setup的形式，需要用defineProps接收
<span class="token list punctuation">12.</span> defineEmits()
	当前组件使用setup形式，自定义事件需要使用defineEmits
<span class="token list punctuation">13.</span> slot
	说明：分为 1. 匿名 2. 具名 3. 作用域
	场景：后台管理系统，左侧是固定菜单，右侧是不固定内容，那么右侧就是slot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[a];function c(o,p){return e(),t("div",null,l)}const u=n(s,[["render",c],["__file","0.4vue3常用api有哪些？.html.vue"]]),v=JSON.parse('{"path":"/interview/Vue3/0.4vue3%E5%B8%B8%E7%94%A8api%E6%9C%89%E5%93%AA%E4%BA%9B%EF%BC%9F.html","title":"04-vue3常用api有哪些？","lang":"zh-CN","frontmatter":{"title":"04-vue3常用api有哪些？","order":4,"author":"Ms.LM","date":"2024-05-11T00:00:00.000Z","footer":"加油！","copyright":"Copyright © 2024-present Mr.LM","description":"04-vue3常用api有哪些？","head":[["meta",{"property":"og:url","content":"https://mengblog.cn/interview/Vue3/0.4vue3%E5%B8%B8%E7%94%A8api%E6%9C%89%E5%93%AA%E4%BA%9B%EF%BC%9F.html"}],["meta",{"property":"og:site_name","content":"梦博客"}],["meta",{"property":"og:title","content":"04-vue3常用api有哪些？"}],["meta",{"property":"og:description","content":"04-vue3常用api有哪些？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T13:40:19.000Z"}],["meta",{"property":"article:author","content":"Ms.LM"}],["meta",{"property":"article:published_time","content":"2024-05-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-11T13:40:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"04-vue3常用api有哪些？\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-11T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-11T13:40:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ms.LM\\"}]}"]]},"headers":[],"git":{"createdTime":1715434819000,"updatedTime":1715434819000,"contributors":[{"name":"Mr.LM","email":"wz0608@outlook.com","commits":1}]},"readingTime":{"minutes":1.74,"words":522},"filePathRelative":"interview/Vue3/0.4vue3常用api有哪些？.md","localizedDate":"2024年5月11日","copyright":{"author":"Ms.LM"},"autoDesc":true,"excerpt":"\\n<div class=\\"language-markdown\\" data-ext=\\"md\\" data-title=\\"md\\"><pre class=\\"language-markdown\\"><code><span class=\\"token list punctuation\\">1.</span> createApp() ==》 创建一个应用实例。\\n\\t说明：等于Vue2的==》new Vue()\\n\\t使用场景：写插件(封装全局组件会使用)\\n<span class=\\"token list punctuation\\">2.</span> provide/inject ==》依赖注入\\n\\t说明：其实就是传值\\n\\t使用场景：某一个父组件传值 到后代组件，如果层级过多传递麻烦，所以使用\\n\\t缺点：不好维护和查询数据来源\\n<span class=\\"token list punctuation\\">3.</span> directive\\n\\t说明：自定义指令\\n\\t场景：后台管理系统中的按钮权限控制（ 一个用户拥有某些权限，但是只能查看和修改，不能删除）\\n<span class=\\"token list punctuation\\">4.</span> mixin\\n\\t说明：1.全局混入 2. 局部\\n\\t场景：可以添加生命周期，我在小程序的分享功能会用到\\n\\t缺点：不好维护和查询数据来源\\n<span class=\\"token list punctuation\\">5.</span> app.config.globalProperties\\n\\t说明：获取vue这个全局对象的属性和方法\\n\\t场景：自己封装插件的时候需要把方法添加到对象中\\n<span class=\\"token list punctuation\\">6.</span> nextTick\\n\\t说明：等待下一次 DOM 更新刷新的工具方法 ：nextTick返回一个Pormise，回调函数是放在Promise中的，所以是异步执行的\\n\\t场景：就是把dom要更新，那么vue是数据驱动dom，所以数据的赋值就要在nextTick进行\\n<span class=\\"token list punctuation\\">7.</span> computed\\n\\t说明：计算属性\\n\\t场景：有缓存\\n<span class=\\"token list punctuation\\">8.</span> reactive、ref\\n\\t说明：来定义数据的和vue2的data类似\\n<span class=\\"token list punctuation\\">9.</span> watch\\n\\t说明：监听（Vue3不需要深度监听）\\n<span class=\\"token list punctuation\\">10.</span> markRaw()\\n\\t说明：不被new Proxy代理，说白了就是静态的数据\\n<span class=\\"token list punctuation\\">11.</span> defineProps() \\n\\t说明：父组件传递的值，子组件使用setup的形式，需要用defineProps接收\\n<span class=\\"token list punctuation\\">12.</span> defineEmits()\\n\\t当前组件使用setup形式，自定义事件需要使用defineEmits\\n<span class=\\"token list punctuation\\">13.</span> slot\\n\\t说明：分为 1. 匿名 2. 具名 3. 作用域\\n\\t场景：后台管理系统，左侧是固定菜单，右侧是不固定内容，那么右侧就是slot\\n</code></pre></div>"}');export{u as comp,v as data};
