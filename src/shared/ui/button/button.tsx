import cn from 'classnames'
import React from 'react'

import type { DynamicallyTypedComponent } from './types'

function Button<T extends React.ElementType = 'button'>({
  children,
  className,
  variant,
  size,
  as,
  ...rest
}: DynamicallyTypedComponent<T>) {
  const Component = as ?? 'button'

  return (
    <Component
      className={cn(className)}
      type='button'
      data-type={variant}
      data-size={size}
      {...rest}
    >
      {children}
    </Component>
  )
}

Button.defaultProps = {
  variant: 'primary',
  size: 'small',
  as: 'button',
}

export default Button
