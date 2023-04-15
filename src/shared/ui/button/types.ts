interface ButtonProps<T> {
  variant?: 'primary' | 'secondary' | 'tretiary'
  size?: 'small' | 'medium' | 'big'
  /**
   * Default value is `button`
   *
   * Can accept such elements as `Link` from `next/link`
   * @example
   *
   * import { Button } from '@shared/ui/button'
   * import Link from 'next/link'
   *
   *  // with Link from next
   *  <Button as={Link} href='/about'>
   *     Click me
   *  </Button>
   *
   * // default
   *  <Button>
   *     Click me
   *  </Button>
   */
  as?: T
}

type DynamicallyTypedComponent<T extends React.ElementType> = ButtonProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>

export type { DynamicallyTypedComponent }
