document.addEventListener("DOMContentLoaded", function () {
    
    function togglePasswordVisibility() {
        const passwordFields = document.querySelectorAll('.password'); //Encontra todos os campos de senha na página e armazena-os em uma NodeList.
        passwordFields.forEach(field => { //Itera sobre cada campo de senha.
            const eyeIcon = field.nextElementSibling; //Encontra o elemento irmão seguinte (o icon do olho) para cada campo de senha.
            eyeIcon.addEventListener('click', function () {
                const fieldType = field.type === 'password' ? 'text' : 'password';
                field.type = fieldType; //Define o novo tipo para o campo de senha.
                eyeIcon.classList.toggle('bx-hide');
                eyeIcon.classList.toggle('bx-show');
            });
        });
    }

    // Chama a função togglePasswordVisibility para alternar a visibilidade da senha quando a página é carregada.
    togglePasswordVisibility();

    function validateForm() { 
        const form = document.querySelector('form'); //Encontra o formulário na página.
        form.addEventListener('submit', function (event) {
            const requiredFields = document.querySelectorAll('[required]'); // Encontra todos os campos obrigatórios no formulário.
            let isValid = true; //Inicializa uma variável para verificar se o formulário é válido.

            requiredFields.forEach(field => { //Itera sobre cada campo obrigatório
                if (field.value.trim() === '') { //Verifica se o valor do campo está vazio.
                    isValid = false; //Define isValid como falso se algum campo obrigatório estiver vazio.
                    field.classList.add('invalid'); //Adiciona uma classe para indicar que o campo é inválido.
                } else { //Se o campo não estiver vazio, executa o bloco de código a seguir.
                    field.classList.remove('invalid'); //Remove a classe de campo inválido.
                }
            });

            if (!isValid) { //Verifica se o formulário não é válido.
                event.preventDefault(); //Impede a submissão real do formulário.
                alert('Por favor, preencha todos os campos obrigatórios.');
            }
        });
    }

    validateForm();
});
