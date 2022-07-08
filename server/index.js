import cors from "cors"
import express from "express"
import fs from "fs"
import path from "path"

const __dirName = path.resolve()
const PORT = 3001
const app = express()

app.use(express.json())

app.use(cors())
app.get("/", (req, res) => {
    console.log(req);
    res.send("строка")
})

app.get("/get-db", (req, res) => {
    fs.readFile("./db/db.json", { encoding: 'utf-8' }, (error, data) => {
        res.send(data)
    })
    // res.send("строка")
})
app.post("/set-db", (req, res) => {
    console.log(req.body);
    if (!req.body) {
        res.send("данные не поступили")
    } else {
        res.send(req.body)
    }
    // if (!req.data) {
    //     res.send("данные не поступили")
    // }
    
    // fs.writeFile("./db/db.json", req.data, (error) => {
    //     if (error) {

    //         console.log(error);
    //     } else {
    //         console.log("данные сохранены");
    //     }
    // })


    // res.send("строка")
})

app.listen(PORT, () => { console.log("сервер запущен"); })
