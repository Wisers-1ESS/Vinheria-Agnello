let favoritar = (target) => {
    target.classList.toggle('favoritado');
    target.src = target.classList.contains('favoritado') ? '../assets/vinhos/heart-fill.svg' : '../assets/vinhos/heart.svg';
}

let listar = (target) => {
    target.classList.toggle('listado');
    target.src = target.classList.contains('listado') ? '../assets/vinhos/save-fill.svg' : '../assets/vinhos/save.svg';
}

function calculatePrice() {
    const wineCost = parseFloat(document.getElementById("wineCost").value);
    const winePrice = wineCost * 3; // Fórmula: Preço da Carta de Vinhos = Custo da Garrafa * 3
    document.getElementById("result").textContent = `Preço da carta de vinhos: R$ ${winePrice.toFixed(2)}`;
}

// if (localStorage.getItem('total')) {
//     total = parseFloat(localStorage.getItem('total'));
//     var divTotal = document.createElement('div');
//     divTotal.id = 'total';
//     divTotal.style.textAlign = 'center';
//     divTotal.textContent = 'Total: R$ ' + total.toFixed(2).replace('.', ',');
//     document.querySelector('header').appendChild(divTotal);
// }