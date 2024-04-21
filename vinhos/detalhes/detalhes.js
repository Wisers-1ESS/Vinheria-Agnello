
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