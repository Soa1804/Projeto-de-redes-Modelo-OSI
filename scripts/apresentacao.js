// --- Cifra de César ---
const CHAVE_CRIPTOGRAFIA = 9;

function criptografarCesar(texto, deslocamento) {
    return texto.split("").map(caractere => {
        const codigo = caractere.charCodeAt(0);

        if (codigo >= 65 && codigo <= 90) {
            return String.fromCharCode(((codigo - 65 + deslocamento) % 26) + 65);
        }
        if (codigo >= 97 && codigo <= 122) {
            return String.fromCharCode(((codigo - 97 + deslocamento) % 26) + 97);
        }
        if (codigo >= 48 && codigo <= 57) {
            return String.fromCharCode(((codigo - 48 + deslocamento) % 10) + 48);
        }
        return caractere;
    }).join("");
}

// --- Camada de Apresentação ---
function camadaApresentacao(dadosLimpos) {
    const dadosCriptografados = {};

    for (const chave in dadosLimpos) {
        const valorOriginal = dadosLimpos[chave];

        if (chave === "protocolo" || chave === "timestamp" || chave === "metodo" || chave === "formato" || chave === "tipo") {
            dadosCriptografados[chave] = valorOriginal;
        } else {
            dadosCriptografados[chave] = criptografarCesar(String(valorOriginal), CHAVE_CRIPTOGRAFIA);
        }
    }

    console.log("Camada de Apresentação → Dados processados:", dadosCriptografados);
    localStorage.setItem("dadosCriptografados", JSON.stringify(dadosCriptografados));
    window.location.href = "resultado.html";
}