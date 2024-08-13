import{_ as i,c as e,o as a,a as n}from"./app-CBnZkSh_.js";const t={},g=n('<h1 id="宝塔面板迁移-amh-面板初体验" tabindex="-1"><a class="header-anchor" href="#宝塔面板迁移-amh-面板初体验"><span>宝塔面板迁移 AMH 面板初体验</span></a></h1><p>最近宝塔越用越卡，内存占用也很高，加上页面推广元素过多，就有了迁移换其他干净简洁的面板，搜索一番后找到了<a href="https://amh.sh/install.htm?fid=45745" target="_blank" rel="noopener noreferrer">AMH 面板</a>，该国产面板已经持续更新 10 多年，安全方面应该不用质疑。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>该面板适合有一定动手能力用户使用，纯小白用户建议还是选择<a href="https://www.bt.cn/?invite_code=M19senRrbW4=" target="_blank" rel="noopener noreferrer">宝塔面板</a></p></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>博主是个爱折腾的人，近期将面板又迁移到了<a href="https://1panel.cn/" target="_blank" rel="noopener noreferrer">1Panel面板</a>，该面板对Docker和Nodejs的支持较好，当然也是支持PHP的，都是基于Docker部署。</p></div><h2 id="面板介绍" tabindex="-1"><a class="header-anchor" href="#面板介绍"><span>面板介绍</span></a></h2><ul><li>首款开源 <ul><li>AMH 是国内首款开源的主机面板，程序开源透明、纯净、无混淆、无加密。</li><li>AMH 是国内首个支持弹性多环境面板，软件模块化架构设计，高扩展灵活性。</li><li>面板支持 LNMP、LAMP、LNGX、LNAMP 等不同 WEB 应用环境，</li><li>与支持软件多版本同时运行等。</li></ul></li><li>安全稳定 <ul><li>安全稳定是 AMH 面板设计的首要指标，近 10 年 AMH 面板保持零故障、无安全事件。</li><li>AMH 自第一个版本开始，全自主开发框架应用，全程把关面板安全。</li><li>致力解决任何可能存在的安全风险，包括源码篡改、XSS 攻击、CSRF 伪造、SQL 注入，暴力破解、跨站入侵、</li><li>权限突破，及面板所有下载软件源码都进行效验等。</li></ul></li><li>持续更新（10 年+） <ul><li>持续的软件更新支持，AMH 不间断更新已有 10 年+，近 8 年保持每月都有更新。</li><li>软件商店软件更新频率大约为每周。</li></ul></li><li>永久免费 <ul><li>AMH 提供免费版本支持 10 年从未间断，最新版本再次增加提供商业授权可免费授权使用。</li><li>以往收费授权软件，包括异常监控、数据库与文件同步、</li><li>流量防护管理、负载均衡等全部免费可用。</li></ul></li><li>注重隐私 <ul><li>AMH 注重用户隐私，10 年从未有收集用户隐私数据、不发送回传用户使用等数据。</li><li>AMH 开源协议都有约定，禁止软件收集用户隐私数据与用户储存的数据。</li><li>AMH 从创立到至今 10 年一直遵守，从未有过更变。</li></ul></li><li>拒绝广告 <ul><li>追求完美用户体验一直是我们的目标，</li><li>AMH 面板是纯净的，在产品上您不会看到有任何广告或无关信息。</li><li>AMH 不管免费与收费所有版本 10 年从未有投放广告，避免影响用户软件体验。</li></ul></li><li>独立透明 <ul><li>AMH 独立透明，无内置与软件无关的任何第三方组件，程序，不存在利益方等其它关系。</li><li>无远程控制软件的运行，无隐藏式更新等左右、影响软件运行。</li></ul></li><li>最优节能 <ul><li>AMH 轻量化、模块化设计，轻巧、节能极低占用，面板闲时近乎零资源占用。</li><li>AMH 同时对硬件无做限制，例如您可以在 128MB 以下的内存的机器安装，并可顺畅运行。</li></ul></li></ul><figure><img src="https://image.liubing.me/i/2023/12/09/65743890bf453.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><figure><img src="https://image.liubing.me/i/2023/12/09/657438b9edfa4.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h2 id="面板安装" tabindex="-1"><a class="header-anchor" href="#面板安装"><span>面板安装</span></a></h2><div class="hint-container warning"><p class="hint-container-title">注意</p><p>安装请使用纯净的系统，避免软件冲突。<br> 推荐使用极速安装，安装完成后再手动安装相应版本软件。<br> 定制安装速度很慢，如果安装过程出错很可能需要重新来。</p></div><p>根据官网提供的<a href="https://amh.sh/install.htm?fid=45745" target="_blank" rel="noopener noreferrer">教程</a>使用下面的命令一键进行安装，安装时间 1 至 3 分钟。</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">wget</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> https://dl.amh.sh/amh.sh</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">bash</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> amh.sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="面板预览" tabindex="-1"><a class="header-anchor" href="#面板预览"><span>面板预览</span></a></h2><h3 id="首页" tabindex="-1"><a class="header-anchor" href="#首页"><span>首页</span></a></h3><p>页面看着像是上个世纪的产物，和宝塔面板的 UI 相比还是差了很多，胜在页面简洁无广告，内存占用低，反应速度快。</p><figure><img src="https://image.liubing.me/i/2023/12/09/65743b6fa330b.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h3 id="站点管理" tabindex="-1"><a class="header-anchor" href="#站点管理"><span>站点管理</span></a></h3><h4 id="环境列表管理" tabindex="-1"><a class="header-anchor" href="#环境列表管理"><span>环境列表管理</span></a></h4><p>该面板强大之处可以安装各版本的 Nginx、MySql、PHP，针对不同站点的需要创建不同的运行环境，各站点环境相互独立不会互相干扰。</p><figure><img src="https://image.liubing.me/i/2023/12/09/65747e9f83344.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><figure><img src="https://image.liubing.me/i/2023/12/09/65747ed0a2e95.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>目前官网支持以下 3 大站点环境</p><ul><li>LNMP：Linux+Nginx+MySQL+PHP 的环境组合。</li><li>LAMP：Linux+Apache+MySQL+PHP 的环境组合。</li><li>LNGX：Linux+Nginx+X，其中 X 为未限定。（一般主要用于各种反向代理。）</li></ul><figure><img src="https://image.liubing.me/i/2023/12/09/65747f1c56ec0.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>创建完环境后可以自由切换，针对不同的环境添加不同的站点。</p><figure><img src="https://image.liubing.me/i/2023/12/10/657495c01cc0a.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h4 id="虚拟主机" tabindex="-1"><a class="header-anchor" href="#虚拟主机"><span>虚拟主机</span></a></h4><p>该面板的添加站点叫新增虚拟主机，支持新增虚拟主机和子域主机。</p><figure><img src="https://image.liubing.me/i/2023/12/09/65747af10aac1.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>两种主机即站点添加目前用着没啥区别，唯一的区别可能就是子域主机支持指定运行目录，对于需要指定运行目录的可以使用子域主机。</p><figure><img src="https://image.liubing.me/i/2023/12/09/65747b7647ac2.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><figure><img src="https://image.liubing.me/i/2023/12/09/65747b9428460.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>针对 LNGX 的环境，可以添加应用的反向代理，比如 Node、Docker 应用。</p><figure><img src="https://image.liubing.me/i/2023/12/10/657496a54f2f7.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><figure><img src="https://image.liubing.me/i/2023/12/10/6574960961593.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h4 id="扩展安装" tabindex="-1"><a class="header-anchor" href="#扩展安装"><span>扩展安装</span></a></h4><p>支持安装各版本 PHP 和扩展。</p><figure><img src="https://image.liubing.me/i/2023/12/09/65747c3ddbaf2.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>注意有些扩展比如<code>fileinfo</code>、<code>imagick</code>需要到应用商店搜索安装后才能支持对应 PHP 扩展的安装，不然安装会失败。</p><figure><img src="https://image.liubing.me/i/2023/12/09/65748bda47be3.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><figure><img src="https://image.liubing.me/i/2023/12/09/65748bfda9227.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h4 id="php-环境配置" tabindex="-1"><a class="header-anchor" href="#php-环境配置"><span>PHP 环境配置</span></a></h4><p>支持一些常用配置的可视化管理。</p><figure><img src="https://image.liubing.me/i/2023/12/09/65747ca991328.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>也支持编辑模式下高级配置修改。</p><figure><img src="https://image.liubing.me/i/2023/12/09/65747cf968292.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h4 id="规则管理" tabindex="-1"><a class="header-anchor" href="#规则管理"><span>规则管理</span></a></h4><p>支持不同站点的 Nginx 配置单独管理和维护，如添加伪静态、重定向、防盗链等。</p><figure><img src="https://image.liubing.me/i/2023/12/09/65747d3a31ea8.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h4 id="ssl-证书管理" tabindex="-1"><a class="header-anchor" href="#ssl-证书管理"><span>SSL 证书管理</span></a></h4><p>针对各站点的证书配置，支持自签名证书和官网免费<a href="https://amh.sh/ssl.htm" target="_blank" rel="noopener noreferrer">SSL 证书申请</a>。</p><figure><img src="https://image.liubing.me/i/2023/12/09/65747d885eb8e.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h3 id="数据库管理" tabindex="-1"><a class="header-anchor" href="#数据库管理"><span>数据库管理</span></a></h3><p>支持安装不同版本的 MySql 并进行管理，</p><figure><img src="https://image.liubing.me/i/2023/12/09/65748b2a57c07.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>自带的<code>Madmin</code>数据库管理工具如果不喜欢用的话，可以在应用商店安装<code>phpMyAdmin</code>，不过对于一些大文件 SQL 导入还是推荐自带的<code>Madmin</code>。</p><figure><img src="https://image.liubing.me/i/2023/12/09/65748c616499a.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><figure><img src="https://image.liubing.me/i/2023/12/09/65748cd48f9f8.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h3 id="文件管理" tabindex="-1"><a class="header-anchor" href="#文件管理"><span>文件管理</span></a></h3><p>中规中矩的文件管理，一般满足日常使用，自带常用的删除、移动、复制、权限设置、新建、在线解压缩、远程上传、本地上传、文件下载等等。</p><figure><img src="https://image.liubing.me/i/2023/12/09/65748db98b280.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>还额外支持部分格式的文件在线编辑保存，不过支持的文件格式有限，没有宝塔面板的文件功能强大，勉强够用。</p><figure><img src="https://image.liubing.me/i/2023/12/09/65748e10d70a0.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>不过可以在应用商店搜索<code>KODExplorer</code>安装来弥补文件管理、编辑的不足。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>使用<code>KODExplorer</code>需要注意权限问题，不然有些文件可能因为权限问题看不到或者无法编辑保存。</p></div><figure><img src="https://image.liubing.me/i/2023/12/10/65748f38b0164.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h3 id="ftp-管理" tabindex="-1"><a class="header-anchor" href="#ftp-管理"><span>FTP 管理</span></a></h3><p>支持 FTP 的常规管理。</p><figure><img src="https://image.liubing.me/i/2023/12/10/65748fd05b9c0.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h3 id="备份管理" tabindex="-1"><a class="header-anchor" href="#备份管理"><span>备份管理</span></a></h3><p>强大的备份功能，支持本地或远程备份，支持全部站点或单个站点的一键备份和还原，还可以通过安装应用支持备份到各类云存储。</p><figure><img src="https://image.liubing.me/i/2023/12/10/6574908b0378e.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h3 id="网络" tabindex="-1"><a class="header-anchor" href="#网络"><span>网络</span></a></h3><h4 id="防火墙" tabindex="-1"><a class="header-anchor" href="#防火墙"><span>防火墙</span></a></h4><p>功能简陋，但也够用了，支持可视化添加和编辑配置文件添加。一般不用特别处理，AMH 会自动帮我们添加相应的端口。</p><figure><img src="https://image.liubing.me/i/2023/12/10/657491979fdbc.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h4 id="网络管理" tabindex="-1"><a class="header-anchor" href="#网络管理"><span>网络管理</span></a></h4><figure><img src="https://image.liubing.me/i/2023/12/10/6574923f88dd3.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h4 id="系统进程" tabindex="-1"><a class="header-anchor" href="#系统进程"><span>系统进程</span></a></h4><figure><img src="https://image.liubing.me/i/2023/12/10/6574929b835e5.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h3 id="计划任务" tabindex="-1"><a class="header-anchor" href="#计划任务"><span>计划任务</span></a></h3><p>支持各种计划任务的支持，包括站点的定时备份、执行各种脚步等等。</p><figure><img src="https://image.liubing.me/i/2023/12/10/6574931aaf78e.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><figure><img src="https://image.liubing.me/i/2023/12/10/6574933e4a111.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h3 id="其他功能" tabindex="-1"><a class="header-anchor" href="#其他功能"><span>其他功能</span></a></h3><p>异常监控、缓存应用、数据同步、邮局等功能暂未安装体验，请自行在应用商店安装体验。</p><figure><img src="https://image.liubing.me/i/2023/12/10/65749417241e0.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><figure><img src="https://image.liubing.me/i/2023/12/10/657494a0b3bb9.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><figure><img src="https://image.liubing.me/i/2023/12/10/657494e171867.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><figure><img src="https://image.liubing.me/i/2023/12/10/6574952b31811.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>目前官网软件支持有限，暂时还未支持 Docker 和 Node 等应用的管理，UI 过于简陋，可能有些人不太喜欢，不过好处是该面板内存占用很低，无广告、无弹窗打扰。有动手能力的可以尝试下。</p>',92),l=[g];function p(r,s){return a(),e("div",null,l)}const h=i(t,[["render",p],["__file","bt-panel-to-amh-panel.html.vue"]]),c=JSON.parse('{"path":"/article/amh/bt-panel-to-amh-panel.html","title":"宝塔面板迁移 AMH 面板初体验","lang":"zh-CN","frontmatter":{"date":"2023-12-10T00:00:00.000Z","category":["AMH面板"],"tag":["宝塔面板","AMH面板"],"layout":"ArticleLayout","containerClass":"article-container","description":"最近宝塔越用越卡，内存占用也很高，加上页面推广元素过多，就有了迁移换其他干净简洁的面板，搜索一番后找到了AMH 面板，该国产面板已经持续更新 10 多年，安全方面应该不用质疑。","head":[["meta",{"property":"og:url","content":"https://liubing.me/article/amh/bt-panel-to-amh-panel.html"}],["meta",{"property":"og:site_name","content":"Bing🐣"}],["meta",{"property":"og:title","content":"宝塔面板迁移 AMH 面板初体验"}],["meta",{"property":"og:description","content":"最近宝塔越用越卡，内存占用也很高，加上页面推广元素过多，就有了迁移换其他干净简洁的面板，搜索一番后找到了AMH 面板，该国产面板已经持续更新 10 多年，安全方面应该不用质疑。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://image.liubing.me/i/2023/12/09/65743890bf453.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-21T12:04:39.000Z"}],["meta",{"property":"article:author","content":"Bing🐣"}],["meta",{"property":"article:tag","content":"宝塔面板"}],["meta",{"property":"article:tag","content":"AMH面板"}],["meta",{"property":"article:published_time","content":"2023-12-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-21T12:04:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"宝塔面板迁移 AMH 面板初体验\\",\\"image\\":[\\"https://image.liubing.me/i/2023/12/09/65743890bf453.png\\",\\"https://image.liubing.me/i/2023/12/09/657438b9edfa4.png\\",\\"https://image.liubing.me/i/2023/12/09/65743b6fa330b.png\\",\\"https://image.liubing.me/i/2023/12/09/65747e9f83344.png\\",\\"https://image.liubing.me/i/2023/12/09/65747ed0a2e95.png\\",\\"https://image.liubing.me/i/2023/12/09/65747f1c56ec0.png\\",\\"https://image.liubing.me/i/2023/12/10/657495c01cc0a.png\\",\\"https://image.liubing.me/i/2023/12/09/65747af10aac1.png\\",\\"https://image.liubing.me/i/2023/12/09/65747b7647ac2.png\\",\\"https://image.liubing.me/i/2023/12/09/65747b9428460.png\\",\\"https://image.liubing.me/i/2023/12/10/657496a54f2f7.png\\",\\"https://image.liubing.me/i/2023/12/10/6574960961593.png\\",\\"https://image.liubing.me/i/2023/12/09/65747c3ddbaf2.png\\",\\"https://image.liubing.me/i/2023/12/09/65748bda47be3.png\\",\\"https://image.liubing.me/i/2023/12/09/65748bfda9227.png\\",\\"https://image.liubing.me/i/2023/12/09/65747ca991328.png\\",\\"https://image.liubing.me/i/2023/12/09/65747cf968292.png\\",\\"https://image.liubing.me/i/2023/12/09/65747d3a31ea8.png\\",\\"https://image.liubing.me/i/2023/12/09/65747d885eb8e.png\\",\\"https://image.liubing.me/i/2023/12/09/65748b2a57c07.png\\",\\"https://image.liubing.me/i/2023/12/09/65748c616499a.png\\",\\"https://image.liubing.me/i/2023/12/09/65748cd48f9f8.png\\",\\"https://image.liubing.me/i/2023/12/09/65748db98b280.png\\",\\"https://image.liubing.me/i/2023/12/09/65748e10d70a0.png\\",\\"https://image.liubing.me/i/2023/12/10/65748f38b0164.png\\",\\"https://image.liubing.me/i/2023/12/10/65748fd05b9c0.png\\",\\"https://image.liubing.me/i/2023/12/10/6574908b0378e.png\\",\\"https://image.liubing.me/i/2023/12/10/657491979fdbc.png\\",\\"https://image.liubing.me/i/2023/12/10/6574923f88dd3.png\\",\\"https://image.liubing.me/i/2023/12/10/6574929b835e5.png\\",\\"https://image.liubing.me/i/2023/12/10/6574931aaf78e.png\\",\\"https://image.liubing.me/i/2023/12/10/6574933e4a111.png\\",\\"https://image.liubing.me/i/2023/12/10/65749417241e0.png\\",\\"https://image.liubing.me/i/2023/12/10/657494a0b3bb9.png\\",\\"https://image.liubing.me/i/2023/12/10/657494e171867.png\\",\\"https://image.liubing.me/i/2023/12/10/6574952b31811.png\\"],\\"datePublished\\":\\"2023-12-10T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-21T12:04:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Bing🐣\\"}]}"]]},"headers":[{"level":2,"title":"面板介绍","slug":"面板介绍","link":"#面板介绍","children":[]},{"level":2,"title":"面板安装","slug":"面板安装","link":"#面板安装","children":[]},{"level":2,"title":"面板预览","slug":"面板预览","link":"#面板预览","children":[{"level":3,"title":"首页","slug":"首页","link":"#首页","children":[]},{"level":3,"title":"站点管理","slug":"站点管理","link":"#站点管理","children":[{"level":4,"title":"环境列表管理","slug":"环境列表管理","link":"#环境列表管理","children":[]},{"level":4,"title":"虚拟主机","slug":"虚拟主机","link":"#虚拟主机","children":[]},{"level":4,"title":"扩展安装","slug":"扩展安装","link":"#扩展安装","children":[]},{"level":4,"title":"PHP 环境配置","slug":"php-环境配置","link":"#php-环境配置","children":[]},{"level":4,"title":"规则管理","slug":"规则管理","link":"#规则管理","children":[]},{"level":4,"title":"SSL 证书管理","slug":"ssl-证书管理","link":"#ssl-证书管理","children":[]}]},{"level":3,"title":"数据库管理","slug":"数据库管理","link":"#数据库管理","children":[]},{"level":3,"title":"文件管理","slug":"文件管理","link":"#文件管理","children":[]},{"level":3,"title":"FTP 管理","slug":"ftp-管理","link":"#ftp-管理","children":[]},{"level":3,"title":"备份管理","slug":"备份管理","link":"#备份管理","children":[]},{"level":3,"title":"网络","slug":"网络","link":"#网络","children":[{"level":4,"title":"防火墙","slug":"防火墙","link":"#防火墙","children":[]},{"level":4,"title":"网络管理","slug":"网络管理","link":"#网络管理","children":[]},{"level":4,"title":"系统进程","slug":"系统进程","link":"#系统进程","children":[]}]},{"level":3,"title":"计划任务","slug":"计划任务","link":"#计划任务","children":[]},{"level":3,"title":"其他功能","slug":"其他功能","link":"#其他功能","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1702177938000,"updatedTime":1721563479000,"contributors":[{"name":"liub1934","email":"liub1934@gmail.com","commits":4}]},"readingTime":{"minutes":6.76,"words":2027},"filePathRelative":"article/amh/bt-panel-to-amh-panel.md","localizedDate":"2023年12月10日","excerpt":"\\n<p>最近宝塔越用越卡，内存占用也很高，加上页面推广元素过多，就有了迁移换其他干净简洁的面板，搜索一番后找到了<a href=\\"https://amh.sh/install.htm?fid=45745\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">AMH 面板</a>，该国产面板已经持续更新 10 多年，安全方面应该不用质疑。</p>\\n","autoDesc":true}');export{h as comp,c as data};
