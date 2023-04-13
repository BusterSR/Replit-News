import "../styles/globals.css"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=, initial-scale=1.0" />
      <title>Replit News</title>
    </Head>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
