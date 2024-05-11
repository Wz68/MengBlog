import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,b as t}from"./app-DXHnLABm.js";const s={},d=t(`<h1 id="vue2和vue3区别" tabindex="-1"><a class="header-anchor" href="#vue2和vue3区别"><span>vue2和vue3区别？</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1. Vue2 和 Vue3 双向绑定 方法不同

	Vue2 : Object.defineProperty()
			
			***后添加的属性是劫持不到的
		
	Vue3 : new Proxy()
	
			***即使后添加的也可以劫持到
			***还不需要循环

3. $set在vue3中没有，因为new Proxy不需要

4. 关于写法 

	vue2是选项式API
	vue3可以向下兼容（选项式API），也可以组合式api或Setup语法糖形式
	
5. v-if和v-for优先级不同了

6. $ref和$children也不同

7. 如果大家还知道其他api不同点，随便说说就可以了

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue3如果用setup写怎么组织代码" tabindex="-1"><a class="header-anchor" href="#vue3如果用setup写怎么组织代码"><span>vue3如果用setup写怎么组织代码？</span></a></h2><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>说明：hooks（就是函数式），主要让功能模块细分（提升项目的维护性）

<span class="token code keyword">		解决问题：&lt;script setup&gt;
					//代码==》比较乱
				&lt;/script&gt;</span>
面试题：你们vue3写代码的方式 ==〉setup形式

<span class="token code keyword">		解决：hooks</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vue3如果用setup写如何获取类似于vue2中的this？</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>import {  getCurrentInstance } from &#39;vue&#39;
let app = getCurrentInstance();
console.log( app.appContext.app.config.globalProperties.$loading )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vue3常用api有哪些？</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1. createApp() ==》 创建一个应用实例。
	说明：等于Vue2的==》new Vue()
	使用场景：写插件(封装全局组件会使用)
2. provide/inject ==》依赖注入
	说明：其实就是传值
	使用场景：某一个父组件传值 到后代组件，如果层级过多传递麻烦，所以使用
	缺点：不好维护和查询数据来源
3. directive
	说明：自定义指令
	场景：后台管理系统中的按钮权限控制（ 一个用户拥有某些权限，但是只能查看和修改，不能删除）
4. mixin
	说明：1.全局混入 2. 局部
	场景：可以添加生命周期，我在小程序的分享功能会用到
	缺点：不好维护和查询数据来源
5. app.config.globalProperties
	说明：获取vue这个全局对象的属性和方法
	场景：自己封装插件的时候需要把方法添加到对象中
6. nextTick
	说明：等待下一次 DOM 更新刷新的工具方法 ：nextTick返回一个Pormise，回调函数是放在Promise中的，所以是异步执行的
	场景：就是把dom要更新，那么vue是数据驱动dom，所以数据的赋值就要在nextTick进行
7. computed
	说明：计算属性
	场景：有缓存
8. reactive、ref
	说明：来定义数据的和vue2的data类似
9. watch
	说明：监听（Vue3不需要深度监听）
10. markRaw()
	说明：不被new Proxy代理，说白了就是静态的数据
11. defineProps() 
	说明：父组件传递的值，子组件使用setup的形式，需要用defineProps接收
12. defineEmits()
	当前组件使用setup形式，自定义事件需要使用defineEmits
13. slot
	说明：分为 1. 匿名 2. 具名 3. 作用域
	场景：后台管理系统，左侧是固定菜单，右侧是不固定内容，那么右侧就是slot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请介绍一下vue3常用的响应式数据类型</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>ref ：基本类型
reactive ：复杂类型
toRef ：解构某一个值
toRefs ： 解构多个值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请介绍一下teleport组件及其使用场景</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>teleport组件是一个传送门
假如自己写弹出框，需要在页面居中位置展示，不受当前组件的限制，可以把盒子传送到body中
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,12),l=[d];function a(v,r){return n(),i("div",null,l)}const m=e(s,[["render",a],["__file","0.1vue2和vue3区别.html.vue"]]),o=JSON.parse('{"path":"/web/Vue/0.1vue2%E5%92%8Cvue3%E5%8C%BA%E5%88%AB.html","title":"vue2和vue3区别？","lang":"zh-CN","frontmatter":{"description":"vue2和vue3区别？ vue3如果用setup写怎么组织代码？ vue3如果用setup写如何获取类似于vue2中的this？ vue3常用api有哪些？ 请介绍一下vue3常用的响应式数据类型 请介绍一下teleport组件及其使用场景","head":[["link",{"rel":"canonical","href":"https://mengblog.cn/web/Vue/0.1vue2%E5%92%8Cvue3%E5%8C%BA%E5%88%AB.html"}],["meta",{"property":"og:url","content":"https://mengblog.cn/web/Vue/0.1vue2%E5%92%8Cvue3%E5%8C%BA%E5%88%AB.html"}],["meta",{"property":"og:site_name","content":"梦博客"}],["meta",{"property":"og:title","content":"vue2和vue3区别？"}],["meta",{"property":"og:description","content":"vue2和vue3区别？ vue3如果用setup写怎么组织代码？ vue3如果用setup写如何获取类似于vue2中的this？ vue3常用api有哪些？ 请介绍一下vue3常用的响应式数据类型 请介绍一下teleport组件及其使用场景"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T13:49:01.000Z"}],["meta",{"property":"article:author","content":"Mr.LM"}],["meta",{"property":"article:modified_time","content":"2024-05-11T13:49:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"vue2和vue3区别？\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-11T13:49:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.LM\\",\\"url\\":\\"https://mengblog.cn\\"}]}"]]},"headers":[{"level":2,"title":"vue3如果用setup写怎么组织代码？","slug":"vue3如果用setup写怎么组织代码","link":"#vue3如果用setup写怎么组织代码","children":[]}],"git":{"createdTime":1715434819000,"updatedTime":1715435341000,"contributors":[{"name":"Mr.LM","email":"wz0608@outlook.com","commits":2}]},"readingTime":{"minutes":2.69,"words":806},"filePathRelative":"web/Vue/0.1vue2和vue3区别.md","localizedDate":"2024年5月11日","autoDesc":true,"excerpt":"\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>1. Vue2 和 Vue3 双向绑定 方法不同\\n\\n\\tVue2 : Object.defineProperty()\\n\\t\\t\\t\\n\\t\\t\\t***后添加的属性是劫持不到的\\n\\t\\t\\n\\tVue3 : new Proxy()\\n\\t\\n\\t\\t\\t***即使后添加的也可以劫持到\\n\\t\\t\\t***还不需要循环\\n\\n3. $set在vue3中没有，因为new Proxy不需要\\n\\n4. 关于写法 \\n\\n\\tvue2是选项式API\\n\\tvue3可以向下兼容（选项式API），也可以组合式api或Setup语法糖形式\\n\\t\\n5. v-if和v-for优先级不同了\\n\\n6. $ref和$children也不同\\n\\n7. 如果大家还知道其他api不同点，随便说说就可以了\\n\\n</code></pre></div>"}');export{m as comp,o as data};
