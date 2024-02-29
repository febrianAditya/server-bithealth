if(process.env.NODE !== "production") { // ini harus tambahin untuk memberi tahu environment yyang akan digunakan
    require('dotenv').config()
}

const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000 // harus ditambahkan env untuk PORT untuk tidak memaksa layanan menggunakan 3000

app.get("/", (req, res) => {
    res.status(200).json("Hello World")
})

app.listen(PORT, () => {
    console.log(`I LOVE YOU ${PORT}`);
})
