import axios from "axios"
import { cookies } from "next/headers"

const getOSVersion = () => {
  return typeof window !== "undefined" ? navigator.userAgent : "unknown"
}

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true, // 쿠키 포함
})

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = (await cookies()).get("token") // 비동기 처리
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
