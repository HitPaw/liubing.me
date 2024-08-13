import{_ as i,c as s,o as a,a as e}from"./app-CBnZkSh_.js";const t={},n=e(`<h1 id="git-配置" tabindex="-1"><a class="header-anchor" href="#git-配置"><span>Git 配置</span></a></h1><h2 id="全局用户名、邮箱配置" tabindex="-1"><a class="header-anchor" href="#全局用户名、邮箱配置"><span>全局用户名、邮箱配置</span></a></h2><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> user.name</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;xx&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> user.email</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;xx&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="全局用户名、邮箱查看" tabindex="-1"><a class="header-anchor" href="#全局用户名、邮箱查看"><span>全局用户名、邮箱查看</span></a></h2><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> user.name</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> user.email</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="全局用户名、邮箱清除" tabindex="-1"><a class="header-anchor" href="#全局用户名、邮箱清除"><span>全局用户名、邮箱清除</span></a></h2><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --unset</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> user.name</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --unset</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> user.email</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="生成密钥" tabindex="-1"><a class="header-anchor" href="#生成密钥"><span>生成密钥</span></a></h2><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">ssh-keygen</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> rsa</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -C</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;Github邮箱&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ~/.ssh/id_rsa_github</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="config" tabindex="-1"><a class="header-anchor" href="#config"><span>Config</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>Host github.com</span></span>
<span class="line"><span>HostName github.com</span></span>
<span class="line"><span>User github邮箱</span></span>
<span class="line"><span>IdentityFile ~/.ssh/id_rsa_github</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置代理" tabindex="-1"><a class="header-anchor" href="#设置代理"><span>设置代理</span></a></h2><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> https.proxy</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> http://127.0.0.1:1080</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> https.proxy</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> https://127.0.0.1:1080</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="取消代理" tabindex="-1"><a class="header-anchor" href="#取消代理"><span>取消代理</span></a></h2><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --unset</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> http.proxy</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --unset</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> https.proxy</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,15),h=[n];function l(r,d){return a(),s("div",null,h)}const p=i(t,[["render",l],["__file","config.html.vue"]]),g=JSON.parse('{"path":"/notes/git/config.html","title":"Git 配置","lang":"zh-CN","frontmatter":{"order":2,"category":["代码笔记"],"description":"Git 配置 全局用户名、邮箱配置 全局用户名、邮箱查看 全局用户名、邮箱清除 生成密钥 Config 设置代理 取消代理","head":[["meta",{"property":"og:url","content":"https://liubing.me/notes/git/config.html"}],["meta",{"property":"og:site_name","content":"Bing🐣"}],["meta",{"property":"og:title","content":"Git 配置"}],["meta",{"property":"og:description","content":"Git 配置 全局用户名、邮箱配置 全局用户名、邮箱查看 全局用户名、邮箱清除 生成密钥 Config 设置代理 取消代理"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-28T09:48:35.000Z"}],["meta",{"property":"article:author","content":"Bing🐣"}],["meta",{"property":"article:modified_time","content":"2023-03-28T09:48:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Git 配置\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-03-28T09:48:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Bing🐣\\"}]}"]]},"headers":[{"level":2,"title":"全局用户名、邮箱配置","slug":"全局用户名、邮箱配置","link":"#全局用户名、邮箱配置","children":[]},{"level":2,"title":"全局用户名、邮箱查看","slug":"全局用户名、邮箱查看","link":"#全局用户名、邮箱查看","children":[]},{"level":2,"title":"全局用户名、邮箱清除","slug":"全局用户名、邮箱清除","link":"#全局用户名、邮箱清除","children":[]},{"level":2,"title":"生成密钥","slug":"生成密钥","link":"#生成密钥","children":[]},{"level":2,"title":"Config","slug":"config","link":"#config","children":[]},{"level":2,"title":"设置代理","slug":"设置代理","link":"#设置代理","children":[]},{"level":2,"title":"取消代理","slug":"取消代理","link":"#取消代理","children":[]}],"git":{"createdTime":1679117522000,"updatedTime":1679996915000,"contributors":[{"name":"liub1934","email":"liub1934@gmail.com","commits":3}]},"readingTime":{"minutes":0.43,"words":128},"filePathRelative":"notes/git/config.md","localizedDate":"2023年3月18日","excerpt":"\\n<h2>全局用户名、邮箱配置</h2>\\n<div class=\\"language-sh line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"sh\\" data-title=\\"sh\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> config</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> --global</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> user.name</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> \\"xx\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> config</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> --global</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> user.email</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> \\"xx\\"</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{p as comp,g as data};
