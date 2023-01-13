import React from 'react'
import { withTheme } from 'styled-components'

import { StyledComment, StyledHeader, StyledTextSection } from './styled'
import Image from '../../atoms/Image'
import Typography from '../../atoms/Typography'
import Tag from '../../atoms/Tag'
import Label from '../../atoms/Label'

const Comment = ({ comment, dateCreated, dateDeleted, dateFormat, name, photo, state, theme }) => {
  return (
    <StyledComment className="comment">
      <Image src={photo} radius="50%" height={46} width={46} />
      <StyledTextSection className={state}>
        <StyledHeader>
          <Typography type="caption2" text={name} />
          {dateCreated && <span className="dateDot">•</span>}
          {dateCreated && (
            <Typography className="date" type="body2" color={theme.color.general.gray5}>
              {dateFormat(dateCreated)}
            </Typography>
          )}
          {state === 'new' && <Tag text="new" type="primary" />}
        </StyledHeader>
        <Typography type="body2" text={comment} className="commentText" />
        {state === 'deleted' && (
          <Label className="deletedDate" color={theme.color.general.gray4}>
            Deleted on {dateFormat(dateDeleted)}
          </Label>
        )}
      </StyledTextSection>
    </StyledComment>
  )
}

export default withTheme(Comment)
