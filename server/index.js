const express = require('express');
const app = express();
const mysql = require('mysql2');

app.use(express.json());

// Configuração do banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'project18',
});

// Rota para inserir os dados do treino no banco de dados
app.post('/item', (req, res) => {
    const data = req.body;
  
    const values = data.map(({ nome, repeticoes, quantidade }) => [nome, repeticoes, quantidade]);

  
    // Insira os dados no banco de dados
    connection.query('INSERT INTO tabela_treino4 (nome, repeticoes, quantidade) VALUES ?', [values], (error, results) => {
      if (error) {
        console.error('Erro ao inserir dados:', error);
        res.status(500).json({ error: 'Erro ao inserir dados' });
      } else {
        console.log('Dados inseridos com sucesso');
        res.status(200).json({ message: 'Dados inseridos com sucesso' });
      }
    });
  });
  

// Inicie o servidor
app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
