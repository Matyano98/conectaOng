document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formCadastro');

    // Array para armazenar as necessidades cadastradas
    let necessidades = JSON.parse(localStorage.getItem('necessidades')) || [];

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

        // Salvar dados no array e no localStorage
        e.preventDefault(); // Impede o envio do formulário

        const novaNecessidade = {
            instituicao: document.getElementById('instituicao').value,
            tipoAjuda: document.getElementById('tipoAjuda').value,
            titulo: document.getElementById('titulo').value,
            descricao: document.getElementById('descricao').value,
            cep: document.getElementById('cep').value,
            rua: document.getElementById('rua').value,
            bairro: document.getElementById('bairro').value,
            cidade: document.getElementById('cidade').value,
            estado: document.getElementById('estado').value,
            contato: document.getElementById('contato').value
        };

        necessidades.push(novaNecessidade);
        localStorage.setItem('necessidades', JSON.stringify(necessidades));

        alert('Necessidade cadastrada com sucesso!');
        form.reset();
    });

    // Integração com ViaCEP para preenchimento automático de endereço
    const cepInput = document.getElementById('cep');
    cepInput.addEventListener('blur', function () {
        const cep = cepInput.value.replace(/\D/g, '');
        if (cep.length === 8) {
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(response => response.json())
                .then(data => {
                    if (!data.erro) {
                        document.getElementById('rua').value = data.logradouro || '';
                        document.getElementById('bairro').value = data.bairro || '';
                        document.getElementById('cidade').value = data.localidade || '';
                        document.getElementById('estado').value = data.uf || '';
                    } else {
                        alert('CEP não encontrado.');
                        document.getElementById('rua').value = '';
                        document.getElementById('bairro').value = '';
                        document.getElementById('cidade').value = '';
                        document.getElementById('estado').value = '';
                    }
                })
                .catch(() => {
                    alert('Erro ao buscar o CEP.');
                });
        }
    });
});