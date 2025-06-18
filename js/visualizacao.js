document.addEventListener('DOMContentLoaded', function () {
    const lista = document.getElementById('listaNecessidades');

    function renderizarNecessidades(necessidades) {
        lista.innerHTML = '';
        if (!necessidades.length) {
            lista.innerHTML = '<p>Nenhuma necessidade cadastrada.</p>';
            return;
        }
        necessidades.forEach(n => {
            const card = document.createElement('div');
            card.className = 'card-necessidade';
            card.innerHTML = `
                <h3>${n.titulo}</h3>
                <p><strong>Instituição:</strong> ${n.instituicao}</p>
                <p><strong>Tipo de Ajuda:</strong> ${n.tipoAjuda}</p>
                <p><strong>Descrição:</strong> ${n.descricao}</p>
                <p><strong>Endereço:</strong> ${n.rua}, ${n.numero}, ${n.bairro}, ${n.cidade} - ${n.estado} (${n.cep})</p>
                <p><strong>Contato:</strong> ${n.contato}</p>
            `;
            lista.appendChild(card);
        });
    }

    // Carrega as necessidades do localStorage ao abrir a página
    const necessidades = JSON.parse(localStorage.getItem('necessidades')) || [];
    renderizarNecessidades(necessidades);

    // Busca e filtro
    const buscaInput = document.getElementById('busca');
    const filtroTipoAjuda = document.getElementById('filtroTipoAjuda');

    function filtrarENomear() {
        const termo = (buscaInput.value || '').toLowerCase();
        const tipo = filtroTipoAjuda.value;
        const filtradas = necessidades.filter(n => {
            const correspondeBusca =
                n.titulo.toLowerCase().includes(termo) ||
                n.descricao.toLowerCase().includes(termo);
            const correspondeTipo = !tipo || n.tipoAjuda === tipo;
            return correspondeBusca && correspondeTipo;
        });
        renderizarNecessidades(filtradas);
    }

    buscaInput.addEventListener('input', filtrarENomear);
    filtroTipoAjuda.addEventListener('change', filtrarENomear);
});