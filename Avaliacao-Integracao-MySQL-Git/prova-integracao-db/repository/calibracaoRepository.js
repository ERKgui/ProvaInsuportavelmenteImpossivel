import { conexao } from "../config/conexao.js";

export async function criarCalibracao(calibracao) {
    sql = "INSERT INTO calibracoes (data_calibracao, resultado, responsavel)";
    [resultado] = await conexao.execute(sql, calibracao);

    return resultado;

}

export async function listarCalibracoes() {
    const sql = "SELECT * FROM calibracoes";
    [resultado] = await conexao.execute(sql);

    return resultado;
}

export async function listarCalibracoesDetalhadas() {
    const sql = "SELECT * FROM calibracoes where";
    [resultado] = await conexao.execute(sql);

    return resultado;
}

export async function buscarCalibracaoPorId(id) {
    const sql = "SELECT * FROM calibracoes WHERE equipamento_id = ?";
    const [resultado] = await conexao.execute(sql, id);

    return resultado;
}

export async function atualizarCalibracao(id, calibracao) {
    return conexao.execute("UPDATE calibracoes SET ? WHERE equipamento_id = ?", [id, calibracao]);

}

export async function excluirCalibracao(id) {
    return conexao.execute("DELETE FROM calibracao WHERE equipamento_id = ?", [id]);
}
