// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
// docusaurus.config.js
const customPrism = require('./src/theme/customPrism'); // 경로가 맞는지 확인

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)


const config = {
  title: 'X2i.dev Docs',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/x2i_logo.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
      ko: {
        label: '한국어',
        direction: 'ltr',
        htmlLang: 'ko',
        calendar: 'gregory',
        path: 'ko',
      },
    },
  },


  presets: [
    [
      'classic',

      ({
        docs: {
          sidebarPath: './sidebars.js',

        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },

          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: ({

    


    prism: {
      theme: require('prism-react-renderer').themes.github,
      darkTheme: customPrism,
      defaultLanguage: 'python',
      additionalLanguages: ['bash'],
    },

    colorMode: {
      defaultMode: 'dark',   
      disableSwitch: true,   
      respectPrefersColorScheme: true, 
    },
    docs: {
    },
    navbar: {
      title: '',
      logo: {
        alt: 'My Site Logo',
        src: 'img/x2i_logo.png',
        srcDark: 'img/x2i_logo.png', 
      },
      items: [
        {
          to: '/docs/overview/tenstorrent_overview',
          label: 'Docs',
          position: 'left',       
          className: 'nav-doc-button documentation-link',
          activeBaseRegex: '/docs/',
        },

        {
        to: 'https://x2i.dev/blog/',      
        label: 'Blog',    
        position: 'left', 
        },

        {
          type: 'localeDropdown', 
          position: 'right',      
        },
      ],
    },
    breadcrumbs: false, 
  }),
};

export default config;
