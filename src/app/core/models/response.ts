export interface IResponse {
  motd: {
    msg: string,
    url: string,
  }
  success: boolean,
  base: string,
  date: string,
  rates: {
    [key: string]: number
  }
}
