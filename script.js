// ================================================ 
// script.js — Captura de dados do formulário 
// Projeto: AgroVenda Digital 
// Desenvolvedor(a): _____________________________ 
// ================================================ 
 
// PASSO 1: Selecione o botão pelo id definido no HTML 
const botaoCadastrar = document.getElementById("btnCadastrar"); 
//                                           	^ preencha com o id correto 
 
// PASSO 2: Adicione o ouvinte de evento de clique 
// Quando o botão for clicado, a função "cadastrar" será chamada 
botaoCadastrar.addEventListener("click", cadastrar); 
//                           	^ qual evento detecta um clique? 
 
// PASSO 3: Defina a função que será executada 
function cadastrar() { 
 
  // PASSO 4: Capture o valor de cada campo pelo id 
  const nome  = document.getElementById("nome"). value; 
  const email = document.getElementById("email"). value; 
  const senha = document.getElementById("senha"). value; 
  //                                 	^ id do campo  	^ propriedade que retorna o valor digitado 
 
  // PASSO 5: Exiba os dados no console 
  console.log("=== Dados capturados ==="); 
  console.log("Nome:", nome); 
  console.log("E-mail:", email); 
  console.log("Senha:", senha); 
 
  // PASSO 6 (DESAFIO): Valide se algum campo está vazio. 
  // Se estiver, exiba um alert pedindo para o usuário preencher. 
  // Dica: use um if e verifique se nome === "" ou email === "" ou senha === "" 
 
  // TAREFA: escreva a validação aqui 
 if (nome === "" || email === "" || senha === "") {
  alert("Por favor, preencha todos os campos!");
}
 
} 
