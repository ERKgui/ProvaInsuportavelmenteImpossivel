import { conexao } from "../config/conexao.js";

export async function criarEquipamento(equipamento) {
    sql = "INSERT INTO equipamentos(codigo_patrimonio, nome, setor, status)";
    [resultado] = await conexao.execute(sql, equipamento);
}

export async function listarEquipamentos() {
    const sql = "SELECT * FROM equipamentos";
    [resultado] = await conexao.execute(sql);

    return resultado;
}

export async function buscarEquipamentoPorId(id) {
     const sql = "SELECT * FROM equipamentos WHERE id = ?";
     const [resultado] = await conexao.execute(sql, id);

     return resultado;
}

export async function atualizarEquipamento(id, equipamento) {
    return conexao.execute("UPDATE equipamentos SET ? WHERE id = ?", [id, equipamento]);
}

export async function excluirEquipamento(id) {
    return conexao.execute("DELETE FROM equipamentos WHERE id = ?", [id]);
}
