import{_ as e,c as i,o as a,a as n}from"./app-CBnZkSh_.js";const s={},t=n(`<h1 id="jenkins-vue-svn-实现自动打包构建及部署" tabindex="-1"><a class="header-anchor" href="#jenkins-vue-svn-实现自动打包构建及部署"><span>Jenkins+Vue+SVN 实现自动打包构建及部署</span></a></h1><figure><img src="https://image.liubing.me/2019/12/26/e3fb047569f16.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>由于公司里版本控制用的 svn，项目框架用的是 vue，所以在后期的时候搜索自学了下 Jenkins，<br> 实现了下 Jenkins+Vue+SVN 自动化打包构建及部署。</p><h2 id="为什么要-jenkins" tabindex="-1"><a class="header-anchor" href="#为什么要-jenkins"><span>为什么要 Jenkins</span></a></h2><p>先谈谈为什么需要 Jenkins 做自动化处理，公司中的项目中，不管是 svn 还是 git 做版本控制，肯定避免不了分支，一个项目不太可能一个分支从头撸到尾。<br> 一般的项目最少应该都是有 4 个分支的，以 SVN 为例，分为以下几个分支：<br> dev：本地开发环境分支<br> uat：测试环境分支<br> qprod：准生产环境分支<br> prod：生产环境分支<br> 整体工作流程大概是本地开发完成后提交 dev 并发布，dev 代码合并到 uat 并发布进行测试，测试完成后合并到 qprod 并发布，准生产环境验证完毕后合并到 prod 并发布：</p><blockquote><p>dev ---&gt; uat ---&gt; qprod ---&gt; prod</p></blockquote><p>其中 dev 、uat、qprod 、prod 都是需要发布部署项目代码的，所以每次有代码发布更新的时候我们是不可能进行手动一个一个的进行打包然后拖到 ftp 上面，一来很繁琐，二来浪费时间。<br> 所以我们就可以借助 Jenkins 将上面的一些列操作环节进行自动化处理，我们所需要的就是提交代码，合并代码，剩下的打包发布之类的重复性活交给 Jenkins 就好了。</p><h2 id="安装部署-jenkins" tabindex="-1"><a class="header-anchor" href="#安装部署-jenkins"><span>安装部署 Jenkins</span></a></h2><p>怎么安装 Jenkins 这里就不多说了，网上的教程也都很多，善用搜索引擎，<br> 懒人点<a href="https://segmentfault.com/a/1190000004639325" target="_blank" rel="noopener noreferrer">传送门</a>去看安装教程，网上随便搜的一个教程。<br> 整个界面大概就是长这样子</p><figure><img src="https://image.liubing.me/2019/12/26/b239d25fa863e.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h2 id="插件安装" tabindex="-1"><a class="header-anchor" href="#插件安装"><span>插件安装</span></a></h2><p>列几个必备的插件：</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>Publish over SSH</span></span>
<span class="line"><span>NodeJS</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>点击左侧的<code>Manage Jenkins(系统管理)</code> --&gt; <code>Manage Plugins(插件管理)</code>进行相关插件的安装</p><figure><img src="https://image.liubing.me/2019/12/26/5061a770ceea6.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h2 id="相关配置" tabindex="-1"><a class="header-anchor" href="#相关配置"><span>相关配置</span></a></h2><p>上面插件安装完毕后还需要进行一些相关的设置，<br> 点击左侧的<code>Manage Jenkins(系统管理)</code> --&gt; <code>Configure System(系统设置)</code></p><figure><img src="https://image.liubing.me/2019/12/26/4d0ab7c5f6cad.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><figure><img src="https://image.liubing.me/2019/12/26/52ad11b1e53c5.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h3 id="publish-over-ssh-配置" tabindex="-1"><a class="header-anchor" href="#publish-over-ssh-配置"><span>Publish over SSH 配置</span></a></h3><p>往下翻，找到 Publish over SSH 配置项，添加 SSH Servers</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>Name：名称，可以随便取</span></span>
<span class="line"><span>Hostname：服务器IP</span></span>
<span class="line"><span>Remote Directory：远程目录，即将文件传送到该服务器的什么位置</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>记住这里的 Remote Directory，我们暂定为服务器上的/data/web</p></blockquote><figure><img src="https://image.liubing.me/2019/12/26/b7a1486121a8d.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>如需配置端口、密码及其他的设置点开<code>Advanced</code>按钮即可</p><figure><img src="https://image.liubing.me/2019/12/26/04d6f903f9666.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>设置完毕后可以点击<code>Test Configuration</code>测试下连通性，如果出现<code>Success</code>则代表没问题。</p><h3 id="nodejs-配置" tabindex="-1"><a class="header-anchor" href="#nodejs-配置"><span>NodeJs 配置</span></a></h3><p>点击左侧的<code>Manage Jenkins(系统管理)</code> --&gt; <code>Global Tool Configuration(全局工具配置)</code></p><figure><img src="https://image.liubing.me/2019/12/26/4d0ab7c5f6cad.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><figure><img src="https://image.liubing.me/2019/12/26/69d73209b7cb6.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>找到 Nodejs 配置的地方，按下图进行相关设置，</p><figure><img src="https://image.liubing.me/2019/12/26/6ac0baec94434.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>方便大家复制，如果你的项目是 cnpm 管理的依赖，可以在<code>Global npm packages to install</code>填上<code>cnpm --registry=https://registry.npm.taobao.org</code>，<br> 会从淘宝源全局安装 cnpm，后续的相关 npm 命令换成 cnpm 即可。</p><h2 id="创建任务" tabindex="-1"><a class="header-anchor" href="#创建任务"><span>创建任务</span></a></h2><p>点击左侧的<code>New Item</code>新建任务</p><figure><img src="https://image.liubing.me/2019/12/26/85e29164bfe52.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>填写任务名称，选择<code>Freestyle project</code>后点击 OK 进入下一步</p><figure><img src="https://image.liubing.me/2019/12/26/9cc55036fe7e0.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h3 id="general" tabindex="-1"><a class="header-anchor" href="#general"><span>General</span></a></h3><p>可以填写下任务的描述信息，勾上<code>Discard old builds(丢弃旧的构建)</code>，<br><code>Days to keep builds(保持构建的天数)</code>和<code>Max # of builds to keep(保留的最大构建数)</code>可以按自己的需求填写，<br> 这里我们暂时都填写 7.</p><figure><img src="https://image.liubing.me/2019/12/26/52f6abf94cac0.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h3 id="source-code-management-源代码管理" tabindex="-1"><a class="header-anchor" href="#source-code-management-源代码管理"><span>Source Code Management 源代码管理</span></a></h3><p>选择<code>Subversion</code>，从 SVN 获取代码。</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>Repository URL：SVN上代码的位置</span></span>
<span class="line"><span>Credentials：证书凭证，就是SVN的账户密码，可以点击Add进行自行添加</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://image.liubing.me/2019/12/26/4120a35a21061.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h3 id="build-triggers-构建触发器" tabindex="-1"><a class="header-anchor" href="#build-triggers-构建触发器"><span>Build Triggers 构建触发器</span></a></h3><p>勾选<code>Poll SCM</code>轮询 SCM，<code>Schedule</code>中填写<code>* * * * *</code>,<br> 代表每分钟都去轮询检查下 SVN 有没有新的提交，有新提交的话就会触发任务。</p><figure><img src="https://image.liubing.me/2019/12/26/6a2118b8f0e05.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h3 id="build-environment-构建环境" tabindex="-1"><a class="header-anchor" href="#build-environment-构建环境"><span>Build Environment 构建环境</span></a></h3><p>勾选<code>Provide Node &amp; npm bin/ folder to PATH</code>，选择上面<code>NodeJs配置</code>中配置的版本</p><figure><img src="https://image.liubing.me/2019/12/26/3167adb63944b.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h3 id="build-构建" tabindex="-1"><a class="header-anchor" href="#build-构建"><span>Build 构建</span></a></h3><p>点击<code>Add build step</code>按钮，选择<code>Execute shell</code></p><figure><img src="https://image.liubing.me/2019/12/26/3598d378b12f8.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><figure><img src="https://image.liubing.me/2019/12/26/f899b25d416e0.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>shell 中执行打包的相关命令，其中<code>xxx</code>为打包后名称</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> build</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> dist</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -rf</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> xxx.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -zcvf</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> xxx.tar.gz</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> *</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://image.liubing.me/2019/12/26/efdeb36495df2.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h3 id="post-build-actions-构建后的操作" tabindex="-1"><a class="header-anchor" href="#post-build-actions-构建后的操作"><span>Post-build Actions 构建后的操作</span></a></h3><p>点击<code>Add post-build action</code>按钮，选择<code>Send files or execute commands over SSH</code>，<br> 选择上面事先配置好的 SSH Server。</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>Source files：源文件</span></span>
<span class="line"><span>Remove prefix：删除的前缀</span></span>
<span class="line"><span>Remote directory：远程目录</span></span>
<span class="line"><span>Exec command：执行的命令</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中<code>Remote directory</code>填写的目录是相对于上面<code>Publish over SSH配置</code>中配置的<code>Remote Directory</code>, 上面配置的是<code>/data/web</code>,<br> 假设我们的目录结构如下所示</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>/data/web/project1</span></span>
<span class="line"><span>/data/web/project2</span></span>
<span class="line"><span>/data/web/project3</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们构建完成的包需要发送到<code>/data/web/project1</code>目录下，<code>Remote directory</code>只需要配置<code>/project1即可</code></p><figure><img src="https://image.liubing.me/2019/12/26/a0e264c632219.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>Exec command 执行的命令：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /data/web/project1</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # 进入到该目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -zxvf</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> project1.tar.gz</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # 解压tar包</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -rf</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> project1.tar.gz</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # 解压完成后删除tar包</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后点击最下面的<code>Save</code>按钮保存配置。</p><h2 id="测试构建" tabindex="-1"><a class="header-anchor" href="#测试构建"><span>测试构建</span></a></h2><p>任务流程都写完后，点击具体的任务名称进入任务任务详情页面，点击<code>Build Now</code>立即构建，查看构建过程是否能成功。</p><figure><img src="https://image.liubing.me/2019/12/26/90f91d8dc0769.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>构建过程中可以点击下面<code>Build History</code>中的任务左侧的蓝色小球查看构建信息</p><figure><img src="https://image.liubing.me/2019/12/26/4584b92ea0c39.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>如果一切顺利，最后可以看到<code>Finished: SUCCESS</code>字样。</p><figure><img src="https://image.liubing.me/2019/12/26/99e5e933891d0.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>成功后我们可以在 SVN 测试提交一条新记录，等待 1 分钟后看看相应的任务是否自动执行了。</p><h2 id="结语" tabindex="-1"><a class="header-anchor" href="#结语"><span>结语</span></a></h2><p>同理其他的几个分支也可以创建相应的任务，有代码更新后自动进行打包构建发布等一系列操作了，<br> 再也不需要手动打包，打完包后在用 ftp 手动上传的相应的服务器位置了，<br> 我们需要做的就是写代码，提交代码，合并代码，其他的事让 Jenkins 为我们去自动处理。<br> 如果版本管理用的事 Git，原理是一样的。</p>`,79),l=[t];function d(g,r){return a(),i("div",null,l)}const c=e(s,[["render",d],["__file","jenkins-vue-svn-auto-build.html.vue"]]),o=JSON.parse('{"path":"/article/vue/jenkins-vue-svn-auto-build.html","title":"Jenkins+Vue+SVN 实现自动打包构建及部署","lang":"zh-CN","frontmatter":{"date":"2019-05-02T00:00:00.000Z","category":["其他","Jenkins"],"tag":["Vue","Jenkins","SVN","自动构建","自动部署","自动打包"],"layout":"ArticleLayout","containerClass":"article-container","description":"imageimage 由于公司里版本控制用的 svn，项目框架用的是 vue，所以在后期的时候搜索自学了下 Jenkins， 实现了下 Jenkins+Vue+SVN 自动化打包构建及部署。","head":[["meta",{"property":"og:url","content":"https://liubing.me/article/vue/jenkins-vue-svn-auto-build.html"}],["meta",{"property":"og:site_name","content":"Bing🐣"}],["meta",{"property":"og:title","content":"Jenkins+Vue+SVN 实现自动打包构建及部署"}],["meta",{"property":"og:description","content":"imageimage 由于公司里版本控制用的 svn，项目框架用的是 vue，所以在后期的时候搜索自学了下 Jenkins， 实现了下 Jenkins+Vue+SVN 自动化打包构建及部署。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://image.liubing.me/2019/12/26/e3fb047569f16.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-20T14:06:59.000Z"}],["meta",{"property":"article:author","content":"Bing🐣"}],["meta",{"property":"article:tag","content":"Vue"}],["meta",{"property":"article:tag","content":"Jenkins"}],["meta",{"property":"article:tag","content":"SVN"}],["meta",{"property":"article:tag","content":"自动构建"}],["meta",{"property":"article:tag","content":"自动部署"}],["meta",{"property":"article:tag","content":"自动打包"}],["meta",{"property":"article:published_time","content":"2019-05-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-20T14:06:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Jenkins+Vue+SVN 实现自动打包构建及部署\\",\\"image\\":[\\"https://image.liubing.me/2019/12/26/e3fb047569f16.png\\",\\"https://image.liubing.me/2019/12/26/b239d25fa863e.png\\",\\"https://image.liubing.me/2019/12/26/5061a770ceea6.png\\",\\"https://image.liubing.me/2019/12/26/4d0ab7c5f6cad.png\\",\\"https://image.liubing.me/2019/12/26/52ad11b1e53c5.png\\",\\"https://image.liubing.me/2019/12/26/b7a1486121a8d.png\\",\\"https://image.liubing.me/2019/12/26/04d6f903f9666.png\\",\\"https://image.liubing.me/2019/12/26/4d0ab7c5f6cad.png\\",\\"https://image.liubing.me/2019/12/26/69d73209b7cb6.png\\",\\"https://image.liubing.me/2019/12/26/6ac0baec94434.png\\",\\"https://image.liubing.me/2019/12/26/85e29164bfe52.png\\",\\"https://image.liubing.me/2019/12/26/9cc55036fe7e0.png\\",\\"https://image.liubing.me/2019/12/26/52f6abf94cac0.png\\",\\"https://image.liubing.me/2019/12/26/4120a35a21061.png\\",\\"https://image.liubing.me/2019/12/26/6a2118b8f0e05.png\\",\\"https://image.liubing.me/2019/12/26/3167adb63944b.png\\",\\"https://image.liubing.me/2019/12/26/3598d378b12f8.png\\",\\"https://image.liubing.me/2019/12/26/f899b25d416e0.png\\",\\"https://image.liubing.me/2019/12/26/efdeb36495df2.png\\",\\"https://image.liubing.me/2019/12/26/a0e264c632219.png\\",\\"https://image.liubing.me/2019/12/26/90f91d8dc0769.png\\",\\"https://image.liubing.me/2019/12/26/4584b92ea0c39.png\\",\\"https://image.liubing.me/2019/12/26/99e5e933891d0.png\\"],\\"datePublished\\":\\"2019-05-02T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-20T14:06:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Bing🐣\\"}]}"]]},"headers":[{"level":2,"title":"为什么要 Jenkins","slug":"为什么要-jenkins","link":"#为什么要-jenkins","children":[]},{"level":2,"title":"安装部署 Jenkins","slug":"安装部署-jenkins","link":"#安装部署-jenkins","children":[]},{"level":2,"title":"插件安装","slug":"插件安装","link":"#插件安装","children":[]},{"level":2,"title":"相关配置","slug":"相关配置","link":"#相关配置","children":[{"level":3,"title":"Publish over SSH 配置","slug":"publish-over-ssh-配置","link":"#publish-over-ssh-配置","children":[]},{"level":3,"title":"NodeJs 配置","slug":"nodejs-配置","link":"#nodejs-配置","children":[]}]},{"level":2,"title":"创建任务","slug":"创建任务","link":"#创建任务","children":[{"level":3,"title":"General","slug":"general","link":"#general","children":[]},{"level":3,"title":"Source Code Management 源代码管理","slug":"source-code-management-源代码管理","link":"#source-code-management-源代码管理","children":[]},{"level":3,"title":"Build Triggers 构建触发器","slug":"build-triggers-构建触发器","link":"#build-triggers-构建触发器","children":[]},{"level":3,"title":"Build Environment 构建环境","slug":"build-environment-构建环境","link":"#build-environment-构建环境","children":[]},{"level":3,"title":"Build 构建","slug":"build-构建","link":"#build-构建","children":[]},{"level":3,"title":"Post-build Actions 构建后的操作","slug":"post-build-actions-构建后的操作","link":"#post-build-actions-构建后的操作","children":[]}]},{"level":2,"title":"测试构建","slug":"测试构建","link":"#测试构建","children":[]},{"level":2,"title":"结语","slug":"结语","link":"#结语","children":[]}],"git":{"createdTime":1671435588000,"updatedTime":1687270019000,"contributors":[{"name":"liub1934","email":"liub1934@gmail.com","commits":8}]},"readingTime":{"minutes":5.31,"words":1594},"filePathRelative":"article/vue/jenkins-vue-svn-auto-build.md","localizedDate":"2019年5月2日","excerpt":"\\n<figure><img src=\\"https://image.liubing.me/2019/12/26/e3fb047569f16.png\\" alt=\\"image\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image</figcaption></figure>\\n<p>由于公司里版本控制用的 svn，项目框架用的是 vue，所以在后期的时候搜索自学了下 Jenkins，<br>\\n实现了下 Jenkins+Vue+SVN 自动化打包构建及部署。</p>\\n","autoDesc":true}');export{c as comp,o as data};
