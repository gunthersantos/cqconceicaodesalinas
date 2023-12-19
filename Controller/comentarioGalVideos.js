selecionarComentarioGalVideos(2);

$(document).ready(function() {
    $('#buttonGalVideos').click(function() {

        var comentario = $('.ComentarioGalVideos').val();
        var sessao = "videos";  

        $.ajax({
            url: './Model/insertComentario.php',
            method: 'post',
            dataType: 'json',
            data: {
                comentario: comentario,
                sessao: sessao
            },
            success: function(data) {                
                selecionarComentarioGalVideos(data.idSessao)
               
                },
            error: function(xhr, status, error) {
                console.log(xhr.responseText);
                
            }
        });
    });
});

// SELECIONAR COMENTARIOS

var numComentarios = 0;
var comentariosVisiveis = 0;


function selecionarComentarioGalVideos(idSessao) {

    $.ajax({
		url: "./Model/selecionarComentarios.php",
        method: 'post',
        data: {idSessao: idSessao},
		dataType: "json",
       success: function(data){

            if(data.comentario != "Nenhum registro encontrado."){

                console.log(data);
                
               preencherComentarioGalVideos(data)

            }			
            
		},
         error: function(xhr, status, error) {
            console.log(xhr.responseText);
            console.log(error);
            
            }
	})

}

function preencherComentarioGalVideos(data){

    if (data.length > 0) {
        var comentariosDiv = document.getElementById('comentariosGalVideos');
      i = data.length;
      j = 0;

      while( i > 0){
        comentario = data[j];

        var novoComentario = document.createElement('p');   
        novoComentario.textContent = comentario;
        comentariosDiv.appendChild(novoComentario);
   
        document.getElementById('novoComentarioGalVideos').value = '';

        numComentarios++;
        comentariosVisiveis++;

        if (numComentarios > 5) {
          if (comentariosVisiveis <= 5) {
            document.getElementById('mostrarMais').style.display = 'inline';
          } else {
            esconderComentariosAntigos();
          }        
      } 
       
      i--;
      j++;

      
    }  
  }
}           


// ORGANIZAÇÃO DE COMENTARIOS 

function esconderComentariosAntigos() {
    var comentarios = document.getElementById('comentariosGalVideos').getElementsByTagName('p');
    for (var i = 0; i < comentarios.length - 5; i++) {
      comentarios[i].style.display = 'none';
    }
    document.getElementById('mostrarMais').style.display = 'inline';
    document.getElementById('mostrarMenos').style.display = 'none';
  }
  
  function mostrarMaisComentarios() {
    var comentarios = document.getElementById('comentariosGalVideos').getElementsByTagName('p');
    for (var i = 0; i < comentarios.length; i++) {
      comentarios[i].style.display = 'block';
    }
    document.getElementById('mostrarMais').style.display = 'none';
    document.getElementById('mostrarMenos').style.display = 'inline';
  }
  
  function mostrarMenosComentarios() {
    esconderComentariosAntigos();
    comentariosVisiveis = 5;
    document.getElementById('mostrarMenos').style.display = 'none';
  }