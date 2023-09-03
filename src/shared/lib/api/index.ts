export enum apiRoutes {
  test = 'hello',
}

const API_PATH = 'http://localhost:3000/api'

export const get = async <T>(route: apiRoutes) => {
  try {
    const res = await fetch(`${API_PATH}/${route}`)

    if (res.status !== 200) {
      throw new Error(res.statusText)
    }

    return res.json() as T
  } catch (error) {
    console.log(error)
  }
}
