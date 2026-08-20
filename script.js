const botaoCadastrar = document.getElementById('btnCadastrar'); 

// async permite usar await (espera a resposta do servidor) 
botaoCadastrar.addEventListener("click", async () => { 

  const nome  = document.getElementById('nomeCompleto').value; 
  const email = document.getElementById('email').value;       // TAREFA: id do campo 
  const senha = document.getElementById('senha').value;       // TAREFA: id do campo 

  if (!nome || !email || !senha) { 
	alert('Preencha todos os campos!'); 
	return; 
  } 

  try { 
	// TAREFA: complete a URL com a porta e a rota correta 
	const resposta = await fetch('http://localhost:3000/cadastrar', { 
	  method: 'POST',                    // TAREFA: qual método HTTP? 
	  headers: { "Content-Type": "application/json" }, 
	  body: JSON.stringify({ nome, email, senha }) 
	}); 

	const dados = await resposta.json();  // TAREFA: converte resposta em objeto JS 

	if (resposta.ok) { 
	  alert(`${dados.mensagem} — ID: ${dados.id}`); 
	} else { 
	  alert(`Erro: ${dados.erro}`); 
	} 

  } catch (erro) { 
	console.error("Erro:", erro); 
	alert('Servidor indisponível. Verifique se o servidor está rodando.'); 
  } 
});