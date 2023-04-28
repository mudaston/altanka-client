import classNames from 'classnames/bind'

import styles from './desktop-menu.module.scss'

import { Routes } from '@shared/lib/routes'
import { Link } from '@shared/ui/link'

const cn = classNames.bind(styles)

const DesktopMenu = () => {
  return (
    <header className={cn('menu', 'container')}>
      <div
        className={cn('menu__brand', 'alt-mr-sm')}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <Link href={Routes.HOME} className={cn('menu__brand-title', 'alt-headline-lg')}>
          Альтанка
        </Link>
      </div>
      <nav>
        <ul className={cn('menu__ul')}>
          <li>
            <Link
              className={cn('menu__link', 'alt-p-sm')}
              href={Routes.HOME}
              size='small'
              shallow
              scroll={false}
            >
              Чебуреки
            </Link>
          </li>
          <li>
            <Link
              className={cn('menu__link', 'alt-p-sm')}
              href={'/about'}
              size='small'
              shallow
              scroll={false}
            >
              Бургеры
            </Link>
          </li>
          <li>
            <Link
              className={cn('menu__link', 'alt-p-sm')}
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

export { DesktopMenu }
