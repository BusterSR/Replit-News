import Head from "next/head"
import Header from "../comps/Header"
import Sidebar from "../comps/Sidebar"

export default function Api() {
  return (
    <>
      <Head>
        <title>API | Replit News</title>
      </Head>
      
      <Header />
      <Sidebar />
      <main style={{
        "padding-left": "calc(clamp(100px, 12vw, 250px) + 15px)",
        "padding-right": "15px",
        "padding-top": "15px",
        "padding-bottom": "15px"
      }}>
        <h2>Our API</h2>
      </main>
    </>
  );
}