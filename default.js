//Codigo header (subir e descer)


const header = document.querySelector('header');

document.addEventListener('mouseover', function(event) {
    if (event.clientY < 100) {
        console.log(window.scrollX)
        header.style.top = '0';
    }
});


document.addEventListener('mouseout', function(event) {

    if (event.clientY > 100) {

        header.style.top = '-80px';
    }
});