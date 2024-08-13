import{_ as h,r as k,c as p,d,ad as a,a as t,o as r,aU as s,b as i}from"./app-CBnZkSh_.js";const g={},c=t(`<h1 id="vue-中使用-csv-优雅的管理-i18n-多语言" tabindex="-1"><a class="header-anchor" href="#vue-中使用-csv-优雅的管理-i18n-多语言"><span>Vue 中使用 CSV 优雅的管理 i18n 多语言</span></a></h1><p>项目中使用 CSV 文件将多语言集中在一起，方便同时对一个 Key 进行修改。<br> 通过一个可执行的文件<code>icotjo</code>，将 CSV 转换成各语言的 JSON 文件。<br><code>icotjo</code>是一个 Go 写的工具，源码可在<a href="https://github.com/wonsikin/icotjo" target="_blank" rel="noopener noreferrer">https://github.com/wonsikin/icotjo</a>查看。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>文中的<code>icotjo.exe</code> <code>icotjo</code> <code>icotjoForMac</code>等文件可以在<a href="https://github.com/liub1934/i18n-csv-tool" target="_blank" rel="noopener noreferrer">Github 仓库</a>进行下载。</p></div><h2 id="csv-文件格式" tabindex="-1"><a class="header-anchor" href="#csv-文件格式"><span>CSV 文件格式</span></a></h2><p>以下是一个通用的管理格式，第一行定义多语言的 Key，按逗号进行分隔。</p><div class="language-csv line-numbers-mode" data-highlighter="shiki" data-ext="csv" data-title="csv" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">key,</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">zh-CN,</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">en-US,</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">ja</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">GENERAL.FIELD.VIEW,</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">查看,</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">View,</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">確認</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://image.liubing.me/2023/02/11/1d7ccb37ebf62.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h2 id="生成多语言-json" tabindex="-1"><a class="header-anchor" href="#生成多语言-json"><span>生成多语言 JSON</span></a></h2><p>Window 系统可直接双击<code>icotjo.exe</code>文件执行，Linux 系统用户可通过命令<code>./icotjo</code>执行，Mac 系统用户同理，通过命令<code>./icotjoForMac</code>执行。</p><p>执行命令后如果 CSV 文件格式都 OK 的话同级目录会自动<code>zh-CN.json</code> <code>en-US.json</code> <code>ja.json</code>文件。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>Linux 或 Mac 执行文件提示没权限的话可以使用 chmod 修改文件权限</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0755</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> icotjo</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0755</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> icotjoForMac</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></div><p>生成的 JSON 文件就是 <code>i18n</code> 所需要引入的文件。</p><figure><img src="https://image.liubing.me/2023/02/11/8a782f7f97a35.gif" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h2 id="引入使用" tabindex="-1"><a class="header-anchor" href="#引入使用"><span>引入使用</span></a></h2><p>已 Vite + Vue3 为例子，通过<code>import</code>引入 json 文件，在 <code>i18n</code> <code>messages</code> 参数中配置</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">createI18n</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;vue-i18n&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">getAppLang</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;@/utils&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> zhCN</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;./lang/zh-CN.json&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> enUS</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;./lang/en-US.json&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> ja</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;./lang/ja.json&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> initLang</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> getAppLang</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> i18n</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> createI18n</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  locale</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">initLang</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  fallbackLocale</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">initLang</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  messages</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    &#39;zh-CN&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">zhCN</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    &#39;en-US&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">enUS</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    ja</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">ja</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> i18n</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="按模块使用" tabindex="-1"><a class="header-anchor" href="#按模块使用"><span>按模块使用</span></a></h2><p>当项目过大且模块过多的时候，多人同时编辑 CSV 文件的时候很容易产生冲突，这时候可以通过按模块的形式去维护管理 CSV，即每个模块都有个 CSV 文件，这样造成冲突的概率会大大减小。</p><figure><img src="https://image.liubing.me/2023/02/11/d3eefb393fd1e.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>为了保持 Key 各个模块的唯一下，可以在 Key 前面加上模块名。如下面的<code>GENERAL</code>和<code>USER</code></p>`,20),o=i("div",{class:"language-csv line-numbers-mode","data-highlighter":"shiki","data-ext":"csv","data-title":"csv",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"key,"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#C678DD"}},"zh-CN,"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"en-US,"),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#7F848E","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}},"ja")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"GENERAL.FIELD.VIEW,"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#C678DD"}},"查看,"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"View,"),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#7F848E","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}},"確認")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1),y=i("div",{class:"language-csv line-numbers-mode","data-highlighter":"shiki","data-ext":"csv","data-title":"csv",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"key,"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#C678DD"}},"zh-CN,"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"en-US,"),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#7F848E","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}},"ja")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"USER.FIELD.LOGIN,"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#C678DD"}},"登录,"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"Login,"),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#7F848E","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}},"ログイン")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"USER.FIELD.WELCOME,"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#C678DD"}},"欢迎,"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"Welcome,"),i("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#7F848E","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}},"ようこそ")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1),B=t(`<h2 id="模块-json-合并" tabindex="-1"><a class="header-anchor" href="#模块-json-合并"><span>模块 JSON 合并</span></a></h2><p>拆分后不同的模块都会输出各个语言的 json 文件，这个时候我们可以使用 Vite 提供的<a href="https://cn.vitejs.dev/guide/features.html#glob-import" target="_blank" rel="noopener noreferrer">Glob 导入</a>来自动导入需要的 json 文件。</p><p>我们将上面引入多语言的代码优化下，通过<code>import.meta.glob</code>引入<code>lang</code>目录下的所有 json 文件，通过循环<code>modules</code>提取多语言文件内容，将同个语言不同的 json 内容合并成一个新的内容。<code>modules</code>中的内容可以打印看下。</p><figure><img src="https://image.liubing.me/2023/02/11/6b05f51e2faa9.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>最终代码如下所示：</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">createI18n</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;vue-i18n&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">getAppLang</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;@/utils&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> messages</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> any</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> modules</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">meta</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">glob</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;./lang/**/*.json&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 获取路径中的多语言</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> getLangByPath</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">path</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> path</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">?.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">split</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)?.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">pop</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()?.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">split</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;.&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)[</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> path</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> in</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> modules</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  modules</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">path</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">mod</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">    console</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">path</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">mod</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> pathLang</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> getLangByPath</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">path</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">pathLang</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">      if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">messages</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">pathLang</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        messages</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">pathLang</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Object</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">assign</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">messages</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">pathLang</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">], </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">mod</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">default</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        messages</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">pathLang</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> mod</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">default</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> initLang</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> getAppLang</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> i18n</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> createI18n</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  locale</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">initLang</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  fallbackLocale</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">initLang</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  messages</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> i18n</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结语" tabindex="-1"><a class="header-anchor" href="#结语"><span>结语</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>文中的<code>icotjo.exe</code> <code>icotjo</code> <code>icotjoForMac</code>等文件可以在<a href="https://github.com/liub1934/i18n-csv-tool" target="_blank" rel="noopener noreferrer">Github 仓库</a>进行下载。</p></div><p>由于 VsCode 对 CSV 文件内容没有高亮颜色显示，可以安装<a href="https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv" target="_blank" rel="noopener noreferrer">Rainbow CSV</a>，安装完成后即可高亮多色显示内容了，该扩展还提供了<code>CSVLint</code>来校验 CSV 内容是否合法。可以比较下安装前后的效果</p><figure><img src="https://image.liubing.me/2023/02/11/38fb104290d00.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><figure><img src="https://image.liubing.me/2023/02/11/5b0bb4bb835d0.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>此外还推荐安装<a href="https://marketplace.visualstudio.com/items?itemName=janisdd.vscode-edit-csv" target="_blank" rel="noopener noreferrer">Edit csv</a>扩展，该扩展可以支持 CSV 在表格里面进行内容修改，对于内容含有很多英文引号和逗号的情况下，避免手写转义引号和逗号的各种麻烦情况。</p><figure><img src="https://image.liubing.me/2023/02/11/a35d824bebbb3.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure>`,13);function m(E,u){const l=k("CodeTabs");return r(),p("div",null,[c,d(l,{id:"62",data:[{id:"通用模块"},{id:"用户模块"}]},{title0:a(({value:n,isActive:e})=>[s("通用模块")]),title1:a(({value:n,isActive:e})=>[s("用户模块")]),tab0:a(({value:n,isActive:e})=>[o]),tab1:a(({value:n,isActive:e})=>[y]),_:1}),B])}const C=h(g,[["render",m],["__file","gracefully-manage-i18n-using-csv-in-vue.html.vue"]]),v=JSON.parse('{"path":"/article/i18n/gracefully-manage-i18n-using-csv-in-vue.html","title":"Vue 中使用 CSV 优雅的管理 i18n 多语言","lang":"zh-CN","frontmatter":{"date":"2023-02-11T00:00:00.000Z","category":["Vue","i18n"],"tag":["Vue","Vite","i18n","Vue I18n"],"layout":"ArticleLayout","containerClass":"article-container","description":"项目中使用 CSV 文件将多语言集中在一起，方便同时对一个 Key 进行修改。 通过一个可执行的文件icotjo，将 CSV 转换成各语言的 JSON 文件。 icotjo是一个 Go 写的工具，源码可在https://github.com/wonsikin/icotjo查看。","head":[["meta",{"property":"og:url","content":"https://liubing.me/article/i18n/gracefully-manage-i18n-using-csv-in-vue.html"}],["meta",{"property":"og:site_name","content":"Bing🐣"}],["meta",{"property":"og:title","content":"Vue 中使用 CSV 优雅的管理 i18n 多语言"}],["meta",{"property":"og:description","content":"项目中使用 CSV 文件将多语言集中在一起，方便同时对一个 Key 进行修改。 通过一个可执行的文件icotjo，将 CSV 转换成各语言的 JSON 文件。 icotjo是一个 Go 写的工具，源码可在https://github.com/wonsikin/icotjo查看。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://image.liubing.me/2023/02/11/1d7ccb37ebf62.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-20T14:06:59.000Z"}],["meta",{"property":"article:author","content":"Bing🐣"}],["meta",{"property":"article:tag","content":"Vue"}],["meta",{"property":"article:tag","content":"Vite"}],["meta",{"property":"article:tag","content":"i18n"}],["meta",{"property":"article:tag","content":"Vue I18n"}],["meta",{"property":"article:published_time","content":"2023-02-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-20T14:06:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vue 中使用 CSV 优雅的管理 i18n 多语言\\",\\"image\\":[\\"https://image.liubing.me/2023/02/11/1d7ccb37ebf62.png\\",\\"https://image.liubing.me/2023/02/11/8a782f7f97a35.gif\\",\\"https://image.liubing.me/2023/02/11/d3eefb393fd1e.png\\",\\"https://image.liubing.me/2023/02/11/6b05f51e2faa9.png\\",\\"https://image.liubing.me/2023/02/11/38fb104290d00.png\\",\\"https://image.liubing.me/2023/02/11/5b0bb4bb835d0.png\\",\\"https://image.liubing.me/2023/02/11/a35d824bebbb3.png\\"],\\"datePublished\\":\\"2023-02-11T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-20T14:06:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Bing🐣\\"}]}"]]},"headers":[{"level":2,"title":"CSV 文件格式","slug":"csv-文件格式","link":"#csv-文件格式","children":[]},{"level":2,"title":"生成多语言 JSON","slug":"生成多语言-json","link":"#生成多语言-json","children":[]},{"level":2,"title":"引入使用","slug":"引入使用","link":"#引入使用","children":[]},{"level":2,"title":"按模块使用","slug":"按模块使用","link":"#按模块使用","children":[]},{"level":2,"title":"模块 JSON 合并","slug":"模块-json-合并","link":"#模块-json-合并","children":[]},{"level":2,"title":"结语","slug":"结语","link":"#结语","children":[]}],"git":{"createdTime":1676098822000,"updatedTime":1687270019000,"contributors":[{"name":"liub1934","email":"liub1934@gmail.com","commits":3}]},"readingTime":{"minutes":3.16,"words":947},"filePathRelative":"article/i18n/gracefully-manage-i18n-using-csv-in-vue.md","localizedDate":"2023年2月11日","excerpt":"\\n<p>项目中使用 CSV 文件将多语言集中在一起，方便同时对一个 Key 进行修改。<br>\\n通过一个可执行的文件<code>icotjo</code>，将 CSV 转换成各语言的 JSON 文件。<br>\\n<code>icotjo</code>是一个 Go 写的工具，源码可在<a href=\\"https://github.com/wonsikin/icotjo\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/wonsikin/icotjo</a>查看。</p>\\n","autoDesc":true}');export{C as comp,v as data};
