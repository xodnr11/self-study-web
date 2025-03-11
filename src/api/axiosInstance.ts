import axios from "axios"

const getOSVersion = () => {
  return typeof window !== "undefined" ? navigator.userAgent : "unknown"
}

// 클라이언트에서 쿠키를 가져오는 함수
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
    return cookies["token"] // 저장된 토큰 가져오기
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
    // 비동기 처리
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
