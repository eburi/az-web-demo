const express = require('express')
const path = require('path');
const fs = require('fs');

const app = express()
const port = process.env.port || 8080;
const imgDirPath = process.env.FilePath || path.join(__dirname, 'assets');

app.set('trust proxy', 1) // Trust env-settings from load-balancer

app.get('/', (req, res) => {
    fs.readdir(imgDirPath, (err, files) => {
        if (err) {
            res.status(500).json(err)
            return
        }

        res.status(200).json(files)
    });
})

// unsafe file delivery...
app.get('/file/:id', (req, res) =>
    res.sendFile(path.join(imgDirPath, req.params.id))
)

app.get('/_env', (req, res) => {
    res.status(200).json(process.env);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port} - listing files from ${imgDirPath} (running in ${__dirname})`)
})

