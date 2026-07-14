
console.log("Directory Name:", __dirname);

console.log("File Name:", __filename);

console.log("Platform:", process.platform);

console.log("Node Version:", process.version);

console.log("\nCommand Line Arguments:");

for (let i = 2; i < process.argv.length; i++) {
    console.log(process.argv[i]);
}

//for runing the program  === >>> node server.js Hello Jay 701 NodeJS 