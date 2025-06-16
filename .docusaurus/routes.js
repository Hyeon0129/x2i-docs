import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ko/blog',
    component: ComponentCreator('/ko/blog', '3c0'),
    exact: true
  },
  {
    path: '/ko/blog/archive',
    component: ComponentCreator('/ko/blog/archive', 'dfa'),
    exact: true
  },
  {
    path: '/ko/blog/authors',
    component: ComponentCreator('/ko/blog/authors', '917'),
    exact: true
  },
  {
    path: '/ko/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/ko/blog/authors/all-sebastien-lorber-articles', 'c80'),
    exact: true
  },
  {
    path: '/ko/blog/authors/yangshun',
    component: ComponentCreator('/ko/blog/authors/yangshun', '71d'),
    exact: true
  },
  {
    path: '/ko/blog/first-blog-post',
    component: ComponentCreator('/ko/blog/first-blog-post', '508'),
    exact: true
  },
  {
    path: '/ko/blog/long-blog-post',
    component: ComponentCreator('/ko/blog/long-blog-post', 'd55'),
    exact: true
  },
  {
    path: '/ko/blog/mdx-blog-post',
    component: ComponentCreator('/ko/blog/mdx-blog-post', 'e1b'),
    exact: true
  },
  {
    path: '/ko/blog/tags',
    component: ComponentCreator('/ko/blog/tags', '940'),
    exact: true
  },
  {
    path: '/ko/blog/tags/docusaurus',
    component: ComponentCreator('/ko/blog/tags/docusaurus', '25d'),
    exact: true
  },
  {
    path: '/ko/blog/tags/facebook',
    component: ComponentCreator('/ko/blog/tags/facebook', 'ec9'),
    exact: true
  },
  {
    path: '/ko/blog/tags/hello',
    component: ComponentCreator('/ko/blog/tags/hello', 'd6d'),
    exact: true
  },
  {
    path: '/ko/blog/tags/hola',
    component: ComponentCreator('/ko/blog/tags/hola', '688'),
    exact: true
  },
  {
    path: '/ko/blog/welcome',
    component: ComponentCreator('/ko/blog/welcome', '209'),
    exact: true
  },
  {
    path: '/ko/markdown-page',
    component: ComponentCreator('/ko/markdown-page', 'df2'),
    exact: true
  },
  {
    path: '/ko/docs',
    component: ComponentCreator('/ko/docs', '29f'),
    routes: [
      {
        path: '/ko/docs',
        component: ComponentCreator('/ko/docs', 'bf7'),
        routes: [
          {
            path: '/ko/docs',
            component: ComponentCreator('/ko/docs', '9f0'),
            routes: [
              {
                path: '/ko/docs/gettingstarted/installation_guide',
                component: ComponentCreator('/ko/docs/gettingstarted/installation_guide', '7a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ko/docs/gettingstarted/system-requirements',
                component: ComponentCreator('/ko/docs/gettingstarted/system-requirements', '709'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ko/docs/guide/llm/overview',
                component: ComponentCreator('/ko/docs/guide/llm/overview', '929'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ko/docs/guide/llm/vllm_setup_guide',
                component: ComponentCreator('/ko/docs/guide/llm/vllm_setup_guide', '9e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ko/docs/overview/model_updates',
                component: ComponentCreator('/ko/docs/overview/model_updates', '67b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ko/docs/overview/supportedmodels',
                component: ComponentCreator('/ko/docs/overview/supportedmodels', 'f19'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ko/docs/overview/tenstorrent_overview',
                component: ComponentCreator('/ko/docs/overview/tenstorrent_overview', '6f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ko/docs/overview/tenstorrent_softwarestack',
                component: ComponentCreator('/ko/docs/overview/tenstorrent_softwarestack', 'be1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ko/docs/tenstorrent-sdks/tt-forge/run-your-first-model',
                component: ComponentCreator('/ko/docs/tenstorrent-sdks/tt-forge/run-your-first-model', 'c95'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ko/docs/tenstorrent-sdks/tt-forge/tt-forge-fe-installation',
                component: ComponentCreator('/ko/docs/tenstorrent-sdks/tt-forge/tt-forge-fe-installation', '00e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ko/docs/tenstorrent-sdks/tt-forge/tt-forge-overview',
                component: ComponentCreator('/ko/docs/tenstorrent-sdks/tt-forge/tt-forge-overview', '346'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ko/docs/tenstorrent-sdks/tt-forge/tt-torch-installation',
                component: ComponentCreator('/ko/docs/tenstorrent-sdks/tt-forge/tt-torch-installation', '9ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ko/docs/tenstorrent-sdks/tt-metal/',
                component: ComponentCreator('/ko/docs/tenstorrent-sdks/tt-metal/', '73a'),
                exact: true
              },
              {
                path: '/ko/docs/tenstorrent-sdks/tt-metal/run-your-first-model',
                component: ComponentCreator('/ko/docs/tenstorrent-sdks/tt-metal/run-your-first-model', 'e5e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ko/docs/tenstorrent-sdks/tt-metal/tt-metal-installation',
                component: ComponentCreator('/ko/docs/tenstorrent-sdks/tt-metal/tt-metal-installation', '66e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ko/docs/tenstorrent-sdks/tt-metal/tt-metal-overview',
                component: ComponentCreator('/ko/docs/tenstorrent-sdks/tt-metal/tt-metal-overview', '4ab'),
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
    path: '/ko/',
    component: ComponentCreator('/ko/', '25c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
