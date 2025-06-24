function obterClasseTipoAjuda(tipoAjuda) {
    switch (tipoAjuda) {
        case 'Educação':
            return 'ajuda-educacao';
        case 'Saúde':
            return 'ajuda-saude';
        case 'Meio Ambiente':
            return 'ajuda-meio-ambiente';
        case 'Doação de Alimentos':
            return 'ajuda-alimentos';
        case 'Doação de Roupas':
            return 'ajuda-roupas';
        default:
            return 'ajuda-outros';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const lista = document.getElementById('listaNecessidades');

    function renderizarNecessidades(necessidades) {
        lista.innerHTML = '';
        if (!necessidades.length) {
            lista.innerHTML = '<p>Nenhuma necessidade cadastrada.</p>';
            return;
        }
        necessidades.forEach(n => {
            const cartao = document.createElement('div');
            cartao.className = 'cartao-necessidade ' + obterClasseTipoAjuda(n.tipoAjuda);
            cartao.innerHTML = `
                <h3>${n.titulo}</h3>
                <p><strong>Instituição:</strong> ${n.instituicao}</p>
                <p><strong>Tipo de Ajuda:</strong> ${n.tipoAjuda}</p>
                <p><strong>Descrição:</strong> ${n.descricao}</p>
                <p><strong>Endereço:</strong> ${n.rua}, ${n.numero}, ${n.bairro}, ${n.cidade} - ${n.estado} (${n.cep})</p>
                <p><strong>Contato:</strong> ${n.contato}</p>
            `;
            lista.appendChild(cartao);
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