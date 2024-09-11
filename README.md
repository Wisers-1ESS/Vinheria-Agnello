<h1>Site Web da Vinheria Agnello</h1>

.
<h2>Integrantes</h2>

<h3><a href="https://github.com/Enzo-Miletta" target="_blank">Enzo Miletta - RM 98677</a><br>
<a href="https://github.com/Lucas-Son" target="_blank">Lucas Son - RM554724</a><br>
<a href="https://github.com/MaahTorro" target="_blank">Marcela Torro - RM 557658</a><br>
<a href="https://github.com/Matheus-V-Alves" target="_blank">Matheus V. Alves - RM555177</a><br>
<a href="https://github.com/Mats057" target="_blank">Matheus Q. Zanutin - RM558801</a><br>

<h2>Sobre o Projeto</h2>

### Página Principal

<p>A página principal se inicia em uma lista de navegação (ul e li) mostrando as sessões da própria página, sendo elas a descrição principal.</p>
<p>Dentro das sections foram introduzidos textos e links através da tag /a href=""/ para levar quem clicar no texto a outra página, sendo ela a respectiva mostrada dentro do site. </p>
<p>No final do site temos a tag footer, que é o rodapé da página. Nele foi feito o "&copy Vinheria Agnello. Todos os direitos reservados." como forma de copyright, além de ter mais uma sessão em forma de lista levando as respectivas sessões listadas dentro da mesma página.</p>

### Alteração na Main Page
<p> Foi adicionado uma transição simples entre a header e a pagina. Foi utilizado também um sistema onde quando a pagina desce, os paragrafos vão aparecendo, e os de cima subindo.</p>


### 🍷Página de Vinhos🍷

<p>A página de vinhos se incia com o menu padrão, e logo depois uma div main, dentro dela está a section que é responsável por agrupar os elementos relacionados ao catálogo de vinhos, no final da página se encontra o footer padrão</p>

<p>Estrutura da Section</p>

> `Titulo`<br>`Subtitulo`<br>`div .vinhos`<br>`ㅤdiv .vinho`<br>`ㅤㅤdiv .actions`<br>`ㅤㅤimagem do vinho`<br>`ㅤㅤnome do vinho`<br>`ㅤㅤdescrição`<br>`ㅤㅤpreço`<br>`ㅤㅤcomprar`

### Página de compra

<p>A página de compra se incia com o menu padrão, e logo depois uma div main, dentro dela está sections que são responsáveis por agrupar os elementos relacionados a compra do vinho (nome, descrição, quantidade, valor total, cupom, imagem) e a sugestão de receitas. no fim se encontra também o footer padrão fixado na tela.</p>

### Sobre nós 📢

<p>Na parte "Main" do HTML foi iniciado com uma "section", onde foi utilizado o "H1" para fazer o título da página, seguido de uma Div com um "p" dentro para fazer o texto do conteúdo da página. Ao lado do texto foi utilizado uma imagem pela tag "img" de um vinho para deixar a página mais intuitiva.</p>

<p>Há uma segunda "section" onde foi utilizada da mesma forma que a anterior, mas para mostrar-mos a nossa equipe.</p>

<p>Foram adicionadas animações no CSS da página para as imagens de cada integrante da equipe com "transition" e "transform". Quando passado o scroll por cima da imagem, ela da um pequeno zoom.</p>

<p>Além de tudo, também é possível ver que as caixas de texto (que estão na cor vinho) estão responsivas de acordo com a escala de monitor.</p>

<p>Estrutura do código:</p>

```
main 
<section>
<h1> - título
hr
div - centro
<p> - texto sobre nós
<a> - imagem
<section>
div - imagem das equipes
<p> - texto sobre a equipe
div - imagens
<img> - 1 para cada membro da equipe
<footer>
```

### Quiz sobre Vinho

<p>A página de vinhos contem um quiz sobre vinhos para identificar os gostos do usuário, com diversas perguntas para os ajudarem a identificar seus gostos</p>


### Contatos 💬 

<p>Na parte "Main" do HTML foi iniciado com uma "section", onde foi utilizado o "H1" para fazer o título da página, seguido de de um "h2" destacar a frase "Entre em contato conosco via". Seguindo, vem uma Div com um "p" dentro para fazer o texto principal da página. Ao lado do texto foi utilizado introduzido um formulário funcional, para facilitar o contato. Neste formulário foi utilizado JavaScript, html e css. </p>

<h4>Adições no JavaScript</h4>

```
form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkForm();
})
email.addEventListener("blur", () => {
  checkInputEmail();
})
username.addEventListener("blur", () => {
  checkInputUsername();
})
msgtxt.addEventListener("blur", () => {
  checkInputmsgtxt();
})

etc...

```
<h4>Adições no CSS</h4>
<p>Utilizando Pseudo-elementos e Classes</p>

```
.container{
  background-color: #fafafa;
  border-radius: 14px;
  margin: 14px 30px ;
  max-width: 500px;
  width: 100%;
  box-sizing: 0 3px 5px rgba(0,0,0, 0.5);
  overflow: hidden;
}

.container:hover{
  box-shadow: 4px 8px 8px 4px rgba(80, 39, 39, 0.4);
  border-color: #4b1e24;
}


ETC...
```
<h4>Formulário no HTML</h4>
<p>Utilizando: Label,Form, Input...</p>

```
 <form id="form" class="form">
              <div class="form-content">
                <label for="username">Nome</label>
                <input
                  type="text"
                  id="username"
                  placeholder="Digite o seu nome..."
                   />

```

<h1>Checkpoint 02 de Front-End</h1>

- Atualize o README descrevendo a estrutura do projeto.
- Uso das propriedades e valores corretamente (modificadores de texto, cores, listas, box modeling, pseudo classes, pseudo elementos, etc...).
- Utilizem CSS externo.
- Aplique transformações, transições e animações.
- Aplicação de Flex para estruturação das páginas.
- Critérios de avaliação: estrutura do site (organização), design e estética, códigos HTML e CSS, conteúdo e qualidade.
