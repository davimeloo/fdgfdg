// Importar as dependências
const express = require('express');
const app = express();


// Configurar o motor de visualização EJS
app.set('view engine', 'ejs');

app.use(express.static("public"))
// Rota para a página inicial
app.get('/', (req, res) => {
    res.render('index', { title: 'Página Inicial' });
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});