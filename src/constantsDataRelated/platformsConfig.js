const { ALL_PLATFORMS_LANGUAGES } = require('./languages')

module.exports = {
  aidsupply: {
    id: '6228aa462daeed00093fa50b',
    appName: 'aidsupply',
    url: 'aidsupply.in.ua',
    languages: ['uk', 'en', 'de', 'pl'],
    defaultLanguage: 'uk',
    pageHead: {
      crmTitle: 'Aid Supply in Ukraine',
    },
    logo: '4fb1747a-4e79-4edf-901c-5339fcb53d2c.svg+xml',
    favicon: '34a87445-5edd-42ff-8d18-2549c638454d.vnd.microsoft.icon',
  },
  crm: {
    id: '6092db82aacbfd00083ef373',
    languages: ALL_PLATFORMS_LANGUAGES,
    defaultLanguage: 'en',
    url: 'crm.goodzyk.com',
    appName: 'crm',
    fullName: 'Crm',
    title: 'Goodzyk CRM',
    description: 'B2B Supply chain CRM. Connecting the dots made in easy and elegant way.',
  },
  goodzyk: {
    languages: ALL_PLATFORMS_LANGUAGES,
    defaultLanguage: 'uk',
    url: 'goodzyk.com',
  },
}
