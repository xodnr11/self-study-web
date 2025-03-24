import axios from "axios"

const getOSVersion = () => {
  return typeof window !== "undefined" ? navigator.userAgent : "unknown"
}

const getAuthToken = () => {
  if (typeof document !== "undefined") {
    const cookies = document.cookie.split("; ").reduce(
      (acc, cookie) => {
        const [name, value] = cookie.split("=")
        acc[name] = value
        return acc
      },
      {} as Record<string, string>,
    )
    return cookies["token"]
  }
  return null
}

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true, // 쿠키 포함
})

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = getAuthToken()
    config.headers.os = "web"
    config.headers["app-version"] = "1"
    config.headers["os-version"] = getOSVersion()
    if (token) {
      config.headers["auth-token"] = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response || error.message)
    return Promise.reject(error)
  },
)
