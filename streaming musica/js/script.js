
document.getElementById('caixa-busca').addEventListener('keyup', function(event) {
    if(event.key === 'Enter') {
        buscarMusica(this.value)
    }
});

function buscarMusica(consulta){
   console.log(`Buscando por: ${consulta}`);

   const listaMusica = document.getElementById('lista-musica');
    listaMusica.innerHTML = `<p> Resultado da busca aparece aqui <br> ${consulta} </p>`;

}

function adicionarParaPlayList(musicaId){
    console.log(`Adicionando a música ${musicaId} à PlayList`)
}



function getAccessToken() {
    const authEndpoint = 'https://accounts.spotify.com/authorize';
    const clientId = 'adbb0d4772c349f78b4b6abe2661f42f';
    const redirectUri = 'http://localhost:8888/callback';
    const scopes = [
        'user-read-private', 
        'user-read-email'
        // Adicione mais escopos conforme necessário
    ];

    window.location.href = `${authEndpoint}?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes.join(' '))}&response_type=token&show_dialog=true`;
}



function fetchUserProfile(accessToken) {
    fetch('https://api.spotify.com/v1/me', {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

var accessToken = getAccessToken()
fetchUserProfile(accessToken)
