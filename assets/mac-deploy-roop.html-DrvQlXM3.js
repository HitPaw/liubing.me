import{_ as i,c as s,o as e,a}from"./app-CBnZkSh_.js";const t={},n=a(`<h1 id="mac-本地部署安装-roop-从此换脸不求人" tabindex="-1"><a class="header-anchor" href="#mac-本地部署安装-roop-从此换脸不求人"><span>Mac 本地部署安装 Roop，从此换脸不求人</span></a></h1><p>虽然市面有有不少现成的产品都提供了 AI 换脸功能，但是把脸部数据提供给别人总感觉怪怪的，也不太安全，后来在油管上了解到了一款可本地部署的开源换脸程序 Roop，赶紧搜点教程本地部署一个玩玩，顺便记录一下。</p><h2 id="什么是-roop" tabindex="-1"><a class="header-anchor" href="#什么是-roop"><span>什么是 Roop</span></a></h2><p>Roop 是一个可以简单的使用一张人脸照片一键操作就能实现照片或者视频进行 AI 换脸，效果基本上可以以假乱真，开源仓库地址可以<a href="https://github.com/s0md3v/roop" target="_blank" rel="noopener noreferrer">点击此处</a>进行访问，文档相关部署教程也可以参考<a href="https://github.com/s0md3v/roop/wiki" target="_blank" rel="noopener noreferrer">Roop Wiki</a>。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>国内网络环境因素，以下的安装过程需要开启魔法 🪄 上网</p></div><h2 id="安装-roop" tabindex="-1"><a class="header-anchor" href="#安装-roop"><span>安装 Roop</span></a></h2><p><a href="https://github.com/s0md3v/roop/wiki" target="_blank" rel="noopener noreferrer">Roop Wiki</a>提供了 Linux、MacOS、Windows 安装教程，这里已 MacOS 为例。</p><p>必备的安装工具<a href="https://brew.sh/" target="_blank" rel="noopener noreferrer">Homebrew</a>，我相信用 Mac 的基本上都已经安装了，如果没有安装使用<a href="https://brew.sh/" target="_blank" rel="noopener noreferrer">Homebrew 文档</a>上的一键安装命令终端执行下。已经安装了 Homebrew 的话执行下面的命令安装 Roop 项目的前置依赖，如已安装 Python 或者 Git 可以跳过安装。</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># Python</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> python@3.10</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># PIP</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">python</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ensurepip</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># GIT</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> git</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># FFmpeg</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ffmpeg</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="拉取代码" tabindex="-1"><a class="header-anchor" href="#拉取代码"><span>拉取代码</span></a></h3><p>找一个目录使用 git 命令将项目仓库 clone 到本地。</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> https://github.com/s0md3v/roop.git</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="https://image.liubing.me/i/2023/08/14/64d9780c71111.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h3 id="安装项目依赖" tabindex="-1"><a class="header-anchor" href="#安装项目依赖"><span>安装项目依赖</span></a></h3><p>使用终端打开 roop 目录</p><figure><img src="https://image.liubing.me/i/2023/08/14/64d979092f0c9.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>执行下面的命令进行依赖安装，网络上好多教程都说的需要修改<code>requirements.txt</code>文件里面的依赖，我尝试了不修改也是可以安装成功的。</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> requirements.txt</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>等待依赖全部安装完成即可，网络良好的可能几分钟就 OK 了。</p><figure><img src="https://image.liubing.me/i/2023/08/14/64d9798e1c570.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h2 id="运行-roop" tabindex="-1"><a class="header-anchor" href="#运行-roop"><span>运行 Roop</span></a></h2><p>依赖完成后使用命令就能启动项目了，首次启动过程中还会额外安装一些依赖，耐心等待安装完成，启动完成后是一个可视化的界面，操作也非常简单。</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">python</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> run.py</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>启动过程中如果报错了<code>tkinter</code>的相关错误，可以使用的命令安装<code>python-tk@3.10</code></p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> python-tk@3.10</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></div><figure><img src="https://image.liubing.me/i/2023/08/14/64d97b34c1695.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>大致翻译一下</p><figure><img src="https://image.liubing.me/i/2023/08/14/64d97b862df29.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h2 id="加速-roop" tabindex="-1"><a class="header-anchor" href="#加速-roop"><span>加速 Roop</span></a></h2><p>此时换脸生成图片和视频的速度还很慢，我们可以参考<a href="https://github.com/s0md3v/roop/wiki/2.-Acceleration" target="_blank" rel="noopener noreferrer">加速文档</a>，安装一些依赖项来提供生成的速度。</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># Mac M系列</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> uninstall</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> onnxruntime</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> onnxruntime-silicon</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> onnxruntime-silicon==</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1.13.1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装完成后就可以在运行的时候加入相关的参数</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">python</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> run.py</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --execution-provider</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> coreml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>生成速度虽然提高了，但是视频换脸经常性出现内存不足，低内存的 Mac 还是不要使用上面的命令进行视频换脸</p></div><h2 id="命令整理" tabindex="-1"><a class="header-anchor" href="#命令整理"><span>命令整理</span></a></h2><p>网上也看了下教程，整理下自用的启动命令</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 低内存视频换脸容易内存不足，建议大内存或者仅图片换脸使用</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">python</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  run.py</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --execution-provider</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> coreml</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --execution-threads</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 4</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --temp-frame-format</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> jpg</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --frame-processor</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> face_swapper</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> face_enhancer</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --similar-face-distance</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1.5</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 低内存视频换脸使用，速度会慢点</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">python</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> run.py</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --temp-frame-format</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> jpg</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --frame-processor</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> face_swapper</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> face_enhancer</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --similar-face-distance</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1.5</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体的参数说明可以参考<a href="https://roop-ai.gitbook.io/roop/knowledgebase/advanced-features" target="_blank" rel="noopener noreferrer">文档高级功能</a>或者自行搜索。</p><h2 id="效果预览" tabindex="-1"><a class="header-anchor" href="#效果预览"><span>效果预览</span></a></h2><p>抖音上找了个漂亮小姐姐的视频，用自己媳妇美颜后脸尝试替换了下，视频最终的脸部效果看着还是可以的。一下两张预览左边的媳妇的脸，右边是原作者的脸。</p><figure><img src="https://image.liubing.me/i/2023/08/14/64d97e7f37431.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><figure><img src="https://image.liubing.me/i/2023/08/14/64d97e516ebde.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure>`,41),l=[n];function h(r,p){return e(),s("div",null,l)}const o=i(t,[["render",h],["__file","mac-deploy-roop.html.vue"]]),k=JSON.parse('{"path":"/article/ai/mac-deploy-roop.html","title":"Mac 本地部署安装 Roop，从此换脸不求人","lang":"zh-CN","frontmatter":{"date":"2023-08-14T00:00:00.000Z","star":true,"category":["AI","Mac","Roop"],"tag":["AI","换脸"],"layout":"ArticleLayout","containerClass":"article-container","description":"虽然市面有有不少现成的产品都提供了 AI 换脸功能，但是把脸部数据提供给别人总感觉怪怪的，也不太安全，后来在油管上了解到了一款可本地部署的开源换脸程序 Roop，赶紧搜点教程本地部署一个玩玩，顺便记录一下。","head":[["meta",{"property":"og:url","content":"https://liubing.me/article/ai/mac-deploy-roop.html"}],["meta",{"property":"og:site_name","content":"Bing🐣"}],["meta",{"property":"og:title","content":"Mac 本地部署安装 Roop，从此换脸不求人"}],["meta",{"property":"og:description","content":"虽然市面有有不少现成的产品都提供了 AI 换脸功能，但是把脸部数据提供给别人总感觉怪怪的，也不太安全，后来在油管上了解到了一款可本地部署的开源换脸程序 Roop，赶紧搜点教程本地部署一个玩玩，顺便记录一下。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://image.liubing.me/i/2023/08/14/64d9780c71111.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-20T01:12:27.000Z"}],["meta",{"property":"article:author","content":"Bing🐣"}],["meta",{"property":"article:tag","content":"AI"}],["meta",{"property":"article:tag","content":"换脸"}],["meta",{"property":"article:published_time","content":"2023-08-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-20T01:12:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Mac 本地部署安装 Roop，从此换脸不求人\\",\\"image\\":[\\"https://image.liubing.me/i/2023/08/14/64d9780c71111.png\\",\\"https://image.liubing.me/i/2023/08/14/64d979092f0c9.png\\",\\"https://image.liubing.me/i/2023/08/14/64d9798e1c570.png\\",\\"https://image.liubing.me/i/2023/08/14/64d97b34c1695.png\\",\\"https://image.liubing.me/i/2023/08/14/64d97b862df29.png\\",\\"https://image.liubing.me/i/2023/08/14/64d97e7f37431.png\\",\\"https://image.liubing.me/i/2023/08/14/64d97e516ebde.png\\"],\\"datePublished\\":\\"2023-08-14T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-20T01:12:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Bing🐣\\"}]}"]]},"headers":[{"level":2,"title":"什么是 Roop","slug":"什么是-roop","link":"#什么是-roop","children":[]},{"level":2,"title":"安装 Roop","slug":"安装-roop","link":"#安装-roop","children":[{"level":3,"title":"拉取代码","slug":"拉取代码","link":"#拉取代码","children":[]},{"level":3,"title":"安装项目依赖","slug":"安装项目依赖","link":"#安装项目依赖","children":[]}]},{"level":2,"title":"运行 Roop","slug":"运行-roop","link":"#运行-roop","children":[]},{"level":2,"title":"加速 Roop","slug":"加速-roop","link":"#加速-roop","children":[]},{"level":2,"title":"命令整理","slug":"命令整理","link":"#命令整理","children":[]},{"level":2,"title":"效果预览","slug":"效果预览","link":"#效果预览","children":[]}],"git":{"createdTime":1692011773000,"updatedTime":1695172347000,"contributors":[{"name":"liub1934","email":"liub1934@gmail.com","commits":3}]},"readingTime":{"minutes":3.16,"words":949},"filePathRelative":"article/ai/mac-deploy-roop.md","localizedDate":"2023年8月14日","excerpt":"\\n<p>虽然市面有有不少现成的产品都提供了 AI 换脸功能，但是把脸部数据提供给别人总感觉怪怪的，也不太安全，后来在油管上了解到了一款可本地部署的开源换脸程序 Roop，赶紧搜点教程本地部署一个玩玩，顺便记录一下。</p>\\n","autoDesc":true}');export{o as comp,k as data};
