import Link from "next/link"
import styles from "./Header.module.css"

export default function Header() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <Link href="/">홈</Link>
        </li>
        <li>
          <Link href="/mypage">마이페이지</Link>
        </li>
        <li>
          <Link href="/contact">연락처</Link>
        </li>
      </ul>
    </nav>
  )
}
