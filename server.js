const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(
    cors({
        origin: "*"
    })
)

app.use(express.static(path.join(__dirname, "static")));

app.use('/', (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.sendFile(path.join(__dirname, "static", 'index.html'));
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log("Server is listening on PORT: "+PORT);
});