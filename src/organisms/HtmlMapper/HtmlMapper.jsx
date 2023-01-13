import React from 'react'
import Mapper from 'react-html-map'

import Typography from '../../atoms/Typography'

const HtmlMapper = ({ html, typographyProps }) => {
  const commonProps = {
    margin: '0 0 10px 0',
    component: 'div',
    ...typographyProps,
  }

  const isHtmlString = html?.startsWith('<') && html?.endsWith('>')

  if (!isHtmlString) {
    return <Typography type="body1" text={html} {...commonProps} />
  }

  return (
    <Mapper html={html}>
      {{
        strong: (props) => <strong {...commonProps}>{props.children}</strong>,
        em: (props) => <em {...commonProps}>{props.children}</em>,
        u: (props) => <u {...commonProps}>{props.children}</u>,
        ul: (props) => (
          <ul style={{ paddingInlineStart: '1em' }} {...commonProps}>
            {props.children}
          </ul>
        ),
        ol: (props) => (
          <ol style={{ paddingInlineStart: '1em' }} {...commonProps}>
            {props.children}
          </ol>
        ),
        p: (props) => <Typography type="body1" {...commonProps} {...props} />,
        li: (props) => (
          <li>
            <Typography type="body1" {...commonProps} {...props} />
          </li>
        ),
        h1: (props) => <Typography type="h1" {...commonProps} {...props} />,
        h2: (props) => <Typography type="h2" {...commonProps} {...props} />,
        h3: (props) => <Typography type="h3" {...commonProps} {...props} />,
        h4: (props) => <Typography type="h4" {...commonProps} {...props} />,
        // a: ({ href, children, ...rest }) =>
        //   href?.startsWith('/') ? (
        //     // assume internal link
        //     <Link to={href}>{children}</Link>
        //   ) : (
        //     <a href={href} {...rest}>
        //       {children}
        //     </a>
        //   ),
      }}
    </Mapper>
  )
}

export default HtmlMapper
