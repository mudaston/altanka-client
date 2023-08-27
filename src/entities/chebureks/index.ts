import { default as json } from './chebureks.json'
import type { Cheburek } from './types'

export type { Cheburek } from './types'

const chebureks: Array<Cheburek> = json

export { chebureks }
