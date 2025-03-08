import Link from "next/link"
import styles from "@/app/page.module.css"

export default function Home() {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
  console.log(API_BASE_URL)
  return (
    <div className={styles.page}>
      <h4>it's login page</h4>
      <Link href={"/"}>go home</Link>
    </div>
  )
}
