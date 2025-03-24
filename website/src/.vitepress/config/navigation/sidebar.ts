import type { DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.SidebarMulti = {
  '/download/': defaultSidebar(),
  '/extensions/': defaultSidebar(),
  '/docs/': defaultSidebar(),
  '/forks/': defaultSidebar(),
  '/changelogs/': defaultSidebar(),
  '/news/': defaultSidebar(),
  '/sandbox/': defaultSidebar(),
}

function defaultSidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      items: [
        {
          text: 'Download',
          link: '/download/',
        },
        {
          text: 'Changelogs',
          link: '/changelogs/',
        },
        {
          text: 'Forks',
          link: '/forks/',
        },
        {
          text: 'Contribute',
          link: '/docs/contribute',
        },
      ],
    },
    {
      text: 'Frequently Asked Questions',
      items: [
        { text: 'General', link: '/docs/faq/general' },
        {
          text: 'Library',
          link: '/docs/faq/library',
        },
        {
          text: 'Updates',
          collapsed: true,
          items: [
            { text: 'Smart updates', link: '/docs/faq/updates/smart' },
            { text: 'Upcoming', link: '/docs/faq/updates/upcoming' },
          ],
        },
        {
          text: 'Browse',
          link: '/docs/faq/browse/',
          collapsed: true,
          items: [
            { text: 'Extensions', link: '/docs/faq/browse/extensions' },
            {
              text: 'Local source',
              link: '/docs/faq/browse/local-source',
            },
          ],
        },
        {
          text: 'Downloads',
          link: '/docs/faq/downloads',
        },
        {
          text: 'Reader',
          link: '/docs/faq/reader',
        },
        {
          text: 'Settings',
          link: '/docs/faq/settings',
        },
        {
          text: 'Storage',
          link: '/docs/faq/storage',
        },
      ],
    },
    {
      text: 'Guides',
      items: [
        {
          text: 'Getting started',
          link: '/docs/guides/getting-started',
        },
        {
          text: 'Troubleshooting',
          link: '/docs/guides/troubleshooting/',
          collapsed: true,
          items: [
            {
              text: 'Common issues',
              link: '/docs/guides/troubleshooting/common-issues',
            },
            {
              text: 'Diagnosis',
              link: '/docs/guides/troubleshooting/diagnosis',
            },
          ],
        },
        {
          text: 'Source migration',
          link: '/docs/guides/source-migration',
        },
        { text: 'Backups', link: '/docs/guides/backups' },
        { text: 'Tracking', link: '/docs/guides/tracking' },
        { text: 'Categories', link: '/docs/guides/categories' },
        {
          text: 'Local anime source',
          link: '/docs/guides/local-anime-source/',
          collapsed: true,
          items: [
            {
              text: 'Advanced editing',
              link: '/docs/guides/local-anime-source/advanced',
            },
          ],
        },
        {
          text: 'Player settings',
          link: '/docs/guides/player-settings/',
          collapsed: true,
          items: [
            {
              text: 'Internal player',
              link: '/docs/guides/player-settings/internal-player-settings',
            },
            {
              text: 'Gestures',
              link: '/docs/guides/player-settings/gestures',
            },
            {
              text: 'Decoder',
              link: '/docs/guides/player-settings/decoder',
            },
            {
              text: 'Subtitles',
              link: '/docs/guides/player-settings/subtitles',
            },
            {
              text: 'Audio',
              link: '/docs/guides/player-settings/audio',
            },
            {
              text: 'Custom buttons',
              link: '/docs/guides/player-settings/custom-buttons',
            },
            {
              text: 'Advanced',
              link: '/docs/guides/player-settings/advanced',
            },
          ],
        },
        {
          text: 'Video player',
          link: '/docs/guides/video-player/',
          collapsed: true,
          items: [
            {
              text: 'Player sheets',
              link: '/docs/guides/video-player/sheets',
            },
            {
              text: 'Player panels',
              link: '/docs/guides/video-player/panels',
            },
          ],
        },
        {
          text: 'Shizuku',
          link: '/docs/guides/shizuku',
        },
      ],
    },
  ]
}

export default sidebar
