const dealers = [
    "Concessionária 01",
    "Concessionária 02",
    "Concessionária 03",
    "Concessionária 04",
    "Concessionária 05",
];

function filterDealers() {
    const searchInput = document.getElementById('dealer-search').value.toLowerCase();
    const dealerSelect = document.getElementById('dealer');

    // Limpa as opções anteriores
    dealerSelect.innerHTML = '';

    // Filtra e adiciona as opções que correspondem à pesquisa
    const filteredDealers = dealers.filter(dealer => dealer.toLowerCase().includes(searchInput));
    filteredDealers.forEach(dealer => {
        const option = document.createElement('option');
        option.value = dealer;
        option.textContent = dealer;
        dealerSelect.appendChild(option);
    });

    // Exibe a lista de opções apenas se houver opções filtradas
    dealerSelect.style.display = filteredDealers.length > 0 ? 'block' : 'none';
}

// Função para gerenciar a exibição do campo "Qual concessionária"
document.getElementById('user-type').addEventListener('change', function() {
    const dealerSelectContainer = document.getElementById('dealer-select-container');
    dealerSelectContainer.style.display = this.value === 'concessionaria' ? 'block' : 'none';

    // Limpa o campo de pesquisa e as opções ao ocultar o select
    if (this.value !== 'concessionaria') {
        document.getElementById('dealer-search').value = '';
        document.getElementById('dealer').innerHTML = '';
        document.getElementById('dealer').style.display = 'none';
    }
});
