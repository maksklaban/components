import { IMAGE_PLACEHOLDER_PATH, IMAGEKIT_URL } from '..'

export const buildImagePath = (entityType, entityIdOrSlug, type, fileName) => {
  return entityType && entityIdOrSlug && type && fileName
    ? `/${entityType}/${entityIdOrSlug}/${type.toLowerCase()}/${fileName}`
    : ''
}

/**
 * Returns pathname from full URL
 * @param {string} src - image URL
 * @returns {string}
 */
export const getPathnameFromUrl = (src) => {
  try {
    return new URL(src).pathname
  } catch (e) {
    return ''
  }
}

/**
 * Returns processed URL using specified parameters
 * @param {string} src - image URL or path
 * @param {object} [params] - imagekit transformation params
 * @returns {string}
 */
export const getProcessedUrl = (src, params) => {
  const pathname = /^https/.test(src) ? getPathnameFromUrl(src) : src

  const paramsString = params
    ? Object.keys(params).reduce((acc, curr) => `${acc}${curr}-${params[curr]},`, '')
    : 'w-auto,h-auto'

  return `${IMAGEKIT_URL}${pathname || IMAGE_PLACEHOLDER_PATH}/tr:${paramsString}`
}
