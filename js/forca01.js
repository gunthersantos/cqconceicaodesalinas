// Array de palavras
const palavras = ['GATO', 'CACHORRO', 'ELEFANTE', 'GIRASSOL', 'ABACAXI'];

var palavra;
let tentativasErradas = 0;
const maxTentativas = 6; 
let hiddenWord = '';

const wordElement = document.querySelector('.word');
const letterButtons = document.querySelector('.letter-buttons');
const hangmanImage = document.querySelector('.hangman img');

reiniciarJogo();

function reiniciarJogo(){
    palavra = palavras[Math.floor(Math.random() * palavras.length)];
    tentativasErradas = 0;
    hangmanImage.src = `/../images/img_forca_01/hangman_${tentativasErradas}.png`;
    for (let i = 0; i < palavra.length; i++) {
        hiddenWord += '__ ';
      }
      wordElement.textContent = hiddenWord;
}





// Cria botões para cada letra do alfabeto
for (let i = 65; i <= 90; i++) {
  const letter = String.fromCharCode(i);
  const button = document.createElement('button');
  button.textContent = letter;
  button.addEventListener('click', () => checkLetter(letter));
  letterButtons.appendChild(button);
}

// Função para verificar se a letra clicada está na palavra
function checkLetter(letter) {
    if (palavra.includes(letter)) {
      let wordArray = wordElement.textContent.split(' ');
      let newWord = '';
  
      for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] === letter) {
          wordArray[i] = letter;
        }
        newWord += wordArray[i] + ' ';
      }
  
      wordElement.textContent = newWord;
  
      if (!newWord.includes('_')) {
        alert('Parabéns! Você ganhou!');
      }
    } else {
      tentativasErradas++;
      if (tentativasErradas < maxTentativas) {
        // Atualiza a imagem da forca
        hangmanImage.src = `../images/img_forca_01/hangman_${tentativasErradas}.png`;
      } else {
        hangmanImage.src = `../images/img_forca_01/hangman_${tentativasErradas}.png`;
        alert('Você perdeu! A palavra era: ' + palavra);
        reiniciarJogo()
      }
    }
  }