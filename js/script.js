document.addEventListener("DOMContentLoaded", function () {
    
    function togglePasswordVisibility() {
        var passwordInput = document.querySelector('.password');

        //alterna a visibilidade da senha, se mostra oculto como senha ou se da para visualizar como texto
        passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    }

    var eyeIcon = document.querySelector('.eye-icon');
    eyeIcon.addEventListener('click', togglePasswordVisibility); //Quando o olho é clicado, a função togglePasswordVisibility é chamada.

    var loginForm = document.querySelector('.form.login form');
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); 
        alert('Login button clicked!');
    });
});
