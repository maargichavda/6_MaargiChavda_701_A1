const fs = require("fs");
const util = require("util");

const unlinkFile = util.promisify(fs.unlink);

unlinkFile("sample.txt")
    .then(() => {
        console.log("File deleted successfully.");
    })
    .catch((err) => {
        console.log(err);
    });