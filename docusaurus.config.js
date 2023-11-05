// @ts-check

const path = require('path')
const beian = ''

const announcementBarContent = ''

module.exports = async function createConfigAsync() {
  /** @type {import('@docusaurus/types').Config} */
  return {
    title: 'Se7en的架构笔记',
    url: 'https://Se7en.cn',
    baseUrl: '/',
    favicon: 'img/favicon.ico',
    organizationName: 'Se7en',
    projectName: 'blog',
    tagline: '道阻且长，行则将至',
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    themeConfig: {
      // announcementBar: {
      //   id: 'announcementBar-3',
      //   content: announcementBarContent,
      // },
      metadata: [
        {
          name: 'keywords',
          content: 'Se7en, Se7en',
        },
        {
          name: 'keywords',
          content: 'blog, javascript, typescript, node, react, vue, web',
        },
        {
          name: 'keywords',
          content: '编程爱好者, Web开发者, 写过爬虫, 学过逆向, 现在主攻ts全栈',
        },
      ],
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      headTags: [
        {
          tagName: 'meta',
          attributes: {
            name: 'description',
            content: 'Se7en的个人博客',
          },
        },
      ],
      navbar: {
        logo: {
          alt: 'Se7en',
          src: 'img/logo.webp',
          srcDark: 'img/logo.webp',
        },
        hideOnScroll: true,
        items: [
          {
            label: '博客',
            position: 'right',
            to: 'blog',
          },
          {
            label: '笔记',
            position: 'right',
            to: 'docs/skill',
          },
          {
            label: '归档',
            position: 'right',
            to: 'blog/archive',
          },
          {
            label: '更多',
            position: 'right',
            items: [
              { label: '资源', to: 'resource' },
              { label: '友链', to: 'friends' },
              { label: '工具推荐', to: 'docs/tools' },
            ],
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '学习',
            items: [
              { label: '博客', to: 'blog' },
              { label: '归档', to: 'blog/archive' },
              { label: '技术笔记', to: 'docs/skill' },
              { label: '实战项目', to: 'project' },
            ],
          },
          {
            title: '社交媒体',
            items: [
              { label: '关于我', to: '/about' },
              { label: 'GitHub', href: 'https://github.com/cr7258' },
              {
                label: 'CSDN',
                href: 'https://blog.csdn.net/cr7258',
              },
            ],
          },
          {
            title: '更多',
            items: [
              { label: '友链', position: 'right', to: 'friends' },
              { label: '导航', position: 'right', to: 'resource' },
              // { label: '我的站点', position: 'right', to: 'website' },
              {
                html: `<a href="https://docusaurus.io/zh-CN/" target="_blank"><img style="height:50px;margin-top:0.5rem" src="/img/buildwith.png" /><a/>`,
              },
            ],
          },
        ],
        copyright: `<p><a href="http://beian.miit.gov.cn/" >${beian}</a></p><p>Copyright © 2023 - PRESENT Se7en Built with Docusaurus.</p>`,
      },
      algolia: {
        appId: 'GV6YN1ODMO',
        apiKey: '50303937b0e4630bec4a20a14e3b7872',
        indexName: 'Se7en',
      },
      giscus: {
        repo: 'Se7en/blog',
        repoId: 'MDEwOlJlcG9zaXRvcnkzOTc2MjU2MTI=',
        category: 'General',
        categoryId: 'DIC_kwDOF7NJDM4CPK95',
        theme: 'light',
        darkTheme: 'dark',
      },
      socials: {
        github: 'https://github.com/cr7258',
        juejin: 'https://juejin.cn/user/1028798616450734',
        zhihu: 'https://www.zhihu.com/people/cheng-zhi-wei-67-19/posts',
        csdn: 'https://blog.csdn.net/cr7258',
        email: 'chengzw258@163.com',
      },
      prism: {
        theme: require('prism-react-renderer/themes/vsLight'),
        darkTheme: require('prism-react-renderer/themes/vsDark'),
        additionalLanguages: ['java', 'php', 'rust', 'toml'],
        defaultLanguage: 'javascript',
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
          {
            className: 'code-block-error-line',
            line: 'This will error',
          },
        ],
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      liveCodeBlock: {
        playgroundPosition: 'top',
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)',
        },
      },
    },
    presets: [
      [
        '@docusaurus/preset-classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            path: 'docs',
            sidebarPath: 'sidebars.js',
          },
          blog: false,
          theme: {
            customCss: [require.resolve('./src/css/custom.scss')],
          },
          sitemap: {
            changefreq: 'daily',
            priority: 0.5,
          },
          gtag: {
            trackingID: 'G-S4SD5NXWXF',
            anonymizeIP: true,
          },
          // debug: true,
        }),
      ],
    ],
    plugins: [
      'docusaurus-plugin-image-zoom',
      'docusaurus-plugin-sass',
      path.resolve(__dirname, './src/plugin/plugin-baidu-tongji'),
      path.resolve(__dirname, './src/plugin/plugin-baidu-push'),
      [
        path.resolve(__dirname, './src/plugin/plugin-content-blog'), // 为了实现全局 blog 数据，必须改写 plugin-content-blog 插件
        {
          path: 'blog',
          editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
            `https://github.com/Se7en/blog/edit/main/${blogDirPath}/${blogPath}`,
          editLocalizedFiles: false,
          blogDescription: '代码人生：编织技术与生活的博客之旅',
          blogSidebarCount: 10,
          blogSidebarTitle: 'Blogs',
          postsPerPage: 10,
          showReadingTime: true,
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
          feedOptions: {
            type: 'all',
            title: 'Se7en',
            copyright: `Copyright © ${new Date().getFullYear()} Se7en Built with Docusaurus.<p><a href="http://beian.miit.gov.cn/" class="footer_lin">${beian}</a></p>`,
          },
        },
      ],
      [
        '@docusaurus/plugin-ideal-image',
        {
          disableInDev: false,
        },
      ],
      [
        '@docusaurus/plugin-pwa',
        {
          debug: true,
          offlineModeActivationStrategies: [
            'appInstalled',
            'standalone',
            'queryString',
          ],
          pwaHead: [
            { tagName: 'link', rel: 'icon', href: '/img/logo.png' },
            { tagName: 'link', rel: 'manifest', href: '/manifest.json' },
            { tagName: 'meta', name: 'theme-color', content: '#12affa' },
          ],
        },
      ],
    ],
    stylesheets: [],
    i18n: {
      defaultLocale: 'zh-CN',
      locales: ['en', 'zh-CN'],
      localeConfigs: {
        en: {
          htmlLang: 'en-GB',
        },
      },
    },
  }
}
