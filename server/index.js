import cors from "cors"
import express from "express"
import fs from "fs"
import path from "path"
import os from "os"

const __dirname = path.resolve()
const PORT = 3001
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')));

app.get("/", (req, res) => {
    console.log(req);
})

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
    console.log(os.networkInterfaces()['Беспроводная сеть 2'][1].address);
    
    fs.readFile("./template/main.0f71035c.js", { encoding: 'utf-8' }, (error, data) => {
        if (error) {
            console.log(error);
        } else {
            let file = data
            file = file.replaceAll('localhost', os.networkInterfaces()['Беспроводная сеть 2'][1].address)
            fs.writeFile('./static/static/js/main.0f71035c.js', file, (error) => {
                if (error) {
                    console.log(error);
                } else{
                    console.log('file has been change');
                }    
            })
        }
    })
    fs.readFile("./template/main.0f71035c.js.map", { encoding: 'utf-8' }, (error, data) => {
        if (error) {
            console.log(error);
        } else {
            let file = data
            file = file.replaceAll('localhost', os.networkInterfaces()['Беспроводная сеть 2'][1].address)
            fs.writeFile('./static/static/js/main.0f71035c.js.map', file, (error) => {
                if (error) {
                    console.log(error);
                } else{
                    console.log('file has been change');
                }    
            })
        }
    })
})
