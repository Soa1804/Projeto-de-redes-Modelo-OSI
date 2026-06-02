// --- Renderização dos Resultados ---
const dados = JSON.parse(localStorage.getItem("dadosCriptografados"));
const containerDados = document.querySelector("#dados-conteudo");

if (dados && containerDados) {
    containerDados.innerHTML = "";

    Object.keys(dados).forEach(chave => {
        const chaveFormatada = chave
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, str => str.toUpperCase());

        const paragrafo = document.createElement("p");
        paragrafo.innerHTML = `<strong>${chaveFormatada}:</strong> <span>${dados[chave]}</span>`;
        
        containerDados.appendChild(paragrafo);
    });
}