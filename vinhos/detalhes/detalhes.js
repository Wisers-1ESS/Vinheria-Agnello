var total = 0;
var vinho = null;
var quantidade = document.getElementById("quantidade");
quantidade.innerHTML = 1;
fetch("../../assets/vinhos/vinhos.json").then((response) => {
    response.json().then((data) => {
        vinhos = data.vinhos;
        console.log(vinhos);
        var id = window.location.search.split('=')[1];
        vinho = vinhos.find((v) => v.id == id);
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

  
// if (localStorage.getItem('total')) {
//     total = parseFloat(localStorage.getItem('total'));
//     var divTotal = document.createElement('div');
//     divTotal.id = 'total';
//     divTotal.style.textAlign = 'center';
//     divTotal.textContent = 'Total: R$ ' + total.toFixed(2).replace('.', ',');
//     document.querySelector('header').appendChild(divTotal);
// }
  


var comprar = () => {
    var id = window.location.search.split('=')[1];
    //if (localStorage.getItem('total')) {
    //    total = localStorage.getItem("total");
    //    total = parseFloat(total) + (vinho.preco * parseInt(quantidade.innerHTML));
    //}else{
        total = vinho.preco * parseInt(quantidade.innerHTML);
    //}
    //localStorage.setItem("total", total);
    alert(parseInt(quantidade.innerHTML)+' '+vinho.nome+' adicionado(s) ao carrinho, Total: R$ '+total.toFixed(2).replace('.', ','));
    window.location = "../";
}

var aumentar = () => {
    var quantidade = document.getElementById("quantidade");
    quantidade.innerHTML = parseInt(quantidade.innerHTML) + 1;
}

var diminuir = () => {
    var quantidade = document.getElementById("quantidade");
    if (parseInt(quantidade.innerHTML) > 1) {
        quantidade.innerHTML = parseInt(quantidade.innerHTML) - 1;
    }
}