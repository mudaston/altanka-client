import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

import type { HydrateAction } from '@shared/lib/types'

interface InitialState {
  number: number
}

const initialState: InitialState = {
  number: 0,
}

export const testSlice = createSlice({
  name: 'testSlice',
  initialState,
  reducers: {
    increment(state) {
      console.log('awdawd')

      state.number += 1
    },
    decrement(state) {
      state.number -= 1
    },
    setNumber(state, action: PayloadAction<number>) {
      state.number = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: HydrateAction<InitialState>) => {
      return {
        ...state,
        ...action.payload[testSlice.name],
      }
    })
  },
})
