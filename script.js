let vTitulo = document.getElementById("titulo");
let vTagA = document.querySelector("a");
let vTagUl = document.querySelector("ul");
let vTagOl = document.getElementById("lista-ordenada");

vTitulo.innerText = "Título - Tag h1";
vTagA.innerText = "Proz Educação - Tag a";

vTagUl.innerHTML = `
    <ul>
        <li>Teste_UL_1</li>
        <li>Teste_UL_2</li>
        <li>Teste_UL_3</li>
    </ul>
`;

vTagOl.innerHTML = `
    <ol>
        <li><a href="https://prozeducacao.com.br">Teste_OL_1</a></li>
        <li><a href="https://www.google.com/">Teste_OL_2</a></li>
        <li><a href="https://www.globo.com/">Teste_OL_3</a></li>
    </ol>
`;
