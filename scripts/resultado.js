import { createNetwork, network } from "./network.js";
import { randomFailures } from "./failures.js";
import { dijkstra } from "./pathfinder.js";
import {
    drawNetwork,
    drawRoute,
    animatePacket
} from "./animation.js";

// =========================
// EXIBIÇÃO DOS DADOS JWT
// =========================

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

    // =========================
    // CAMADA DE REDE
    // =========================

    const tituloRede =
        document.createElement(
            "h3"
        );

    tituloRede.textContent =
        "Camada de Rede";

    containerDados.appendChild(
        tituloRede
    );

    // Cria a rede
    createNetwork();

    // 15 roteadores quebrados
    randomFailures(15);

    // Obtém apenas roteadores ativos
    const ativos =
        network.filter(
            router => router.active
        );

    if (ativos.length >= 2) {

        const origem =
            ativos[
                Math.floor(
                    Math.random() *
                    ativos.length
                )
            ].id;

        let destino =
            ativos[
                Math.floor(
                    Math.random() *
                    ativos.length
                )
            ].id;

        while (
            origem === destino
        ) {

            destino =
                ativos[
                    Math.floor(
                        Math.random() *
                        ativos.length
                    )
                ].id;
        }

        const resultadoRota =
            dijkstra(
                network,
                origem,
                destino
            );

        console.log(
            "Origem:",
            origem
        );

        console.log(
            "Destino:",
            destino
        );

        console.log(
            "Resultado:",
            resultadoRota
        );

        drawNetwork();

        if (
            resultadoRota.path &&
            resultadoRota.path.length > 1
        ) {

            drawRoute(
                resultadoRota.path,
                origem,
                destino
            );

            const infoRota =
                document.createElement(
                    "div"
                );

            infoRota.classList.add(
                "rota-info"
            );

            infoRota.innerHTML = `
                <h4>Roteamento</h4>

                <p>
                    <strong>Origem:</strong>
                    R${origem}
                </p>

                <p>
                    <strong>Destino:</strong>
                    R${destino}
                </p>

                <p>
                    <strong>Custo:</strong>
                    ${resultadoRota.distance}
                </p>

                <p>
                    <strong>Caminho:</strong>
                    ${resultadoRota.path.join(" ➜ ")}
                </p>
            `;

            containerDados.appendChild(
                infoRota
            );

            animatePacket(
                resultadoRota.path,
                origem,
                destino
            );

        } else {

            const erro =
                document.createElement(
                    "p"
                );

            erro.textContent =
                "Nenhuma rota encontrada.";

            containerDados.appendChild(
                erro
            );
        }
    }

    function formatarPacotes(bits) {

        if (!bits) return "";

        const limpo = bits.replace(/\s+/g, "");

        const tamanhoPacote = 8;

        const pacotes = [];

        for (let i = 0; i < limpo.length; i += tamanhoPacote) {

            const bloco = limpo.slice(i, i + tamanhoPacote);

            pacotes.push(`[${bloco}]`);
        }

        return pacotes.join(" ");
    }

    // =====================
    // DADOS DO LOCALSTORAGE (UMA SÓ VEZ)
    // =====================
    const dados = resultado;

    // =====================
    // QUADROS
    // =====================
    const quadrosDiv = document.createElement("div");

    quadrosDiv.innerHTML = `
        <h3>Quadros da Camada de Enlace/Física</h3>
        <div class="quadros-box">
            ${JSON.stringify(dados.quadros, null, 2)}
        </div>
    `;

    containerDados.appendChild(quadrosDiv);

    // =====================
    // BITS
    // =====================
    const bitsDiv = document.createElement("div");

    bitsDiv.innerHTML = `
        <h3>Camada Física (Binário)</h3>
        <div class="bits-box">
            ${formatarPacotes(dados.bits)}
        </div>
    `;

    containerDados.appendChild(bitsDiv);
}