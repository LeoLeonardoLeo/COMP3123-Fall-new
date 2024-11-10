const fs = require("fs");
const path = require("path");

const deleteFile = "C:\\Users\\leona\\OneDrive\\Desktop\\school\\semester 5\\F2024_FS1\\101419551_comp3123_labtest1\\question3.txt";

const remove = (file) => {
    fs.unlink(file, err => {
        console.log("File removed")
    })
}

remove(deleteFile);