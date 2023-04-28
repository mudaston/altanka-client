import cn from 'classnames'
import type { LinkProps as NextLinkProps } from 'next/link'
import NextLink from 'next/link'
import type { FC, ComponentPropsWithoutRef } from 'react'

interface LinkProps extends ComponentPropsWithoutRef<'a'> {
  variant?: 'primary' | 'secondary' | 'tretiary'
  size?: 'small' | 'medium' | 'big'
  active?: boolean
}

type Props = LinkProps & NextLinkProps

const Link: FC<Props> = ({ children, variant, size, active, ...rest }) => {
  return (
    <NextLink
      className={cn('alt-link', {
        active,
      })}
      data-type={variant}
      data-size={size}
      {...rest}
    >
      {children}
    </NextLink>
  )
}

Link.defaultProps = {
  variant: 'primary',
  size: 'medium',
  active: false,
}

export default Link
