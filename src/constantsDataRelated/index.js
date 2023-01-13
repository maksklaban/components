// TODO: necessary to delete this file from components

import { filterListByChosenPlatform, getOptionsFilteredByPlatformChosenItems } from '../utilsDataRelated/data'

export const REPLAIN_CHAT_URL = 'https://widget.replain.cc/dist/client.js'

export const ADVERTISING_SELECT_TABLE_CONFIG = {
  banners: {
    key: 'banners',
    labelKey: ['general.page.general.url', 'general.category.slug'],
    srcKey: 'photos.general.active.0',
    routePartly: '',
    keyToUpdate: 'assets.banners',
    getOptions: (data, system, platformChosen) => {
      const bannersFiltered = filterListByChosenPlatform(
        system.banners && Object.values(system.banners),
        platformChosen
      )

      return bannersFiltered?.map((banner) => {
        const pageId = banner.general.page?.id

        return pageId && system.pages
          ? { ...banner, general: { ...banner.general, page: system.pages[pageId] } }
          : banner
      })
    },
  },
  categories: {
    key: 'categories',
    dataKeyForPhotos: 'banners',
    withTranslation: true,
    labelKey: 'label',
    srcKey: 'photos.square.active.0',
    bannerSrcKey: 'photos.general.active.0',
    routePartly: '/category/',
    keyToUpdate: 'assets.categories',
    getOptions: (data, system) => getOptionsFilteredByPlatformChosenItems('categories', system), // TODO: do it in redux/sagas
  },
  categoriesRecommended: {
    key: 'categories',
    dataKeyForPhotos: 'banners',
    withTranslation: true,
    labelKey: 'label',
    srcKey: 'photos.square.active.0',
    bannerSrcKey: 'photos.general.active.0',
    routePartly: '/category/',
    keyToUpdate: 'assets.categoriesRecommended',
    getOptions: (data, system) => getOptionsFilteredByPlatformChosenItems('categories', system),
  },
  bestsellers: {
    key: 'items',
    labelKey: 'general.model',
    srcKey: 'photos.general.active.0',
    routePartly: '/product/',
    keyToUpdate: 'assets.bestsellers',
  },
  featuredProducts: {
    key: 'items',
    labelKey: 'general.model',
    srcKey: 'photos.general.active.0',
    routePartly: '/product/',
    keyToUpdate: 'assets.featuredProducts',
  },
  brands: {
    key: 'brands',
    labelKey: 'general.name',
    srcKey: 'photos.logos.active.0',
    routePartly: '/story/',
    keyToUpdate: 'assets.brands',
  },
  properties: {
    key: 'attributes',
    withTranslation: true,
    labelKey: 'translations.label',
  },
  characteristics: {
    key: 'attributes',
    withTranslation: true,
    labelKey: 'translations.label',
  },
}
