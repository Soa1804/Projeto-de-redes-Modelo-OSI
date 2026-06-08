const resultado =
    JSON.parse(
        localStorage.getItem(
            "dadosCriptografados"
        )
    );

const containerDados =
    document.querySelector(
        "#dados-conteudo"
    );

if (
    !resultado ||
    !containerDados
) {

    containerDados.innerHTML =
        "<p>Nenhum dado encontrado.</p>";

}
else {

    containerDados.innerHTML = "";

    const tituloToken =
        document.createElement(
            "h3"
        );

    tituloToken.textContent =
        "Token JWT";

    containerDados.appendChild(
        tituloToken
    );

    const token =
        document.createElement(
            "p"
        );

    token.innerHTML =
        `<span class="token-jwt">
            ${resultado.token}
        </span>`;

    containerDados.appendChild(
        token
    );

    const tituloPayload =
        document.createElement(
            "h3"
        );

    tituloPayload.textContent =
        "Payload JWT";

    containerDados.appendChild(
        tituloPayload
    );

    const payload =
        resultado.payload;

    for (const chave in payload) {

        if (chave === "dados")
            continue;

        const p =
            document.createElement(
                "p"
            );

        p.innerHTML =
            `<strong>${chave}:</strong>
             ${payload[chave]}`;

        containerDados.appendChild(
            p
        );
    }

    const tituloDados =
        document.createElement(
            "h3"
        );

}