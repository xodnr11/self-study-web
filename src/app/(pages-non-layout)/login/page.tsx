"use client"
import { useState } from "react"
import styled from "styled-components"
import { useMutation } from "@tanstack/react-query"
import { postAuthenticate } from "@/api/member/postAuthenticate"
import { postJoinAndLogin } from "@/api/member/postJoinAndLogin"

export default function Home() {
  const [state, setState] = useState({
    phone: "",
    authenticationCode: "",
    isSend: false,
  })
  const { mutate: authenticationMutate } = useMutation({
    mutationFn: () => postAuthenticate(state.phone),
    onSuccess: () => {},
    onError: (error) => {
      alert(`잠시 후 다시 시도해주세요.`)
    },
  })

  const { mutate: loginMutate } = useMutation({
    mutationFn: () =>
      postJoinAndLogin({
        phone: parseInt(state.phone),
        authenticationCode: parseInt(state.authenticationCode),
      }),
    onSuccess: () => {},
    onError: (error) => {
      alert(`잠시 후 다시 시도해주세요.`)
    },
  })

  return (
    <Container>
      <PhoneInput
        value={state.phone}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            phone: e.target.value,
          }))
        }
        placeholder="전화번호를 입력해주세요."
      />
      <AuthenticationNumberInput
        value={state.authenticationCode}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            authenticationCode: e.target.value,
          }))
        }
        placeholder="인증번호를 입력해주세요."
      />
      {state.isSend ? (
        <Button onClick={() => authenticationMutate()}>회원가입</Button>
      ) : (
        <Button onClick={() => authenticationMutate()}>인증번호 전송</Button>
      )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  gap: 26px;
  padding-bottom: 80px;
`

const PhoneInput = styled.input`
  margin-top: 258px;
  padding: 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  font-family: Inter;
  border-radius: 5px;
  width: 100%;
  outline: none;
  align-items: center;
  justify-content: center;
  &:focus {
    border-color: #0070f3;
    box-shadow: 0 0 5px rgba(0, 112, 243, 0.3);
  }
`

const AuthenticationNumberInput = styled.input`
  padding: 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  outline: none;
  align-items: center;
  justify-content: center;
  &:focus {
    border-color: #0070f3;
    box-shadow: 0 0 5px rgba(0, 112, 243, 0.3);
  }
`

const Button = styled.button`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 20px 121px;
  font-size: 16px;
  color: white;
  font-family: Inter;
  font-weight: 700;
  background-color: #5569e6;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  max-width: 360px;
  transition: background-color 0.3s;
`
