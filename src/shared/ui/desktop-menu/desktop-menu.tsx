'use client'

import classNames from 'classnames/bind'
import { useEffect, useRef } from 'react'

import styles from './desktop-menu.module.scss'

import { Routes } from '@shared/lib/routes'
import { Link } from '@shared/ui/link'

const cn = classNames.bind(styles)

const DesktopMenu = () => {
  const refHeader = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => e.target.classList.toggle(cn('menu_sticky'), e.intersectionRatio < 1),
      { threshold: [1] }
    )

    const header = refHeader.current

    if (!header) {
      return
    }

    observer.observe(header)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <header className={cn('menu')} ref={refHeader}>
      <nav className={cn('menu__wrapper', 'container')}>
        <div className={cn('menu__brand')} style={{ display: 'flex', alignItems: 'center' }}>
          <Link href={Routes.HOME} className={cn('menu__brand-title')}>
            Альтанка
          </Link>
        </div>
        <ul className={cn('menu__ul')}>
          <li>
            <Link
              className={cn('menu__link')}
              href={Routes.HOME}
              size='small'
              shallow
              scroll={false}
            >
              Чебуреки
            </Link>
          </li>
          <li>
            <Link className={cn('menu__link')} href={'/about'} size='small' shallow scroll={false}>
              Бургеры
            </Link>
          </li>
          <li>
            <Link
              className={cn('menu__link')}
              href={Routes.HOME}
              size='small'
              shallow
              scroll={false}
            >
              Соусы
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default DesktopMenu
