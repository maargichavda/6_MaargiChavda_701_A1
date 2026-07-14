const fs = require("fs");

fs.writeFileSync("sample.txt", "Hello NodeJS");
console.log("File created successfully.");

const data = fs.readFileSync("sample.txt", "utf8");
console.log("File Content:", data);

fs.appendFileSync("sample.txt", "\nWelcome to FS Module");
console.log("Data appended successfully.");

fs.renameSync("sample.txt", "newfile.txt");
console.log("File renamed successfully.");

fs.unlinkSync("newfile.txt");
console.log("File deleted successfully.");