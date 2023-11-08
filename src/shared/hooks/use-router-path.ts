import { useRouter } from 'next/router'
import { useLayoutEffect, useState } from 'react'

export const useRouterPath = () => {
  const router = useRouter()
  const [path, setPath] = useState(router.asPath)

  useLayoutEffect(() => {
    setPath(router.asPath)
  }, [router.asPath])

  return { asPath: path }
}
