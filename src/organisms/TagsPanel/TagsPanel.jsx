import React from 'react'

import { StyledTagsPanel } from './styled'
import Tag from '../../atoms/Tag'
import Button from '../../molecules/Button'

const TagsPanel = ({
  buttonProps,
  panelColorKey,
  children,
  className,
  currentLanguage,
  removeTag,
  tags,
  tagProps,
  withButton,
}) => (
  <StyledTagsPanel className={className} panelColorKey={panelColorKey}>
    {children ||
      tags.map((tag, i) => (
        <Tag key={i} withCrossIcon onCrossClick={removeTag(tag.id)} {...tagProps}>
          {tag?.label?.[currentLanguage] || tag?.label || tag.id}
        </Tag>
      ))}
    {withButton && <Button variant="primary" fullWidth {...buttonProps} />}
  </StyledTagsPanel>
)

export default TagsPanel

TagsPanel.defaultProps = {
  panelColorKey: 'gray2',
  buttonProps: {
    text: 'Button',
  },
  removeTag: () => {},
}
