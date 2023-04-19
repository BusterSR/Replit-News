import Head from "next/head"
import Header from "../comps/Header"
import Sidebar from "../comps/Sidebar"

export default function About() {
  return (
    <>
      <Head>
        <title>About | Replit News</title>
      </Head>
      
      <Header />
      <Sidebar />
      <main style={{
        "padding-left": "calc(clamp(100px, 12vw, 250px) + 15px)",
        "padding-right": "15px",
        "padding-top": "15px",
        "padding-bottom": "15px"
      }}>
        <h2>About Us</h2>
        <p>Welcome to Replit News, the premier source for all the latest news and information about Replit, the popular online coding and collaboration platform. Our website is designed for replers, by replers, and is dedicated to providing you with the most up-to-date and comprehensive coverage of everything related to Replit.

Whether you're a seasoned developer or just starting out, Replit News has everything you need to stay informed about the latest developments and trends in the world of coding. From breaking news and feature articles to in-depth analysis and expert commentary, our team of experienced writers and editors is committed to bringing you the best possible coverage of everything related to Replit.

Our website features a clean, user-friendly interface that makes it easy to find the information you need, whether you're looking for the latest updates on Replit's platform features, the latest releases of popular programming languages, or detailed tutorials and guides to help you improve your coding skills.

At Replit News, we believe that everyone should have access to the latest news and information about the world of coding and development, which is why we're committed to providing our readers with the highest-quality coverage of Replit and everything related to it. So if you're a repler looking to stay on top of the latest trends and developments in the world of coding, be sure to check out Replit News today!</p>
      </main>
    </>
  )
}
