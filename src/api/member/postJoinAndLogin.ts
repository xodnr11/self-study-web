import { axiosInstance } from "@/api/axiosInstance"

export interface PostJoinAndLoginRequestType {
  phone: number
  authenticationCode: number
}

export const postJoinAndLogin = async (params: PostJoinAndLoginRequestType) => {
  await axiosInstance.post("/sels/api/u/member", {
    params: params,
  })
}
