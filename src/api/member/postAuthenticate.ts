import { axiosInstance } from "@/api/axiosInstance"

export const postAuthenticate = async (phone: string) => {
  await axiosInstance.post("/sels/api/u/member/authentication", {
    phone: phone,
  })
}
