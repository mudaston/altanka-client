import classNames from 'classnames/bind'
import React, { FC } from 'react'

import styles from './control-select.module.scss'

import { Button } from '@shared/ui/button'

interface ControlSelectProps {}

type Props = ControlSelectProps

const cn = classNames.bind(styles)

const ControlSelect: FC<Props> = () => {
  return (
    <Button className={cn('control')} variant='secondary' size='medium'>
      Выбрать
    </Button>
  )
}

export default ControlSelect
