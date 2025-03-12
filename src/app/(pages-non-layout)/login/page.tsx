"use client"
import Link from "next/link"
import styles from "@/app/(pages)/page.module.css"
import { useState } from "react"
import { join, login } from "@/api/user/auth"
export default function Home() {
  const [phone, setPhone] = useState("")
  const [authenticationCode, setAuthenticationCode] = useState("")

  const handleLogin = async () => {
    try {
      await login(phone)
      alert("login 성공!")
    } catch (error) {
      alert(error)
    }
  }
  const handleJoin = async () => {
    try {
      await join(phone, authenticationCode)
      alert("join 성공!")
    } catch (error) {
      alert(error)
    }
  }
  return (
    <div className={styles.page}>
      <h4>it's login page</h4>
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="폰번"
      />
      <input
        value={authenticationCode}
        onChange={(e) => setAuthenticationCode(e.target.value)}
        placeholder="코드"
      />
      <button onClick={handleLogin}>login</button>
      <button onClick={handleJoin}>조인</button>
      <Link href={"/"}>go home</Link>
    </div>
  )
}
