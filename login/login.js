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
  