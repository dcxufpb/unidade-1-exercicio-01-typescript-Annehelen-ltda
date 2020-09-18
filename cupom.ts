let nomeLoja ="Arcos Dourados Com. de Alimentos LTDA";
let logradouro = "Av. Projetada Leste";
let numero = 500;
let complemento = "EUC F32/33/34";
let bairro = "Br. Sta Genebra"
let municipio = " Campinas";
let estado = " SP";
let cep = "13080-395"
let telefone = "(19) 3756-7408"
let observacao ="Loja 1317 (PDP)"
let cnpj ="42.591.651/0797-34"
let incricaoEstudual ="244.898.500.113"
function imprime_dados_loja() {
  //implemente aqui
  let output = nomeLoja + "\n";
  output += `${logradouro}, ${numero} ${complemento}\n`;
  output += `${bairro} -${municipio} -${estado}\n`;
  output += `CEP:${cep} Tel ${telefone}\n`;
  output += `${observacao}\n`;
  output += `CNPJ: ${cnpj}\n`;
  output += `IE: ${incricaoEstudual}`;
  return output;
}

module.exports = imprime_dados_loja;
