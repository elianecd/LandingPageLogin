document.addEventListener("DOMContentLoaded", function () {
    
    function togglePasswordVisibility() {
        var passwordInput = document.querySelector('.password');

        //alterna a visibilidade da senha, se mostra oculto como senha ou se da para visualizar como texto
        passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    }

    var eyeIcon = document.querySelector('.eye-icon');
    eyeIcon.addEventListener('click', togglePasswordVisibility); //Quando o olho é clicado, a função togglePasswordVisibility é chamada.

    var loginForm = document.querySelector('.form.login form'); //Encontra o formulário de login na página e armazena-o na variável loginForm.
    loginForm.addEventListener('submit', function (event) { //Quando o formulário é enviado, a função anônima (que tem acesso ao objeto de evento event) é chamada.  
        event.preventDefault();                             //Neste caso, a função apenas chama event.preventDefault() para impedir o envio real do formulário e exibe um alerta indicando que o botão de login foi clicado.
        alert('Login button clicked!');
    });
});
