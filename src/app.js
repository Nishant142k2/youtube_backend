import express from "express"
import cors from "cors"
import cookiePaser from "cookie-parser"
const app= express()

app.use(cors({
    origin :process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
}))
app.use(express.json({
    limit:"256kb"
}))
app.use(express.urlencoded({
    extended : true,
    limit:"256kb"
}))
app.use(express.static("public"))



export {app}
