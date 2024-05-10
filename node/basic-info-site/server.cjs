const http = require("http");
const fs = require("fs/promises");
const path = require("path");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    let filePath = path.join(
        __dirname,
        "public",
        req.url === "/" ? "index.html" : req.url
    );

    const fileExtension = path.extname(filePath);

    let contentType = "text/html";

    switch (fileExtension) {
        case ".css":
            contentType = "text/css";
            break;
        case ".js":
            contentType = "text/javascript";
    }

    if (contentType == "text/html" && fileExtension == "") filePath += ".html";

    fs.readFile(filePath, "utf8")
        .then((file) => {
            res.writeHead(200, { "content-type": contentType });
            res.end(file);
        })
        .catch((error) => {
            if (error.code === "ENOENT") {
                fs.readFile(path.join(__dirname, "public", "404.html"))
                    .then((file) => {
                        res.writeHead(404, { "content-type": contentType });
                        res.end(file);
                    })
                    .catch((err) => console.log(err));
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${error.code}`);
            }
        });
});

server.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
