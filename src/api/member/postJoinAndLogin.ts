import { axiosInstance } from "@/api/axiosInstance"

export interface PostJoinAndLoginRequestType {
  phone: string
  authenticationCode: string
}

export const postJoinAndLogin = async (params: PostJoinAndLoginRequestType) => {
  const { data } = await axiosInstance.post("/sels/api/u/member", params)

  return data
}
