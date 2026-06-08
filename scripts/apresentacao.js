import {
    SignJWT,
    decodeJwt
} from "https://cdn.jsdelivr.net/npm/jose@6/+esm";

const SECRET =
    new TextEncoder().encode(
        "chave-teste"
    );

async function gerarTokenJWT(dados) {

    const payload = {

        sessionId:
            crypto.randomUUID(),

        timestamp:
            new Date().toISOString(),

        dados

    };

    const token =
        await new SignJWT(payload)
            .setProtectedHeader({
                alg: "HS256"
            })
            .sign(SECRET);

    return token;
}

export async function camadaApresentacao(dadosLimpos) {

    const token =
        await gerarTokenJWT(
            dadosLimpos
        );

    console.log(
        "JWT Gerado:",
        token
    );

    const payload =
        decodeJwt(token);

    console.log(
        "Payload:",
        payload
    );

    localStorage.setItem(
        "dadosCriptografados",
        JSON.stringify({
            token,
            payload
        })
    );

    window.location.href =
        "resultado.html";
}