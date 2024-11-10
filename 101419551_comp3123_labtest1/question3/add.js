const fs = require("fs");
const path = require("path");

const wordsInFile = "these will be written into the file hello!!!!!!!!!1"

//from node.js documentation prof gave us for lab test
fs.writeFile("C:\\Users\\leona\\OneDrive\\Desktop\\school\\semester 5\\F2024_FS1\\101419551_comp3123_labtest1\\question3.txt", wordsInFile, err => {
    if (err) {
      console.error(err);
    } else {
        console.log("made the file successfully");
     
    }
  });

//simple for loop to iterate through 10 logs, make it stop at 10 and increments each file log number
for (let i = 1; i <= 10; i++) {
    const fileName = `log${i}.txt`;
    console.log(fileName);
}


