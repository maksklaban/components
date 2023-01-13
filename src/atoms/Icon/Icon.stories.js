import React from 'react'
import styled from 'styled-components'
import { withKnobs, select, color, number } from '@storybook/addon-knobs'

import Icons from '../../static/icons'
import Icon from './Icon'
import Typography from '../Typography'

export default {
  title: 'Atoms/Icon',
  component: Icon,
}

const StyledAllIcons = styled.div`
  display: flex;
  flex-wrap: wrap;

  .icon {
    margin-right: 10px;
    cursor: pointer;
  }
`
const iconsSorted = Object.keys(Icons).sort()

export const icon = () => (
  <Icon
    name={select('Name', iconsSorted, 'error')}
    width={number('Width', null)}
    height={number('Height', null)}
    wrapperWidth={number('Wrapper width', null)}
    wrapperHeight={number('Wrapper height', null)}
    fill={color('Color', '')}
  />
)

export const allIcons = () => (
  <StyledAllIcons>
    {iconsSorted.map((name) => (
      <div style={{ marginRight: 15, marginTop: 10 }}>
        <Typography type="body2" text={name} />
        <Icon
          name={name}
          width={number('Width', 30)}
          height={number('Height', 30)}
          fill={color('Color', '')}
        />
      </div>
    ))}
  </StyledAllIcons>
)

icon.story = {
  decorators: [withKnobs],
}

allIcons.story = {
  decorators: [withKnobs],
}
