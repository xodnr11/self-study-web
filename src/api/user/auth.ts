"use server"
import { axiosInstance } from "@/api/axiosInstance"

// 테스트!!
export const login = async (phone: string) => {
  try {
    const res = await axiosInstance.post("/sels/api/u/member/authentication", {
      phone: phone,
    })
    //
    // if (res.data.token) {
    //   document.cookie = `token=${res.data.token}; path=/; max-age=86400` // 1일 유지
    // }

    return res.data
  } catch (error) {
    console.error("로그인 실패:", error)
    throw error
  }
}
// 테스트!!
export const join = async (phone: string, authenticationCode: string) => {
  try {
    const res = await axiosInstance.post("/sels/api/u/member", {
      phone: phone,
      authenticationCode: authenticationCode,
    })

    if (res.data.token) {
      document.cookie = `token=${res.data.token}; path=/; max-age=86400` // 1일 유지
    }

    return res.data
  } catch (error) {
    console.error("로그인 실패:", error)
    throw error
  }
}
