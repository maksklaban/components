import React from 'react'
import { PropTypes as T } from 'prop-types'
import clsx from 'clsx'
import { withTheme } from 'styled-components'

import { StyledStepWrapper } from './styled'
import TextPanel from '../../molecules/TextPanel'
import Icon from '../../atoms/Icon'

const Step = ({ activeStepNumber, className, color, steps, stepType, stepIconProps, theme }) => {
  return (
    <StyledStepWrapper className={clsx(className, 'step', stepType)} color={color}>
      {steps.map((step, i) => {
        const stepIsActive = activeStepNumber === i + 1
        const activeColor = stepIsActive && theme.color.primary.main

        return (
          <TextPanel
            bordered
            key={i}
            title={step.title}
            content={step.content}
            iconLeft={
              step.iconProps?.name && (
                <Icon
                  fill={theme.color.general.light}
                  wrapperColor={activeColor || theme.color.general.gray3}
                  borderRadius="50%"
                  wrapperWidth={50}
                  wrapperHeight={50}
                  {...step.iconProps}
                />
              )
            }
            color={color}
            className={clsx(stepIsActive && 'active')}
            titleTypographyProps={{ type: 'caption2' }}
            contentTypographyProps={{ type: 'caption2', fontWeight: 500 }}
          />
        )
      })}
    </StyledStepWrapper>
  )
}

export default withTheme(Step)

Step.propTypes = {
  className: T.string,
  color: T.oneOf(['success', 'error', 'warning', 'gray']),
  steps: T.array,
  stepType: T.oneOf(['linked', 'separate']),
}

Step.defaultProps = {
  activeStepNumber: 1,
  color: 'gray',
  stepType: 'separate',
}
