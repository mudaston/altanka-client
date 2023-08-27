import classNames from 'classnames/bind'
import Image from 'next/image'
import React, { FC } from 'react'

import { ControlSelect } from './control/select'
import { WillBeLater } from './control/will-be-later'
import { PriceDiscount } from './price/price-discount'
import { PriceRegular } from './price/price-regular'
import styles from './product.module.scss'

import type { Cheburek } from '@entities/chebureks'

const cn = classNames.bind(styles)

interface ProductProps extends Omit<Cheburek, 'id' | 'price' | 'discount' | 'inStock'> {
  children: React.ReactNode
}

interface SubComponents {
  PriceRegular: typeof PriceRegular
  PriceDiscount: typeof PriceDiscount
  ControlSelect: typeof ControlSelect
  WillBeLater: typeof WillBeLater
}

type Props = ProductProps

const Product: FC<Props> & SubComponents = ({ children, title, description, img }) => {
  return (
    <article className={cn('product')}>
      <main className={cn('product__main')}>
        <div className={cn('product__image')}>
          <Image src={img} alt='test' fill />
        </div>
        <div className={cn('product__title')}>{title}</div>
        <div className={cn('product__description')}>{description}</div>
      </main>
      <footer className={cn('product__footer')}>{children}</footer>
    </article>
  )
}

Product.PriceRegular = PriceRegular
Product.PriceDiscount = PriceDiscount
Product.ControlSelect = ControlSelect
Product.WillBeLater = WillBeLater

export default Product
