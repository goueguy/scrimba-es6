// const photos = [];

// async function photoUpload(){
//     let uploadStatus = new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             photos.push("PROFILE PIC");
//             resolve("PHOTO UPLOADED")
//         }, 3000);
//     })

//     let result = await uploadStatus;
//     console.log(result);
//     console.log(photos.length);
// }

// photoUpload();

// Challenge - Async & Await

//Print

const apiUrl = "https//api.chucknorris.io/jokes/random";

async function getJoke(){
    const response = await fetch(apiUrl,{
        method:"GET"
    });
    const data = await response.json();
    console.log(data);
}

getJoke();