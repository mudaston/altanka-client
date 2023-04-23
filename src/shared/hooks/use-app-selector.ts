import type { TypedUseSelectorHook } from 'react-redux'
import { useSelector } from 'react-redux'

// eslint-disable-next-line boundaries/element-types
import { RootState } from '@app/store'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
