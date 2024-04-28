
fetch("../../assets/vinhos/vinhos.json").then((response) => {
    response.json().then((data) => {
        vinhos = data.vinhos;
        console.log(vinhos);
        var id = window.location.search.split('=')[1];
        var vinho = vinhos.find((v) => v.id == id);
        if (vinho) {
            document.getElementById("nome").innerHTML = vinho.nome;
            document.getElementById("imagem").src = "../../assets/vinhos/" + vinho.imagem;
            document.getElementById("descricao").innerHTML = vinho.descricao;
            document.getElementById("preco").innerHTML = "R$ " + vinho.preco.toFixed(2);
        }else{
            alert("Vinho não encontrado");
            window.location = "../";
        }
    });
})

var comprar = () => {
    var id = window.location.search.split('=')[1];
    var carrinho = localStorage.getItem("carrinho");
    if (carrinho) {
        carrinho = JSON.parse(carrinho);
        carrinho.push(id);
    }else{
        carrinho = [id];
    }
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    alert("Vinho adicionado ao carrinho");
    window.location = "../";
}
function aplicarCupom() {
    const cupomInput = document.getElementById('cupom');
    const cupom = cupomInput.value.trim();

    if (cupom === 'FIAP2024') {
        const precoElement = document.getElementById('preco');
        const precoTexto = precoElement.innerText;
        const precoNumerico = parseFloat(precoTexto.replace('R$ ', ''));
        const precoComDesconto = precoNumerico * 0.9;
        precoElement.innerText = `R$ ${precoComDesconto.toFixed(2)}`;
        alert(`Preço com desconto: R$ ${precoComDesconto.toFixed(2)}`);
    } else {
        alert('Cupom inválido. Por favor, insira um cupom válido.');
    }
}
let descontoAplicado = false;
function aplicarCupom() {
    if (descontoAplicado) {
        alert('O desconto já foi aplicado. Não é possível usar o desconto mais de uma vez.');
        return;
    }
    const cupomInput = document.getElementById('cupom');
    const cupom = cupomInput.value.trim();
    if (cupom === 'FIAP2024') {
        const precoElement = document.getElementById('preco');
        const precoTexto = precoElement.innerText;
        const precoNumerico = parseFloat(precoTexto.replace('R$ ', ''));
        const precoComDesconto = precoNumerico * 0.9;   
        precoElement.innerText = `R$ ${precoComDesconto.toFixed(2)}`;
        alert(`Preço com desconto: R$ ${precoComDesconto.toFixed(2)}`);        
        descontoAplicado = true;
    } else {
        alert('Cupom inválido. Por favor, insira um cupom válido.');
    }
}
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
