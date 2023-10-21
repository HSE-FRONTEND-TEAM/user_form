let signup_btn = document.querySelector('.singup')
let form_container = document.querySelector('.form-container')
let form = document.querySelector('form')
let input_name = document.querySelector('#name')
let last_a = form.querySelectorAll('a')
let side_panel = document.querySelector('.side-panel')
last_a = last_a[last_a.length - 1]

signup_btn.addEventListener('click', (event) => {
    form_container.classList.toggle('login')
    input_name.classList.toggle('hide')
    last_a.classList.toggle('hide')
    let h1 = document.querySelector('h1')
    let form_p = form.querySelector('p')
    let signin_btn = form.querySelector('input[type="submit"]')
    let h2 = document.querySelector('h2')
    let side_p =side_panel.querySelector('p') 

    if (form_container.classList.contains('login')) {
        h1.innerHTML = "Create Account"
        form_p.innerHTML = "or use your email for registration"
        signin_btn.value = "sign up"
        h2.innerHTML = "Welcome Back!"
        side_p.innerHTML = "To keep connected with us please login with your personal info"
        signup_btn.value = "sign in"
    } else {
        h1.innerHTML = "Sign in"
        form_p.innerHTML = "or use your account"
        signin_btn.value = "sing in"
        h2.innerHTML = "Hello, Friend!"
        side_p.innerHTML = "Enter your personal details and start journey with us"
        signup_btn.value = "sign up"
    }
})
