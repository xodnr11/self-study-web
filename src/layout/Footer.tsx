import styles from "./Footer.module.css" // CSS 모듈 임포트

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2025 내 앱. All rights reserved.</p>
    </footer>
  )
}
