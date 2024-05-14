import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ChessLore',
  tagline: 'A Place to Learn Chess with Comfort.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://chesslore.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CHESSLORE', // Usually your GitHub org/user name.
  projectName: 'chess-lore', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/chess-lore/website/tree/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/chess-lore/website/tree/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'ChessLore',
      logo: {
        alt: 'Chess Lore Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Learn',
        },
       
        {to: '/docs/contribute', label: 'Contribute', position: 'left'},
        {to: '/docs/chesslore', label: 'About', position: 'left'},
        {
          href: 'https://github.com/chess-lore/website',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'Learn',
              to: '/docs/intro',
            },
          ],
        },

        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/chess-lore',
            },
            {
              label: 'Contribution',
              href: '/docs/contribute',
            },            {
              label: 'About',
              href: '/docs/chesslore',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ChessLore.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};


export default config;