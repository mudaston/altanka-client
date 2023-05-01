import classNames from 'classnames/bind'
import Image from 'next/image'
import React, { FC } from 'react'

import image from '../../../public/assets/img/products/test.png'

import styles from './product.module.scss'

import { Button } from '@shared/ui/button'

const cn = classNames.bind(styles)

interface ProductProps {}

type Props = ProductProps

const Product: FC<Props> = () => {
  return (
    <article className={cn('product')} style={{ backgroundColor: 'red' }}>
      <main className={cn('product__main')}>
        <div className={cn('product__image')}>
          <Image src={image} alt='test' placeholder='blur' fill />
        </div>
        <div className={cn('product__title')}>Чебурек</div>
        <div className={cn('product__description')}>
          Пицца четвертинками с ветчиной, цыпленком, томатами, брынзой, моцареллой, фирменным соусом
          альфредо
        </div>
      </main>
      <footer className={cn('product__footer')}>
        <div className={cn('product__price')}>от 670 ₽</div>
        <Button variant='secondary' size='medium'>
          Выбрать
        </Button>
      </footer>
    </article>
  )
}

export default Product
