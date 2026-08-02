const password_eye = document.getElementById("password-eye")
const password_content = document.getElementById("password-content")

password_eye.addEventListener("click", function(){

    if (password_content.type === "password") {

        password_content.type = "text"
        password_eye.src = "icons/eye_open.png"


    }else {

        password_content.type = "password"
        password_eye.src = "icons/eye_closed.png"
    }


})