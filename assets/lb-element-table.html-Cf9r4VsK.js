import{_ as s,c as i,o as a,a as n}from"./app-CBnZkSh_.js";const e={},l=n(`<h1 id="lb-element-table-基于-element-ui-tabel-封装的表格组件" tabindex="-1"><a class="header-anchor" href="#lb-element-table-基于-element-ui-tabel-封装的表格组件"><span>lb-element-table 基于 Element UI Tabel 封装的表格组件</span></a></h1><p>由于项目中频繁用到表格组件，所以自己基于 Element Table 进行二次封装的一个 Table 组件，<br> 方便日常使用，无缝支持 Element Table 的所有功能参数及事件，欢迎体验！</p><h2 id="github" tabindex="-1"><a class="header-anchor" href="#github"><span>Github</span></a></h2><p><a href="https://github.com/liub1934/lb-element-table" target="_blank" rel="noopener noreferrer">点击前往</a></p><h2 id="更多示例及参考" tabindex="-1"><a class="header-anchor" href="#更多示例及参考"><span>更多示例及参考</span></a></h2><p><a href="https://github.liubing.me/lb-element-table/zh/guide/" target="_blank" rel="noopener noreferrer">点击前往</a></p><h2 id="简单示例参考" tabindex="-1"><a class="header-anchor" href="#简单示例参考"><span>简单示例参考</span></a></h2><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">lb-table</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> :column</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;tableData.column&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> :data</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;tableData.data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">lb-table</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    data</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">      return</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        tableData</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">          column</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">              prop</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;date&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">              label</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;日期&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">              prop</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;name&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">              label</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;姓名&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">              prop</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;address&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">              label</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;地址&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">          ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">          data</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">              date</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;2016-05-02&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">              name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;王小虎1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">              address</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;上海市普陀区金沙江路 1518 弄&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">              date</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;2016-05-02&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">              name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;王小虎2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">              address</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;上海市普陀区金沙江路 1518 弄&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">              date</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;2016-05-02&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">              name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;王小虎3&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">              address</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;上海市普陀区金沙江路 1518 弄&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">          ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="预览" tabindex="-1"><a class="header-anchor" href="#预览"><span>预览</span></a></h2><figure><img src="https://image.liubing.me/2019/12/26/c1530a5da8b76.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure>`,10),t=[l];function h(p,k){return a(),i("div",null,t)}const d=s(e,[["render",h],["__file","lb-element-table.html.vue"]]),B=JSON.parse('{"path":"/article/vue/element-ui/lb-element-table.html","title":"lb-element-table 基于 Element UI Tabel 封装的表格组件","lang":"zh-CN","frontmatter":{"date":"2019-03-25T00:00:00.000Z","category":["Element UI","Vue","Web"],"tag":["Vue","Table","表格"],"layout":"ArticleLayout","containerClass":"article-container","description":"由于项目中频繁用到表格组件，所以自己基于 Element Table 进行二次封装的一个 Table 组件， 方便日常使用，无缝支持 Element Table 的所有功能参数及事件，欢迎体验！","head":[["meta",{"property":"og:url","content":"https://liubing.me/article/vue/element-ui/lb-element-table.html"}],["meta",{"property":"og:site_name","content":"Bing🐣"}],["meta",{"property":"og:title","content":"lb-element-table 基于 Element UI Tabel 封装的表格组件"}],["meta",{"property":"og:description","content":"由于项目中频繁用到表格组件，所以自己基于 Element Table 进行二次封装的一个 Table 组件， 方便日常使用，无缝支持 Element Table 的所有功能参数及事件，欢迎体验！"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://image.liubing.me/2019/12/26/c1530a5da8b76.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-20T14:06:59.000Z"}],["meta",{"property":"article:author","content":"Bing🐣"}],["meta",{"property":"article:tag","content":"Vue"}],["meta",{"property":"article:tag","content":"Table"}],["meta",{"property":"article:tag","content":"表格"}],["meta",{"property":"article:published_time","content":"2019-03-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-20T14:06:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"lb-element-table 基于 Element UI Tabel 封装的表格组件\\",\\"image\\":[\\"https://image.liubing.me/2019/12/26/c1530a5da8b76.png\\"],\\"datePublished\\":\\"2019-03-25T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-20T14:06:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Bing🐣\\"}]}"]]},"headers":[{"level":2,"title":"Github","slug":"github","link":"#github","children":[]},{"level":2,"title":"更多示例及参考","slug":"更多示例及参考","link":"#更多示例及参考","children":[]},{"level":2,"title":"简单示例参考","slug":"简单示例参考","link":"#简单示例参考","children":[]},{"level":2,"title":"预览","slug":"预览","link":"#预览","children":[]}],"git":{"createdTime":1671435588000,"updatedTime":1687270019000,"contributors":[{"name":"liub1934","email":"liub1934@gmail.com","commits":6}]},"readingTime":{"minutes":0.77,"words":230},"filePathRelative":"article/vue/element-ui/lb-element-table.md","localizedDate":"2019年3月25日","excerpt":"\\n<p>由于项目中频繁用到表格组件，所以自己基于 Element Table 进行二次封装的一个 Table 组件，<br>\\n方便日常使用，无缝支持 Element Table 的所有功能参数及事件，欢迎体验！</p>\\n","autoDesc":true}');export{d as comp,B as data};
