const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {

    let filePath = "";

    if (req.url === "/") {
        filePath = path.join(__dirname, "public", "index.html");
    }
    else if (req.url === "/style.css") {
        filePath = path.join(__dirname, "public", "style.css");
    }
    else if (req.url === "/script.js") {
        filePath = path.join(__dirname, "public", "script.js");
    }
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Page Not Found");
        return;
    }

    fs.readFile(filePath, (err, data) => {

        if (err) {
            res.writeHead(500);
            res.end("Internal Server Error");
            return;
        }

        let contentType = "text/html";

        if (path.extname(filePath) === ".css")
            contentType = "text/css";

        if (path.extname(filePath) === ".js")
            contentType = "application/javascript";

        res.writeHead(200, { "Content-Type": contentType });
        res.end(data);

    });

});

server.listen(8000, () => {
    console.log("Server running at http://localhost:8000");
});