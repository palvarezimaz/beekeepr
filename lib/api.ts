export class ApiError extends Error {
  constructor(url: string, public status: number) {
    super(`'${url}' returned ${status}`)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError)
    }
    this.name = 'ApiError'
    this.status = status
  }
}


export async function fetchJson(url: string, option?: RequestInit): Promise<any> {
  const response = await fetch(url, option)
  if (!response.ok) {
    throw new ApiError(url, response.status)
  }
  return response.json()
}