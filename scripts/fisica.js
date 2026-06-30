export function camadaFisica(quadros) {

    let framesIntactos = true;

    // =========================
    // VALIDAÇÃO DO CRC/HASH
    // =========================

    quadros.forEach(quadro => {

        const payloadString =
            JSON.stringify(
                quadro.payload
            );

        const hashCalculado =
            md5(payloadString);

        if (
            hashCalculado !==
            quadro.crc
        ) {

            framesIntactos = false;

            console.error(
                `Falha no quadro ${quadro.frameId}: CRC inválido.`
            );
        }
    });

    if (framesIntactos) {

        alert(
            "CAMADA FÍSICA\n\n" +
            "CRC validado com sucesso!\n" +
            "Todos os quadros chegaram íntegros."
        );

    } else {

        alert(
            "CAMADA FÍSICA\n\n" +
            "Falha na validação do CRC!\n" +
            "Os dados foram corrompidos."
        );
    }

    // =========================
    // CONVERSÃO PARA BINÁRIO
    // =========================

    const bits =
        JSON.stringify(
            quadros
        )
        .split("")
        .map(char =>
            char
                .charCodeAt(0)
                .toString(2)
                .padStart(8, "0")
        )
        .join(" ");

    console.log(
        "CAMADA FÍSICA - BITS",
        bits
    );

    // =========================
    // RETORNO COMPLETO
    // =========================

    return {
        quadros,
        bits,
        status: framesIntactos ? "OK" : "CORROMPIDO"
    };
}