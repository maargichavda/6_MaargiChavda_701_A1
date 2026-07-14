const AdmZip = require("adm-zip");

const zip = new AdmZip("data.zip");

zip.extractAllTo("extracted", true);

console.log("ZIP file extracted successfully.");