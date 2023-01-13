import { css } from 'styled-components'

const getTokenValue = (theme, token, key) => {
  let componentTokens = theme.components
  const keys = token.split('-')
  for (let i = 0; i < keys.length; i++) {
    const newKeyObject = componentTokens[keys[i]]
    if (!newKeyObject) {
      throw new Error(`No "${token}" token object found. Key: "${keys[i]}"`)
    } else {
      componentTokens = newKeyObject
    }
  }
  if (componentTokens[key] !== null && !componentTokens[key]) {
    throw new Error(`No "${key}" key in the "${token}" token object found`)
  }
  return componentTokens[key]
}

const getTokens = (tokenName) => {
  return css`
    color: ${(props) => getTokenValue(props.theme, tokenName, 'color')};
    background: ${(props) => getTokenValue(props.theme, tokenName, 'background-color')};
    line-height: ${(props) => getTokenValue(props.theme, tokenName, 'line-height')};
    font-size: ${(props) => getTokenValue(props.theme, tokenName, 'font-size')};
    font-weight: ${(props) => getTokenValue(props.theme, tokenName, 'font-weight')};
    font-family: ${(props) => getTokenValue(props.theme, tokenName, 'font-family')};
    border-radius: ${(props) => getTokenValue(props.theme, tokenName, 'border-radius')};
  `
}

export default getTokens
