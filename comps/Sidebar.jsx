import styles from "../styles/sidebar.module.css"

export default function Sidebar() {
  return (
    <nav className={styles.sidebar}>
      <a className={styles.link} href="/">Home</a>
      <a className={styles.link} href="/about">About</a>
      <a className={styles.link} href="/API">API</a>
    </nav>
  );
}