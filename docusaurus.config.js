// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import 'dotenv/config';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AlexFornuto.com',
  tagline: 'Technical Writer by choice, part-time developer by necessity.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://alexfornuto.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  //Local Plausible Analytics
  scripts: [{src: process.env.TRACKER, defer: true, 'data-domain': 'alexfornuto.com'}],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  //organizationName: 'facebook', // Usually your GitHub org/user name.
  //projectName: 'docusaurus', // Usually your repo name.

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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 20,
          postsPerPage: 20,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/alexfornuto.jpg',
      navbar: {
        title: 'AF',
        logo: {
          alt: 'My Site Logo',
          src: 'img/favicon.ico',
        },
        items: [
          //{
          //  type: 'docSidebar',
          //  sidebarId: 'tutorialSidebar',
          //  position: 'left',
          //  label: 'Tutorial',
          //},
          {to: '/blog', label: 'Technical Blogging', position: 'left'},
          {to: '/personalblog', label: 'Personal Blogging', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          //{
          //  title: 'Docs',
          //  items: [
          //    {
          //      label: 'Tutorial',
          //      to: '/docs/intro',
          //    },
          //  ],
          //},
          {
            title: 'Social',
            items: [
              //{
              //  label: 'Stack Overflow',
              //  href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              //},
              //{
              //  label: 'Discord',
              //  href: 'https://discordapp.com/invite/docusaurus',
              //},
              {
                label: 'Twitter',
                href: 'https://twitter.com/alexfornuto',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/alexfornuto',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
             ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Alex Fornuto. <br/> Some graphics provided by vecteezy.com`, 
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
    plugins: [
      [
        '@docusaurus/plugin-content-blog',
        {
          id:'personal-blog',
          routeBasePath: 'personalblog',
          path: './personalblog',
          blogSidebarCount: 20,
          postsPerPage: 20,
        }
      ],
      [
        '@docusaurus/plugin-client-redirects',
        {
          redirects: [
            {
              to: '/blog/how-to-ask-for-help-on-irc',
              from: ['/how-to-ask-for-help-on-irc/']
            },
            {
              to: 'https://mywishlist.online/w/qjos0v/alexs-wishlist',
              from: ['/wishlist']
            },
          ]
        }
      ]
    ]
};

export default config;
