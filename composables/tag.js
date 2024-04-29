import tags from '~/generated/state.json'

export const useTags = () =>
  useState('tags', () => ({
    categories: tags.categories,
    loaders: tags.loaders,
    loaderVersions: tags.loaderVersions,
    gameVersions: tags.gameVersions,
    donationPlatforms: tags.donationPlatforms,
    reportTypes: tags.reportTypes,
    projectTypes: [
      {
        actual: 'plugin',
        id: 'plugin',
        display: 'plugin',
      }
    ],
    loaderData: {
      pluginLoaders: ['powernukkitx', 'levilamina'],
      pluginPlatformLoaders: ['waterdog'],
      allPluginLoaders: [
        'powernukkitx',
        'levilamina'
      ],
      dataPackLoaders: [],
      modLoaders: []
    },
    projectViewModes: ['list', 'grid', 'gallery'],
    approvedStatuses: ['approved', 'archived', 'unlisted', 'private'],
    rejectedStatuses: ['rejected', 'withheld'],
    staffRoles: ['moderator', 'admin'],
  }))
