function verificarIdade() {
    const idade = prompt("Por favor, digite sua idade:");

    if (idade >= 18) {
        alert("Você tem idade suficiente para acessar o conteúdo.");
    } else {
        window.location.href = "https://www.youtube.com/watch?v=6hhV7QNOmuE";
    }
}

window.onload = verificarIdade;