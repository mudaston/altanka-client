'use client'

import classNames from 'classnames/bind'
import React, { FC } from 'react'

import scss from './button.module.scss'

const cn = classNames.bind(scss)

interface ButtonProps {}

type Props = ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<Props> = ({ children }) => {
  const clickHandler = () => {
    console.log('hello world')
  }

  return (
    <button className={cn('button')} type='button' onClick={clickHandler}>
      {children}
    </button>
  )
}

export default Button
