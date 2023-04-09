import type { Action } from '@reduxjs/toolkit'
import type { HYDRATE } from 'next-redux-wrapper'

/**
 * HYDRATE action with `typed payload`
 *
 * @template InitialState - slice initial state type
 * @example
 * type Action = HydrateAction<typeof initialState>
 *
 * type Action = HydrateAction<InitialState>
 */
export declare interface HydrateAction<InitialState> extends Action {
  type: typeof HYDRATE
  payload: Record<string, InitialState>
}
