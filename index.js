const express = require('express')
const path = require('path');
const fs = require('fs');

const app = express()
const port = process.env.port || 8080;
const imgDirPath = process.env.FilePath || path.join(__dirname,  'assets');

app.get('/', (req, res) => {
    fs.readdir(imgDirPath, (err, files) => {
        if (err) {
            res.status(500).json(err)
            return
        }

        res.status(200).json(files)
    });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port} - listing files from ${imgDirPath} (running in ${__dirname})`)
})

