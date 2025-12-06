import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '89d'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '763'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '168'),
            routes: [
              {
                path: '/docs/gettingstarted/installation_guide',
                component: ComponentCreator('/docs/gettingstarted/installation_guide', '476'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/gettingstarted/system-requirements',
                component: ComponentCreator('/docs/gettingstarted/system-requirements', '883'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/guide/llm/overview',
                component: ComponentCreator('/docs/guide/llm/overview', '166'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/guide/llm/vllm_setup_guide',
                component: ComponentCreator('/docs/guide/llm/vllm_setup_guide', '19d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/overview/model_updates',
                component: ComponentCreator('/docs/overview/model_updates', '532'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/overview/supportedmodels',
                component: ComponentCreator('/docs/overview/supportedmodels', '30b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/overview/tenstorrent_overview',
                component: ComponentCreator('/docs/overview/tenstorrent_overview', '15e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/overview/tenstorrent_softwarestack',
                component: ComponentCreator('/docs/overview/tenstorrent_softwarestack', '380'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tenstorrent-sdks/tt-forge/run-your-first-model',
                component: ComponentCreator('/docs/tenstorrent-sdks/tt-forge/run-your-first-model', '06d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tenstorrent-sdks/tt-forge/tt-forge-fe-installation',
                component: ComponentCreator('/docs/tenstorrent-sdks/tt-forge/tt-forge-fe-installation', '3e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tenstorrent-sdks/tt-forge/tt-forge-overview',
                component: ComponentCreator('/docs/tenstorrent-sdks/tt-forge/tt-forge-overview', '5ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tenstorrent-sdks/tt-forge/tt-torch-installation',
                component: ComponentCreator('/docs/tenstorrent-sdks/tt-forge/tt-torch-installation', '0ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tenstorrent-sdks/tt-metal/run-your-first-model',
                component: ComponentCreator('/docs/tenstorrent-sdks/tt-metal/run-your-first-model', 'e00'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tenstorrent-sdks/tt-metal/tt-metal-installation',
                component: ComponentCreator('/docs/tenstorrent-sdks/tt-metal/tt-metal-installation', '93e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tenstorrent-sdks/tt-metal/tt-metal-overview',
                component: ComponentCreator('/docs/tenstorrent-sdks/tt-metal/tt-metal-overview', 'f05'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
