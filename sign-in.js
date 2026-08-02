const password_eye = document.getElementById("password-eye")
const password_content = document.getElementById("password-content")
const arrow_back_page = document.getElementById("arrow-back-page")

arrow_back_page.addEventListener("click", function(){

    window.location.href = "log-in_page.html"

})

password_eye.addEventListener("click", function(){

    if (password_content.type === "password") {
        
        password_content.type = "text"
        password_eye.src = "icons/eye_opened.svg"

    }else {
        password_content.type = "password"
        password_eye.src = "icons/eye_closed.svg"
    }
})