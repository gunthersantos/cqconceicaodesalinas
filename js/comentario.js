var numComentarios = 0;
var comentariosVisiveis = 0;

function adicionarComentario() {
  var comentario = document.getElementById('novoComentario').value;
  if (comentario !== '') {
    var comentariosDiv = document.getElementById('comentarios');
    var novoComentario = document.createElement('p');
    novoComentario.textContent = comentario;
    comentariosDiv.appendChild(novoComentario);
    document.getElementById('novoComentario').value = '';

    numComentarios++;
    comentariosVisiveis++;
    if (numComentarios > 5) {
      if (comentariosVisiveis <= 5) {
        document.getElementById('mostrarMais').style.display = 'inline';
      } else {
        esconderComentariosAntigos();
      }
    }
  } else {
    alert('Por favor, adicione um comentário.');
  }
}

function esconderComentariosAntigos() {
  var comentarios = document.getElementById('comentarios').getElementsByTagName('p');
  for (var i = 0; i < comentarios.length - 5; i++) {
    comentarios[i].style.display = 'none';
  }
  document.getElementById('mostrarMais').style.display = 'inline';
  document.getElementById('mostrarMenos').style.display = 'none';
}

function mostrarMaisComentarios() {
  var comentarios = document.getElementById('comentarios').getElementsByTagName('p');
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
