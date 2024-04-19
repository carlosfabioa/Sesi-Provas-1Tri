const express = require('express');
const app = express();

// Diretório público para arquivos estáticos (opcional)
app.use(express.static('public'));

// Rota principal
app.get('/', (req, res) => {
    res.send('Servidor rodando. Acesse /callback para simular o redirecionamento.');
});

// Rota de callback para o Spotify
app.get('/callback', (req, res) => {
    res.send('Callback do Spotify. Você seria redirecionado para cá após a autenticação.');
});

// Iniciar o servidor
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
