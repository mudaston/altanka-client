import classNames from 'classnames/bind'
import React, { FC } from 'react'
import type { ComponentPropsWithoutRef } from 'react'

import styles from './price-regular.module.scss'

interface PriceRegularProps extends ComponentPropsWithoutRef<'div'> {}

type Props = PriceRegularProps

const cn = classNames.bind(styles)

const PriceRegular: FC<Props> = ({ children, ...rest }) => {
  return (
    <div className={cn('price')} {...rest}>
      {children}
    </div>
  )
}

export default PriceRegular
