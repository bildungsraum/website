const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Nationaler Bildungsraum und Plattform',
  tagline: 'Projektneuigkeiten und Dokumentation für Entwickler und Bildungsanbieter',
  url: 'https://bildungsraum.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'bildungsraum', // Usually your GitHub org/user name.
  projectName: 'bildungsraum.github.io', // Usually your repo name.
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/bildungsraum/docs/edit/main/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/bildungsraum/docs/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'NBP',
        logo: {
          alt: 'Nationaler Bildungsplattform',
          src: 'img/logo_small.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/bildungsraum/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          {
            title: 'Mehr',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/bildungsraum/docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} BMBF, Projektgruppe Nationaler Bildungsraum. Erstellt mit Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
