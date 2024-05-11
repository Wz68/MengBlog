import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as e,b as s}from"./app-BhsG3XDH.js";const a={},p=s(`<h1 id="_03-vue3如果用setup写如何获取类似于vue2中的this" tabindex="-1"><a class="header-anchor" href="#_03-vue3如果用setup写如何获取类似于vue2中的this"><span>03-vue3如果用setup写如何获取类似于vue2中的this？</span></a></h1><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>  getCurrentInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">let</span> app <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> app<span class="token punctuation">.</span>appContext<span class="token punctuation">.</span>app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>$loading <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function c(i,u){return n(),e("div",null,o)}const d=t(a,[["render",c],["__file","0.3vue3如果用setup写如何获取类似于vue2中的this？.html.vue"]]),m=JSON.parse(`{"path":"/interview/Vue3/0.3vue3%E5%A6%82%E6%9E%9C%E7%94%A8setup%E5%86%99%E5%A6%82%E4%BD%95%E8%8E%B7%E5%8F%96%E7%B1%BB%E4%BC%BC%E4%BA%8Evue2%E4%B8%AD%E7%9A%84this%EF%BC%9F.html","title":"03-vue3如果用setup写如何获取类似于vue2中的this？","lang":"zh-CN","frontmatter":{"title":"03-vue3如果用setup写如何获取类似于vue2中的this？","order":3,"author":"Ms.LM","date":"2024-05-11T00:00:00.000Z","footer":"加油！","copyright":"Copyright © 2024-present Mr.LM","description":"03-vue3如果用setup写如何获取类似于vue2中的this？","head":[["meta",{"property":"og:url","content":"https://mengblog.cn/interview/Vue3/0.3vue3%E5%A6%82%E6%9E%9C%E7%94%A8setup%E5%86%99%E5%A6%82%E4%BD%95%E8%8E%B7%E5%8F%96%E7%B1%BB%E4%BC%BC%E4%BA%8Evue2%E4%B8%AD%E7%9A%84this%EF%BC%9F.html"}],["meta",{"property":"og:site_name","content":"梦博客"}],["meta",{"property":"og:title","content":"03-vue3如果用setup写如何获取类似于vue2中的this？"}],["meta",{"property":"og:description","content":"03-vue3如果用setup写如何获取类似于vue2中的this？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T09:56:42.000Z"}],["meta",{"property":"article:author","content":"Ms.LM"}],["meta",{"property":"article:published_time","content":"2024-05-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-11T09:56:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"03-vue3如果用setup写如何获取类似于vue2中的this？\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-11T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-11T09:56:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ms.LM\\"}]}"]]},"headers":[],"git":{"createdTime":1715421402000,"updatedTime":1715421402000,"contributors":[{"name":"Slm","email":"wz0608@outlook.com","commits":1}]},"readingTime":{"minutes":0.31,"words":92},"filePathRelative":"interview/Vue3/0.3vue3如果用setup写如何获取类似于vue2中的this？.md","localizedDate":"2024年5月11日","copyright":{"author":"Ms.LM"},"autoDesc":true,"excerpt":"\\n<div class=\\"language-typescript\\" data-ext=\\"ts\\" data-title=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span>  getCurrentInstance <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">'vue'</span>\\n<span class=\\"token keyword\\">let</span> app <span class=\\"token operator\\">=</span> <span class=\\"token function\\">getCurrentInstance</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token builtin\\">console</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span> app<span class=\\"token punctuation\\">.</span>appContext<span class=\\"token punctuation\\">.</span>app<span class=\\"token punctuation\\">.</span>config<span class=\\"token punctuation\\">.</span>globalProperties<span class=\\"token punctuation\\">.</span>$loading <span class=\\"token punctuation\\">)</span>\\n</code></pre></div>"}`);export{d as comp,m as data};
