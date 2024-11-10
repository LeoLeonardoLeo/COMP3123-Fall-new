const delayedSuccess = () => {
    setTimeout(() =>{
        let success = {"Message" : "delayed success"};
        console.log(success);
    }, 500)
}

delayedSuccess()


const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            let success = {"message" : "success"};
            resolve(success)
        }, 500)
    });
};


const delayedException = () => {
    setTimeout(() =>{
        try {
            throw new Error("error: deplayed exception");
        }
        catch (e){
            console.error(e);
        }
    }, 500)
}

delayedException()

const rejectedPromise = () => {
    return new Promise((reject) => {    
        setTimeout(() =>{
            let notSuccess = new Error("Not a success it was rejected");
            reject(notSuccess);
        }, 500)
    });
};

resolvedPromise().then(success =>{
    console.log(success);
}).catch(error =>{
    console.log(error)
})

rejectedPromise().then(success =>{
    console.log(success);
}).catch(error =>{
    console.log(error)
})
 