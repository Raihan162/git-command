function showHide() {
    let typePass = document.getElementById('passwordInput')
    const togglePassword = document.getElementById('togglePassword');
    if (typePass.type === 'password') {
        typePass.type = 'text'
        togglePassword.className = "far fa-eye"
    } else {
        typePass.type = 'password'
        togglePassword.className = "far fa-eye-slash"
    }
}
// const togglePassword = document.querySelector('#togglePassword');
// const password = document.querySelector('#passwordInput');

// togglePassword.addEventListener('click', function (e) {
//     // toggle the type attribute
//     const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
//     password.setAttribute('type', type);

//     // // toggle the eye / eye slash icon
//     this.classList.toggle('fa-eye');
// });