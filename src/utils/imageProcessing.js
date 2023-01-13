/**
 *  Calculates image height based on the image type
 *  @param {integer} width
 *  @param {integer} height - Custom height (if present)
 *  @param {string} type
 *  @returns {integer} height - Calculated height based on type
 */

export const calculateImageHeight = (width, height, type) => {
  if ((!width && !height) || typeof width === 'string') {
    return ''
  } else if (type === 'square') {
    return width
  } else if (type === 'vertical') {
    return Math.round((width * 7) / 6)
  } else if (type === 'horizontal') {
    return Math.round(width / 1.5)
  }
  return height
}
