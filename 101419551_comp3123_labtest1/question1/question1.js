const mixedArray = ["Pizza", 10, true, 25, false, "Wings"]


const lowerCaseWords = (array) => {
    return new Promise((resolve, reject) => {
        try{
            let lowerStringsInArray = array.filter(String);
            resolve(lowerStringsInArray);
        } 
        catch (error) {
            reject(error);
        }
    });
};

lowerCaseWords(mixedArray).then(result => console.log(result)).catch(error => console.error(error));

