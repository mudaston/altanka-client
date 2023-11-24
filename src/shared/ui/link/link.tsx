import cn from 'classnames'
import type { LinkProps as NextLinkProps } from 'next/link'
import NextLink from 'next/link'
import React from 'react'
import type { FC, ComponentPropsWithoutRef } from 'react'

import { linkHaveAnchor, getTargetId } from '@shared/lib/helpers/links'

interface LinkProps extends ComponentPropsWithoutRef<'a'> {
  variant?: 'primary' | 'secondary' | 'tretiary'
  size?: 'small' | 'medium' | 'big'
  active?: boolean
  className?: string
}

type Props = LinkProps & NextLinkProps

const Link: FC<Props> = ({ children, variant, size, active, className, ...rest }) => {
  const onMouseDown = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const { href } = e.currentTarget
    const hrefIsAnchor = linkHaveAnchor(href)
    const targetId = getTargetId(href)

    // smooth scroll to the element if it's an anchor link
    if (hrefIsAnchor) {
      const scrollToElement = document.querySelector(targetId)

      scrollToElement?.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

  return (
    <NextLink
      className={cn('alt-link', {
        active,
        [String(className)]: className,
      })}
      data-type={variant}
      data-size={size}
      prefetch={false}
      onMouseDown={onMouseDown}
      {...rest}
    >
      {children}
    </NextLink>
  )
}

Link.defaultProps = {
  variant: 'primary',
  active: false,
}

export default Link
