/**
 * Builds labels for filters in all possible languages
 * @param {*} data
 * @param {*} id
 */
export const getFilterLabels = (data, id) => {
  if (id?.min && id?.max) {
    return `${id.min} - ${id.max}`
  }
  const filterData = Array.isArray(data) ? data.find((item) => item.id === id) : data?.[id]

  return (filterData?.translations || filterData?.label || filterData?.general?.name || filterData?.key) ?? id
}

/**
 * Builds labels for filters in all possible languages
 * @param {*} data
 * @param {*} id
 */
export const getFilterSlug = (data, id) => {
  const filterData = Array.isArray(data) ? data.find((item) => item.id === id) : data?.[id]
  return (filterData?.slug || filterData?.key) ?? id
}
