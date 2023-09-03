import classNames from 'classnames/bind'
import { useRouter } from 'next/router'
import React, { FC, useEffect, useState } from 'react'

import ClickOutside from '../click-outside/click-outside'

import styles from './modal.module.scss'
import { ModalProps } from './types'

const cx = classNames.bind(styles)

type Props = ModalProps

const Modal: FC<Props> = ({ watchParam, children }) => {
  const router = useRouter()

  const [open, setOpen] = useState(false)

  const onOutsideClick = () => {
    if (!open) {
      return
    }

    router.push(router.pathname, undefined, { scroll: false })
  }

  // open modal when asPath matches watchParam
  useEffect(() => {
    if (watchParam.length <= 1) {
      return
    }

    if (router.asPath.includes(watchParam)) {
      setOpen(true)

      return
    }

    setOpen(false)
  }, [router.asPath, watchParam])

  // blocks scroll and adds scroll placeholder
  useEffect(() => {
    const scrollbarWidth = () => {
      const documentWidth = document.documentElement.clientWidth
      const windowWidth = window.innerWidth

      return windowWidth - documentWidth
    }

    if (open) {
      const paddingRight = scrollbarWidth()
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${paddingRight}px`

      return
    }

    document.body.removeAttribute('style')
  }, [open])

  return (
    <div
      className={cx('modal', {
        active: open,
      })}
    >
      <ClickOutside onOutsideClick={onOutsideClick}>
        <div className={cx('modal__content')}>{children}</div>
      </ClickOutside>
    </div>
  )
}

export default Modal
