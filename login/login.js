document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;

    var password = document.getElementById("password").value;
  
    if (username === "1234" && password === "1234") {

      window.location.href = "/Vinheria-Agnello/index.html";

    } 
    else if (username === "" && password === "") {
      alert("Campos vazios.")
    }

    else {

      alert("Senha ou usuário incorreto.");
    }

  });
  
  

  //Codigo header (subir e descer)


const header = document.querySelector('header');

document.addEventListener('mouseover', function(event) {

    if (event.clientY < 200) {

        header.style.top = '0';
    }
});


document.addEventListener('mouseout', function(event) {

    if (event.clientY > 100) {

        header.style.top = '-100px';
    }
});