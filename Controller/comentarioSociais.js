selecionarComentarioSociais(5);

$(document).ready(function() {
    $('#buttonSociais').click(function() {

        var comentario = $('.ComentarioSociais').val();
        var sessao = "sociais";  

        $.ajax({
            url: './Model/insertComentario.php',
            method: 'post',
            dataType: 'json',
            data: {
                comentario: comentario,
                sessao: sessao
            },
            success: function(data) {                
                selecionarComentarioSociais(data.idSessao)
               
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


function selecionarComentarioSociais(idSessao) {

    $.ajax({
		url: "./Model/selecionarComentarios.php",
        method: 'post',
        data: {idSessao: idSessao},
		dataType: "json",
       success: function(data){

            if(data.comentario != "Nenhum registro encontrado."){

                console.log(data);
                
               preencherComentarioSociais(data)

            }			
            
		},
         error: function(xhr, status, error) {
            console.log(xhr.responseText);
            console.log(error);
            
            }
	})

}

function preencherComentarioSociais(data){

    if (data.length > 0) {
        var comentariosDiv = document.getElementById('comentariosSociais');
      i = data.length;
      j = 0;

      while( i > 0){
        comentario = data[j];

        var novoComentario = document.createElement('p');   
        novoComentario.textContent = comentario;
        comentariosDiv.appendChild(novoComentario);
   
        document.getElementById('novoComentarioSociais').value = '';

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
    var comentarios = document.getElementById('comentariosSociais').getElementsByTagName('p');
    for (var i = 0; i < comentarios.length - 5; i++) {
      comentarios[i].style.display = 'none';
    }
    document.getElementById('mostrarMais').style.display = 'inline';
    document.getElementById('mostrarMenos').style.display = 'none';
  }
  
  function mostrarMaisComentarios() {
    var comentarios = document.getElementById('comentariosSociais').getElementsByTagName('p');
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