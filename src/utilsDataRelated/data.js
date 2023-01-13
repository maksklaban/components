import { pick } from 'dot-object'

import { buildImagePath, SEARCH_FIELDS_WITH_LANG } from '..'

export const sortSearchResultsByAvailability = (items) => {
  if (!items) {
    return []
  }

  return items.sort((item1, item2) => {
    if (item2.modifications.every((mod) => !mod.stocks?.length)) {
      return -1
    }
    return 0
  })
}

export const groupOrdersByWarehouse = (items) => {
  if (!items) {
    return {}
  }

  return items.reduce((acc, item) => {
    const warehouseId = item.stockInfo.warehouse?.id
    if (!warehouseId) {
      return // TODO: to delete this after backend testing and fixing
    }
    if (acc[warehouseId]) {
      return { ...acc, [warehouseId]: [...acc[warehouseId], item] }
    } else {
      return { ...acc, [warehouseId]: [item] }
    }
  }, {})
}

export const filterListByChosenPlatform = (list, platformChosen, platformNameArg) => {
  if (!list) return []
  const platformName = platformNameArg || 'aidsupply'

  return platformChosen
    ? list.filter((item) => {
        const platformId = item.general.platform?.id || item.platformId
        return platformName === 'goodzyk' && platformId ? platformId === platformChosen?.id : item
      })
    : list
}

export const getOptionsFilteredByPlatformChosenItems = (
  type,
  systemObject,
  platformConfig,
  platformNameArg
) => {
  // const { platformName } = getInfoFromHostname()
  const platformName = platformNameArg || 'aidsupply'
  const currentCollection = systemObject?.[type] ? Object.values(systemObject[type]) : []

  if (platformName === 'goodzyk') {
    return currentCollection
  }

  const platform =
    platformConfig ||
    (systemObject.platforms &&
      Object.values(systemObject.platforms).find((platform) => platform.key.startsWith(platformName)))

  if (!platform) {
    return currentCollection
  }

  const platformChosenCollectionItems = platform.general[type]

  if (type === 'categories') {
    const platformIndustries = platform.general.industries
    const platformCategories = platform.general.categories

    if (!platformIndustries?.length && !platformCategories?.length) {
      return currentCollection
    }

    const categoriesFilteredByIndustries = currentCollection.filter(
      (option) =>
        platformIndustries?.some((industry) => industry.id === option.general.industry?.id) ||
        platformCategories?.some((cat) => cat.id === option.id)
    )
    return categoriesFilteredByIndustries
  }

  if (!platformChosenCollectionItems?.length) {
    return currentCollection
  }

  return currentCollection.filter(
    (option) =>
      platformChosenCollectionItems.findIndex((platformItem) => platformItem.id === option.id) !== -1
  )
}

export const sortAlphabetically = (data, language, sortKey = 'label') => {
  if (!data) {
    return
  }

  const array = Array.isArray(data) ? data : Object.values(data)
  const sortKeyFull = language ? `${sortKey}.${language}` : sortKey

  return array.sort((a, b) => {
    const keyA = pick(sortKeyFull, a)?.toUpperCase()
    const keyB = pick(sortKeyFull, b)?.toUpperCase()

    if (!keyA || !keyB) {
      return false
    }

    return keyA.localeCompare(keyB)
  })
}

export const getSearchValueApiQuery = (searchValue, type, lng) => {
  const TABLE_SEARCH_FIELDS = SEARCH_FIELDS_WITH_LANG(lng)
  const tableSearchField = TABLE_SEARCH_FIELDS[type]

  return [`searchValue=${searchValue}`, `searchFields=${tableSearchField || 'general.name'}`]
}

export const getValueFromId = (id, dataKey, dataType, system) => {
  const data = system?.[dataType]

  if (!id || !data || !Object.keys(data)?.length || !dataKey) {
    return
  }

  const itemData = Array.isArray(data) ? data.find((item) => item.id === id) : data[id]

  let value
  let photosType

  const blockKey = (Array.isArray(dataKey) ? dataKey[0] : dataKey).split('.')[0]

  if (Array.isArray(dataKey)) {
    // with spare dataKey to check if first photo is absent
    dataKey.forEach((key) => {
      if (!value) {
        value = pick(key, itemData)
        photosType = blockKey === 'photos' && key.split('.')[1]
      }
    })
  } else {
    value = pick(dataKey, itemData)
    photosType = dataKey.split('.')[1]
  }

  if (blockKey === 'photos') {
    return buildImagePath(dataType, id, photosType, value)
  }

  return value
}
