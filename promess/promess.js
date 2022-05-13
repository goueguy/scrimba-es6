const buyFlightTicket = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const error = false;
            if(error){
                reject("YOUR PAYMENT WAS NOT SUCCESSFUL")
            }else{
                resolve("THANK YOU, YOUR PAYMENT WAS SUCCESSFUL");
            }
        },3000)
    });
}

buyFlightTicket()
.then((success)=>{
    console.log(success);
})
.catch((error)=>console(error));

const userData =()=>{
    return new Promise((resolve,reject)=>{
        const error = true;
        if(error){
            reject("500 Level Error")
        }else{
            resolve({
                firstName:'Jean-Louis',
                lastName:"Goueguy",
                email:"jlagoueguy@gmail.com"
            });
        }
    });
}
userData()
.then((success)=>success)
.catch((error)=>console.log(error))