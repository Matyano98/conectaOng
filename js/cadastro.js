document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formCadastro');

    form.addEventListener('submit', function (e) {
        // Validação de e-mail ou telefone simples
        const contato = document.getElementById('contato').value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const telefoneRegex = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;

        if (!emailRegex.test(contato) && !telefoneRegex.test(contato)) {
            alert('Informe um e-mail ou telefone válido no campo de contato.');
            e.preventDefault();
            return;
        }

        
    });
});
