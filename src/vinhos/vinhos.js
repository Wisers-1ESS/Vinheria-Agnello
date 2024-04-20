let favoritar = (target) => {
    target.classList.toggle('favoritado');
    target.src = target.classList.contains('favoritado') ? '../assets/vinhos/heart-fill.svg' : '../assets/vinhos/heart.svg';
}

let listar = (target) => {
    target.classList.toggle('listado');
    target.src = target.classList.contains('listado') ? '../assets/vinhos/save-fill.svg' : '../assets/vinhos/save.svg';
}