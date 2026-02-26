import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import storeRoutes from "./routes/store.routes.js"

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/theme-demo")

app.use("/api/store", storeRoutes)

app.listen(5000, () => console.log("Backend running"))
