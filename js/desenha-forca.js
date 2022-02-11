bntIniciar.addEventListener('click', desenhaForca);

function desenhaForca(){

  var tela = document.querySelector("#forca");
  var pincel = tela.getContext('2d');
  //canvas base para area principal do jogo(apagar depois de programar)//

  //base da forca//
  pincel.fillStyle = 'white';
  pincel.strokeStyle = 'white';
  pincel.beginPath();
  pincel.moveTo(220, 700);
  pincel.lineTo(380, 700);
  pincel.lineTo(300, 685);
  pincel.lineTo(220, 700);
  pincel.lineWidth = 6;
  pincel.stroke();
  //haste da forca//
  pincel.moveTo(300, 685);
  pincel.lineTo(300, 150);
  pincel.lineTo(600, 150);
  pincel.lineTo(600, 200);
  pincel.stroke();
  //desenhar traços da palavra//
  desenhaTracos(420, 470);
}

function desenhaCabeca() {
  var tela = document.querySelector("#forca");
  var pincel = tela.getContext('2d');

  pincel.fillStyle = 'white';
  pincel.beginPath();
  pincel.arc(600, 250, 50, 0, 2*3.14);
  pincel.stroke();
}

function desenhaTronco() {
  var tela = document.querySelector("#forca");
  var pincel = tela.getContext('2d');

  pincel.fillStyle = 'white';
  pincel.beginPath();
  pincel.moveTo(600, 300);
  pincel.lineTo(600, 500);
  pincel.stroke();
}

function desenhaBracoE() {
  var tela = document.querySelector("#forca");
  var pincel = tela.getContext('2d');

  pincel.fillStyle = 'white';
  pincel.beginPath();
  pincel.moveTo(600, 350);
  pincel.lineTo(525, 390);
  pincel.stroke();
}

function desenhaBracoD() {
  var tela = document.querySelector("#forca");
  var pincel = tela.getContext('2d');

  pincel.fillStyle = 'white';
  pincel.beginPath();
  pincel.moveTo(600, 350);
  pincel.lineTo(675, 390);
  pincel.stroke();
}

function desenhaPernaE() {
  var tela = document.querySelector("#forca");
  var pincel = tela.getContext('2d');

  pincel.fillStyle = 'white';
  pincel.beginPath();
  pincel.moveTo(600, 500);
  pincel.lineTo(550, 590);
  pincel.stroke();
}

function desenhaPernaD() {
  var tela = document.querySelector("#forca");
  var pincel = tela.getContext('2d');

  pincel.fillStyle = 'white';
  pincel.beginPath();
  pincel.moveTo(600, 500);
  pincel.lineTo(650, 590);
  pincel.stroke();
}

function desenhaTracos(x, x2) {
  var tela = document.querySelector("#forca");
  var pincel = tela.getContext('2d');

  for (var i = 0; i < palavraSecreta.length; i++) {
    pincel.fillStyle = 'white';
    pincel.moveTo(x, 700);
    pincel.lineTo(x2, 700);
    pincel.stroke();
    x = x + 80;
    x2 = x2 + 80;
  }
}

function desenhaLetraCorreta(letra, posicao) {
  var tela = document.querySelector("#forca");
  var pincel = tela.getContext('2d');

  pincel.font = "bold 25px sans-serif";
  pincel.fillText(letra, 440 + (posicao * 80), 690);

}

function desenhaLetraIncorreta(letra, posicao) {
  var tela = document.querySelector("#forca");
  var pincel = tela.getContext('2d');

  pincel.font = "bold 25px sans-serif";
  pincel.fillStyle = 'red';
  pincel.fillText(letra, 1000, 180 + (posicao*80));

}

function desenhaErros() {
  var tela = document.querySelector("#forca");
  var pincel = tela.getContext('2d');

  pincel.font = "bold 25px sans-serif";
  pincel.fillStyle = 'red';
  pincel.fillText('ERROS', 965, 100);
}

function desenhaQuadroDeErros() {
  var tela = document.querySelector("#forca");
  var pincel = tela.getContext('2d');

  pincel.strokeRect(950, 60, 118, 55);
  pincel.strokeRect(950, 115, 118, 520);
}

function desenhaMensagemDerrota() {
  var tela = document.querySelector("#forca");
  var pincel = tela.getContext('2d');

  pincel.font = "bold 40px sans-serif";
  pincel.fillStyle = 'black';
  pincel.beginPath();
  pincel.arc(600, 250, 60, 0, 2*3.14);
  pincel.fill();
  pincel.fillStyle = 'red';
  pincel.fillText('Fim de Jogo', 700, 200);
  pincel.fillText('Você Perdeu!', 690, 250);
//desenha olhos em X
  pincel.beginPath();
  pincel.moveTo(565, 220);
  pincel.lineTo(590, 240);
  pincel.moveTo(565, 240);
  pincel.lineTo(590, 220);

  pincel.moveTo(610, 220);
  pincel.lineTo(635, 240);
  pincel.moveTo(610, 240);
  pincel.lineTo(635, 220);

  pincel.strokeStyle = 'red';
  pincel.stroke();

}

function desenhaMensagemVitoria() {
  var tela = document.querySelector("#forca");
  var pincel = tela.getContext('2d');

  pincel.font = "bold 40px sans-serif";
  pincel.fillStyle = 'green';
  pincel.fillText('Parabéns!', 700, 200);
  pincel.fillText('Você Acertou!', 670, 250);
}
