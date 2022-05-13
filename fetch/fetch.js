// fetch('https://jsonplaceholder.typicode.com/comments/1')
// .then(response=>response.json())
// .then(data=>console.log(data))


fetch('https://jsonplaceholder.typicode.com/comments',{
    method:"POST",
    body:JSON.stringify({
        postId:1,
        name:"GOUEGUY Jean-Louis Alexis",
        email:"jlagoueguy@gmail.com",
        body:"THAT WAS DOPE !"
    })
})
.then(response=>response.json())
.then(data=>console.log(data))