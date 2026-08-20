const express = require("express");
const cors = require("cors");
 
const app = express(); 
 
app.use(cors());
app.use(express.json());
 
// Rota de teste 
app.get("/", (req, res) => { 
  res.json({ mensagem: "Servidor AgroVenda funcionando!" }); 
}); 
 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`); 
}); 


const Database = require('better-sqlite3'); 

// Conecta ao banco (cria o arquivo banco.db se não existir) 
const db = new Database("banco.db"); 

// Cria a tabela usuarios se ainda não existir 
db.exec(` 
  CREATE TABLE IF NOT EXISTS usuarios ( 
	id        INTEGER PRIMARY KEY AUTOINCREMENT, 
	nome      TEXT NOT NULL, 
	email     TEXT NOT NULL,   /* TAREFA: campo do e-mail */ 
	senha     TEXT NOT NULL,   /* TAREFA: campo da senha */ 
	criado_em DATETIME DEFAULT CURRENT_TIMESTAMP 
  ) 
`); 
console.log("Banco conectado!"); 

// Rota POST /cadastrar 
app.post('/cadastrar', (req, res) => { 

  // TAREFA: extraia nome, email e senha do req.body 
  const { nome, email, senha } = req.body; 

  // TAREFA: valide se algum campo veio vazio 
  if (!nome || !email || !senha) { 
	return res.status(400).json({ erro: 'Todos os campos são obrigatórios.' }); 
  } 

  // Insere o usuário no banco 
  const inserir = db.prepare( 
	'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)' 
  ); 
  const resultado = inserir.run(nome, email, senha); 

  console.log(`Cadastro #${resultado.lastInsertRowid}: ${nome}`); 

  // TAREFA: responda com status 201 e uma mensagem de sucesso em JSON 
  res.status(201).json({ 
	mensagem: 'Usuário cadastrado com sucesso!', 
	id: resultado.lastInsertRowid 
  }); 
});