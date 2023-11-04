import Axios from "axios"

export const httpService = {
  get(url: string) {
    return ajax(url, "GET")
  },
}

async function ajax(url: string, method = "GET") {
  try {
    const res = await Axios({
      url,
      method,
    })
    return res.data
  } catch (err: any) {
    return err
  }
}
