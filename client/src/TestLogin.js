document.addEventListener('DOMContentLoaded', function() {
    const RegisterBTN = document.getElementById('Register');
    const container = document.getElementById('Container');
    const loginBTN = document.getElementById('Login');

    RegisterBTN.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginBTN.addEventListener('click', () => {
        container.classList.remove("active");
    });
});
