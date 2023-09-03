import { FC, useEffect, useRef, ReactElement, cloneElement } from 'react'

interface ClickOutsideProps {
  children: ReactElement
  onOutsideClick: (e: MouseEvent) => void
}

type Props = ClickOutsideProps

const ClickOutside: FC<Props> = ({ children, onOutsideClick }) => {
  const handleRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = handleRef.current

    if (!element) {
      return
    }

    const clickHandler = (e: MouseEvent) => {
      if (!element.contains(e.target as Node)) {
        onOutsideClick(e)
      }
    }

    document.body.addEventListener('click', clickHandler, true)

    return () => {
      document.body.removeEventListener('click', clickHandler, true)
    }
  }, [handleRef, onOutsideClick])

  return cloneElement(children, { ref: handleRef })
}

export default ClickOutside
