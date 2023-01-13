export const getCurrencyObjectByCode = (currencyCode, currencies) => {
  return currencies && Object.values(currencies).find((curr) => curr.code === currencyCode)
}

export const getPriceWithCurrency = (priceInitial, currencyInitial, currencyChosen) => {
  if (!currencyInitial) {
    return priceInitial
  } else if (!priceInitial) {
    return ''
  }

  let currency = currencyInitial
  let price = priceInitial

  if (currencyChosen && currencyInitial.id !== currencyChosen.id) {
    const rate =
      currencyInitial.rates?.[currencyChosen.code] ||
      (currencyChosen && 1 / currencyChosen.rates?.[currencyInitial.code])
    currency = currencyChosen
    price = Math.ceil(priceInitial * rate)
  }

  const currencySymbol = currency?.symbol || ''
  const currencyCode = (!currencySymbol && currency?.code) || ''

  return `${currencySymbol}${price} ${currencyCode}`
}
