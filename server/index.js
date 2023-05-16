import cors from "cors"
import express from "express"
import fs from "fs"
import path from "path"

const __dirname = path.resolve()
const PORT = 3001
const app = express()

app.use(cors())
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ limit: '10mb' }))
app.use(express.static(path.resolve(__dirname, 'static')));

app.get("/get-db", (req, res) => {
    fs.readFile("./db/db.json", { encoding: 'utf-8' }, (error, data) => {
        if (error) {
            console.log(error);
        } else {
            res.send(data)
        }
    })
})
app.post("/set-db", (req, res) => {
    if (!req.body) {
        res.send("данные не поступили")
    } else {
        // res.send(req.body)
    }

    fs.writeFile("./db/db.json", JSON.stringify(req.body), (error) => {
        if (error) {
            console.log(error);
        } else {
            res.send("данные сохранены")
        }
    })
})

app.listen(PORT, () => {
    console.log("сервер запущен");
})
