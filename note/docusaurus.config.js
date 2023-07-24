// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '盧瞳的小站',
  titleDelimiter: '-',


  favicon: 'img/favicon.ico',

  projectName: 'note', // Usually your repo name.
  tagline: '先思考，后编程',

  // Set the production url of your site here
  url: 'https://note.1think2program.cn',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/note',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'lutong', // Usually your GitHub org/user name.
  onBrokenLinks: 'warn',  // 站点损坏链接处理 throw warn
  onBrokenMarkdownLinks: 'warn',  // markdown损坏链接处理 throw warn

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: '盧瞳的个人博客',
      },
    },
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          sidebarPath: 'sidebars.js',
          routeBasePath:"/",
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: ['@docusaurus/plugin-ideal-image'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      metadata: [
        {
          name: 'keywords',
          content: '盧瞳',
        },
        {
          name: 'keywords',
          content: 'blog, javascript, pytho, node, react, vue, web',
        },
        {
          name: 'keywords',
          content: '垫底大学生, 喜欢编程, 写过爬虫, 最喜欢python，现在还学一点前端',
        },
      ],
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        // title: '盧瞳',
        // logo: {
        //   alt: '盧瞳',
        //   src: 'img/logo.webp',
        //   srcDark: 'img/logo.webp',
        // },
        hideOnScroll: true,
        items: [
          {
            label:'博客',
            position: 'right',
            to: "https://blog.1think2program.cn",
          },
          {
            label: '笔记',
            position: 'right',
            to:"/skill",
          },
          {
            label: '工具',
            position: 'right',
            to:"/tools",
          },
          // {
          //   label: '导航',
          //   position: 'right',
          //   to: 'resource',
          // },
          // {
          //   label: '项目',
          //   position: 'right',
          //   to: 'project',
          // },
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
            title: '导航',
            items:
              [
                {
                  label: '博客',
                  to: 'archive',
                },
                {
                  label: '关于我',
                  to: 'https://blog.1think2program.cn/system/about',
                },

                {
                  label: '笔记',
                  to: '/skill',
                },
                {
                  label: '实战项目',
                  to: '/project',
                },
                {
                  label: '前端示例',
                  to: 'https://example.kuizuo.cn',
                },
              ],
          },
          {
            title: '社交媒体',
            items: [
              {
                label: '关于我',
                to: '/about',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/2061360308',
              },
              {
                label: '掘金',
                href: 'https://juejin.cn/user/4277562960775896',
              },
              {
                label: 'CSDN',
                href: 'https://blog.csdn.net/m0_70826521?spm=1000.2115.3001.5343',
              },
              {
                label: 'bilibili',
                href: 'https://space.bilibili.com/1134123186',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '友链',
                position: 'right',
                to: 'https://blog.1think2program.cn/system/friends',
              },
              {
                label: '导航',
                position: 'right',
                to: '/resource',
              },
              {
                label: '留言板',
                position: 'right',
                to: 'https://blog.1think2program.cn/system/message',
              },
              // {
              //   label: '我的站点',
              //   position: 'right',
              //   to: 'website',
              // },
              {
                html: `<a href="https://docusaurus.io/zh-CN/" target="_blank"><img style="height:50px;margin-top:0.5rem" src="/img/buildwith.png" /><a/>`,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
