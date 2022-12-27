//kullanici girsi kontrolu 
function loginUser(){
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    var formError = document.getElementById("form-error")
   
    if(username =="" || password == ""){
        formError.innerHTML = "not an empty space"
        return
    }

    if(username =="kranda@.com" || password == "fill the blank"){
        alert('welcome yusuf')
    }
}

function singUpUser(){
    var username = document.getElementById("signUpUsername").value
    var email = document.getElementById("signUpEmail").value
    var password = document.getElementById("signUpPassword").value
    var rePassword = document.getElementById("signUpRePassword").value

    var formError = document.getElementById("form-error")
   console.log("complated")
    if(username =="" || password == ""){
        formError.innerHTML = "fill in the blank"
        console.log("empthy space")
    }

    if(password != rePassword){
        alert('the passwrod does not mathced')
        console.log("the passwrod does not mathced")
    }

    var passwordLength = String(password).length
    console.log("the longivety has benn taken")
    if(passwordLength < 6){
        console.log("you must enter at least six fıgure password")
        alert('At least six figure password')
    }
}

function sendMailToUpdatePassword(){
    alert("Please check your ınbox for upcoming notificationmail")
}

document.addEventListener("DOMContentLoaded",() =>{
    const loginForm = document.querySelector("#login")
    const createAccountForm = document.querySelector("#register")
    const forgotPasswordForm = document.querySelector("#forgot")

    document.querySelector("#signUp").addEventListener("click", e=> {
        e.preventDefault();
        loginForm.classList.add("form--hidden")
        createAccountForm.classList.remove("form--hidden")
        forgotPasswordForm.classList.add("form--hidden")
    })

    document.querySelector("#newPassword").addEventListener("click", e=> {
        e.preventDefault();
        loginForm.classList.add("form--hidden")
        createAccountForm.classList.add("form--hidden")
        forgotPasswordForm.classList.remove("form--hidden")
    })

    document.querySelector("#signIn").addEventListener("click", e=> {
        e.preventDefault();
        loginForm.classList.remove("form--hidden")
        createAccountForm.classList.add("form--hidden")
        forgotPasswordForm.classList.add("form--hidden")
    })
    

    document.querySelector("#singUpUser").addEventListener("click", e=> {
        e.preventDefault()
        singUpUser()
    })

    document.querySelector("#backToLogin").addEventListener("click", e=> {
        e.preventDefault()
        loginForm.classList.remove("form--hidden")
        createAccountForm.classList.add("form--hidden")
        forgotPasswordForm.classList.add("form--hidden")
    }) 

  
    document.querySelector("#emailToPassword").addEventListener("click", e=> {
        e.preventDefault()
        sendMailToUpdatePassword()
    })
})