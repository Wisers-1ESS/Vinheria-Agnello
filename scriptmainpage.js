function verificarIdade() {
    const idade = prompt("Por favor, digite sua idade:");

    if (idade >= 18) {
        alert("Você tem idade suficiente para acessar o conteúdo.");
    } else {
        window.location.href = "https://www.youtube.com/watch?v=6hhV7QNOmuE";
    }
}

window.onload = verificarIdade;


//Codigo header (subir e descer)


const header = document.querySelector('header');

document.addEventListener('mouseover', function(event) {

    if (event.clientY < 100) {

        header.style.top = '0';
    }
});


document.addEventListener('mouseout', function(event) {

    if (event.clientY > 100) {

        header.style.top = '-100px';
    }
});




// Faz com que os paragrafos sumam conforme a pagina rola

const paragrafos = document.querySelectorAll('p');

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


function checkVisibility() {
    paragrafos.forEach(paragrafo => {
        if (isElementInViewport(paragrafo)) {

            paragrafo.style.opacity = '1';
        } else {

            paragrafo.style.opacity = '0';
        }
    });
}

window.addEventListener('scroll', checkVisibility);


checkVisibility();