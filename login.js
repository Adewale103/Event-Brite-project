// function login(){
//     let email_address = document.getElementById("email").value
//     let password = document.getElementById("password").value

//     console.log("Email: ", email_address)
//     console.log("Password: ", password)
// }

let userInput = {
    email : "",
    password : ""
}

document.getElementById("email").addEventListener("keyup", (e) =>
{
    userInput[e.target.name] = e.target.value
} )

document.getElementById("password").addEventListener("keyup", (e) =>
{
    userInput[e.target.name] = e.target.value
} )

function clickHandler(){
    console.log(userInput)
}

console.log(document)