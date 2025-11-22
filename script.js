const cardContainer = document.querySelector(".card-container");
const inputBusca = document.querySelector("input[type='text']");
let dados = [];

async function carregarDados() {
    try {
        const resposta = await fetch("linguagens.json");
        dados = await resposta.json();
        renderizarCards(dados); 
    } catch (error) {
        console.error("Erro ao carregar os dados:", error);
    }
}

function iniciarBusca() {
    const termoBusca = inputBusca.value.toLowerCase();
    const dadosFiltrados = dados.filter(dado =>
        dado.nome.toLowerCase().includes(termoBusca)
    );
    renderizarCards(dadosFiltrados);
}

function renderizarCards(dadosParaRenderizar) {
    cardContainer.innerHTML = ""; 
    for (const dado of dadosParaRenderizar) {
        const article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
        <h2>${dado.nome}</h2>
        <p>${dado.ano}</p>
        <p>${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Saiba mais</a>
        `;
        cardContainer.appendChild(article);
    }
}


carregarDados();