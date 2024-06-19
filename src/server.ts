import express, { Request, Response } from "express"
import cors from "cors"
import connectToDatabase from "./db"
import categoryRoutes from "./routes/category.routes"
import taskRoutes from "./routes/task.routes"
import userRoutes from "./routes/user.routes"

const application = express()
const corsOptions = {
    origin: '*',
    methods: ['POST', 'GET', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}
application.use(cors(corsOptions));

application.use(express.json())


const PORT = 1337

connectToDatabase()

application.get("/ping", (request: Request, response: Response) => {
  response.send("Pong")
})

application.use("/users", userRoutes)
application.use("/categories", categoryRoutes)
application.use("/tasks", taskRoutes)

application.listen(PORT, () => {
  console.log("Server up and running")
})
