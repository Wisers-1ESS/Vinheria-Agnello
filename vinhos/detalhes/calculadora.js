document.addEventListener('DOMContentLoaded', function() {
    var precos = document.querySelectorAll('.preco');
    var total = 0;
    precos.forEach(function(preco) {
        total += parseFloat(preco.textContent.replace('R$', '').trim());
    });
    var divTotal = document.createElement('div');
    divTotal.id = 'total';
    divTotal.style.textAlign = 'center';
    divTotal.textContent = 'Total: R$ ' + total.toFixed(2).replace('.', ',');
    document.querySelector('header').appendChild(divTotal);

});

var total = 0;

// Recupera o total do localStorage (se existir)
if (localStorage.getItem('total')) {
    total = parseFloat(localStorage.getItem('total'));
}

// Calcula o total dos preços dos vinhos
precos.forEach(function(preco) {
    total += parseFloat(preco.textContent.replace('R$', '').trim());
});

// Exibe o total no campo de exibição
var divTotal = document.getElementById('total');
divTotal.textContent = 'Total: R$ ' + total.toFixed(2).replace('.', ',');

// Salva o total no localStorage
localStorage.setItem('total', total.toString());;