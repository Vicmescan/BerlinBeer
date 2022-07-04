import express from "express";
import cors from 'cors'
// import the conexion to DB
import db from "./database/db.js";

import routes from "./routes/routes.js";

const app = express()
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use('/bars', routes)

try {
    await db.authenticate()
    console.log('Connection has been established successfully.')
} catch (error) {
    console.error('Unable to connect to the database:', error)
}

app.get('/', (req, res) => {
    res.send('Hello World')
})


const PORT = process.env.PORT || 4000


app.listen(PORT, console.log(`Server started on port ${PORT}`));