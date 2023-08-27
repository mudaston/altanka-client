import classNames from 'classnames/bind'
import React, { FC } from 'react'

import styles from './will-be-later.module.scss'

import { Button } from '@shared/ui/button'

interface WillBeLaterProps {}

type Props = WillBeLaterProps

const cn = classNames.bind(styles)

const WillBeLater: FC<Props> = () => {
  return (
    <Button className={cn('control')} variant='secondary' size='medium' disabled>
      Будет позже
    </Button>
  )
}

export default WillBeLater
