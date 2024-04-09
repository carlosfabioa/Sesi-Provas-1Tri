
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


