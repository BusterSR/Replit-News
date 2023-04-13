import Head from "next/head"
import Header from "../comps/Header"
import Sidebar from "../comps/Sidebar"
import styles from "../styles/home.module.css"

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Replit News</title>
      </Head>
      
      <Header />
      <Sidebar />
      <main style={{
       
        "padding-right": "15px",
        "padding-top": "15px",
        "padding-bottom": "15px"
      }} className = {styles.main}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </main>
    </>
  )
}