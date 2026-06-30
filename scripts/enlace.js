export function camadaEnlace(segmentos) {

    const quadros =
        segmentos.map(segmento => {

            const payload = {
                macOrigem: "AA:BB:CC:DD:EE:01",
                macDestino: "AA:BB:CC:DD:EE:99",
                segmento
            };

            return {
                frameId: segmento.sequencia,
                payload,
                crc: md5(JSON.stringify(payload))
            };
        });

    console.log(
        "CAMADA DE ENLACE",
        quadros
    );

    return quadros;
}