// Funções das Calculadoras do Portal COGEP

function somarDias() {
    const dataInicialStr = document.getElementById('dataInicialSum').value;
    const diasSomar = parseInt(document.getElementById('diasSomar').value);
    const resultadoDiv = document.getElementById('resultadoSomar');

    if (!dataInicialStr || isNaN(diasSomar)) {
        resultadoDiv.innerHTML = "Por favor, preencha a data e a quantidade de dias.";
        return;
    }

    // Processamento da data no fuso local
    const partes = dataInicialStr.split('-');
    const data = new Date(partes[0], partes[1] - 1, partes[2]);

    data.setDate(data.getDate() + diasSomar);

    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();

    resultadoDiv.innerHTML = `Data Final: <strong>${dia}/${mes}/${ano}</strong>`;
}

function contarDias() {
    const dataInicialStr = document.getElementById('dataInicialCount').value;
    const dataFinalStr = document.getElementById('dataFinalCount').value;
    const resultadoDiv = document.getElementById('resultadoContar');

    if (!dataInicialStr || !dataFinalStr) {
        resultadoDiv.innerHTML = "Por favor, preencha ambas as datas.";
        return;
    }

    const partesIni = dataInicialStr.split('-');
    const partesFin = dataFinalStr.split('-');

    const d1 = new Date(partesIni[0], partesIni[1] - 1, partesIni[2]);
    const d2 = new Date(partesFin[0], partesFin[1] - 1, partesFin[2]);

    const diffTempo = d2 - d1;
    const diffDias = Math.ceil(diffTempo / (1000 * 60 * 60 * 24));

    if (diffDias < 0) {
        resultadoDiv.innerHTML = "A data final deve ser igual ou posterior à data inicial.";
        return;
    }

    // Inclusivo (soma 1 dia ao intervalo)
    const totalDias = diffDias + 1;

    resultadoDiv.innerHTML = `Total (Inclusive): <strong>${totalDias} dias</strong> (${diffDias} dias corridos entre as datas)`;
}
