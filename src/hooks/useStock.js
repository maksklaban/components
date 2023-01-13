export const useStock = (attributesChosen, modifications) => {
  const itemOutOfStock =
    !modifications?.length || Object.values(modifications).every((mod) => !mod?.stocks?.length)

  const modValuesArray = modifications && Object.values(modifications)
  const modsGroupName = modValuesArray?.[0]?.key

  if (modValuesArray?.length === 1) {
    const chosenModStock = modValuesArray[0].stocks?.[0] //TODO: check

    return { chosenModStock, itemOutOfStock }
  }

  const getModValue = (chosenAttributes) => {
    if (!modsGroupName) return

    return (
      modsGroupName &&
      modsGroupName
        .split(':')
        .reduce(
          (acc, attributeKey, i) =>
            chosenAttributes?.[attributeKey]?.slug &&
            `${acc}${i === 0 ? '' : ':'}${chosenAttributes[attributeKey].slug}`,
          ''
        )
    )
  }

  const chosenModValue = getModValue(attributesChosen)

  const chosenModification =
    !!chosenModValue &&
    (Array.isArray(modifications)
      ? modifications.find((mod) => mod.value === chosenModValue)
      : modifications[chosenModValue])

  const chosenModStock = !!chosenModification && chosenModification.stocks[0]

  return {
    chosenModStock: { ...chosenModStock, key: modsGroupName, value: chosenModValue },
    itemOutOfStock,
  }
}
