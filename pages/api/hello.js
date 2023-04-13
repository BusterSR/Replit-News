// Use next connect

import nc from "next-connect" 

const app = nc()

app.post((req,res) => {
  res.send("Hi, Thanks for the post request!")
})

export default app