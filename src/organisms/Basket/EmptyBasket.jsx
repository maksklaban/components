import React from 'react'

import { StyledEmptyBasketIcon } from './styled'
import Typography from '../../atoms/Typography'

const EmptyBasket = ({ t, iconName, iconProps }) => (
  <div>
    <StyledEmptyBasketIcon name={iconName} width={150} height={150} {...iconProps} />
    <Typography type="h3" text={t('basketEmpty')} textAlign="center" />
  </div>
)

export default EmptyBasket
