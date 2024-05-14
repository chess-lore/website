import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '502'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '2ae'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '230'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '002'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'bd3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '24a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '043'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '28b'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'e8a'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '236'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'a6d'),
            routes: [
              {
                path: '/docs/Beginner/basic-stratagies',
                component: ComponentCreator('/docs/Beginner/basic-stratagies', '5a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Beginner/getting-started',
                component: ComponentCreator('/docs/Beginner/getting-started', '1fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Beginner/introducton-to-chess',
                component: ComponentCreator('/docs/Beginner/introducton-to-chess', 'ede'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Beginner/tactics-for-beginners',
                component: ComponentCreator('/docs/Beginner/tactics-for-beginners', '2ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/beginner',
                component: ComponentCreator('/docs/category/beginner', '186'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/chesslore',
                component: ComponentCreator('/docs/chesslore', '12c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contribute',
                component: ComponentCreator('/docs/contribute', '897'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Intermediate/Advanced-Strategies',
                component: ComponentCreator('/docs/Intermediate/Advanced-Strategies', 'c0c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Intermediate/Building-on-Basics',
                component: ComponentCreator('/docs/Intermediate/Building-on-Basics', 'bbc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Intermediate/Middle-Game-Mastery',
                component: ComponentCreator('/docs/Intermediate/Middle-Game-Mastery', 'c0a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Intermediate/Opening-Repertoire',
                component: ComponentCreator('/docs/Intermediate/Opening-Repertoire', '1f6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Intermediate/Tactical-Themes',
                component: ComponentCreator('/docs/Intermediate/Tactical-Themes', '999'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
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
    component: ComponentCreator('/', '7a5'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
