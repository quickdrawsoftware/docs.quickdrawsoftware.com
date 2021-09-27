const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Quickdraw Software Docs',
  tagline: 'Documentation for Quickdraw',
  url: 'https://docs.quickdrawsoftware.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'quickdrawsoftware', // Usually your GitHub org/user name.
  projectName: 'docs.quickdrawsoftware.com', // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/quickdrawsoftware/docs.quickdrawsoftware.com',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/quickdrawsoftware/docs.quickdrawsoftware.com',
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
        title: 'Quickdraw Software',
        logo: {
          alt: 'Quickdraw Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://quickdrawsoftware.com',
            label: 'Back to Home',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Quickdraw Docs',
            items: [
              {
                label: 'Back to Home',
                to: 'https://quickdrawsoftware.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Quickdraw Software. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
