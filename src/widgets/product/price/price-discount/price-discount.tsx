import classNames from 'classnames/bind'
import React, { FC } from 'react'
import type { ComponentPropsWithoutRef } from 'react'

import styles from './price-discount.module.scss'

export interface PriceDiscountProps extends ComponentPropsWithoutRef<'div'> {}

type Props = PriceDiscountProps

const cn = classNames.bind(styles)

const PriceDiscount: FC<Props> = ({ children, ...rest }) => {
  return (
    <div className={cn('price')} {...rest}>
      {children}
    </div>
  )
}

export default PriceDiscount
