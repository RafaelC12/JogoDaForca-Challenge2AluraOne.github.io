function desenhaForca() {

  var tela = document.querySelector("#forca");
  var pincel = tela.getContext('2d');
  //base da forca//
  pincel.fillStyle = 'white';
  pincel.strokeStyle = 'white';
  pincel.beginPath();
  pincel.moveTo(30, 145);
  pincel.lineTo(60, 130);
  pincel.lineTo(90, 145);
  pincel.lineTo(28, 145);
  pincel.lineWidth = 2;
  pincel.stroke();
  //haste da forca//
  pincel.moveTo(60, 130);
  pincel.lineTo(60, 20);
  pincel.lineTo(140, 20);
  pincel.lineTo(140, 25);
  pincel.stroke();
  //desenhar traços da palavra//
  desenhaTracos(100, 115);
}
//funções para desenhar corpo
function desenhaCabeca() {
  var tela = document.querySelector("#forca");
  var pincel = tela.getContext('2d');

  pincel.fillStyle = 'white';
  pincel.beginPath();
  pincel.arc(140, 35, 10, 0, 2 * 3.14);
  pincel.fill();
}

function desenhaTronco() {
  var tela = document.querySelector("#forca");
  var pincel = tela.getContext('2d');

  pincel.fillStyle = 'white';
  pincel.beginPath();
  pincel.moveTo(140, 45);
  pincel.lineTo(140, 85);
  pincel.stroke();
}

function desenhaBracoE() {
  var tela = document.querySelector("#forca");
  var pincel = tela.getContext('2d');

  pincel.fillStyle = 'white';
  pincel.beginPath();
  pincel.moveTo(140, 55);
  pincel.lineTo(125, 65);
  pincel.stroke();
}

function desenhaBracoD() {
  var tela = document.querySelector("#forca");
  var pincel = tela.getContext('2d');

  pincel.fillStyle = 'white';
  pincel.beginPath();
  pincel.moveTo(140, 55);
  pincel.lineTo(155, 65);
  pincel.stroke();
}

function desenhaPernaE() {
  var tela = document.querySelector("#forca");
  var pincel = tela.getContext('2d');

  pincel.fillStyle = 'white';
  pincel.beginPath();
  pincel.moveTo(140, 85);
  pincel.lineTo(125, 98);
  pincel.stroke();
}

function desenhaPernaD() {
  var tela = document.querySelector("#forca");
  var pincel = tela.getContext('2d');

  pincel.fillStyle = 'white';
  pincel.beginPath();
  pincel.moveTo(140, 85);
  pincel.lineTo(155, 98);
  pincel.stroke();
}
//funções para  desenha traços e letras escolhidas
function desenhaTracos(x, x2) {
  var tela = document.querySelector("#forca");
  var pincel = tela.getContext('2d');

  for (var i = 0; i < palavraSecreta.length; i++) {
    pincel.fillStyle = 'white';
    pincel.moveTo(x, 145);
    pincel.lineTo(x2, 145);
    pincel.stroke();
    x = x + 25;
    x2 = x2 + 25;
  }
}

function desenhaLetraCorreta(letra, posicao) {
  var tela = document.querySelector("#forca");
  var pincel = tela.getContext('2d');

  pincel.font = "bold 12px Gaegu";
  pincel.fillText(letra, 103.5 + (posicao * 25), 142);

}

function desenhaLetraIncorreta(letra, posicao) {
  var tela = document.querySelector("#forca");
  var pincel = tela.getContext('2d');

  pincel.font = "bold 12px Gaegu";
  pincel.fillStyle = 'red';
  pincel.fillText(letra, 8, 35 + (posicao * 20));

}

function desenhaErros() {
  var tela = document.querySelector("#forca");
  var pincel = tela.getContext('2d');

  pincel.font = "bold 12px Gaegu";
  pincel.fillStyle = 'red';
  pincel.fillText('ERROS', 8, 17);
}

function desenhaQuadroDeErros() {
  var tela = document.querySelector("#forca");
  var pincel = tela.getContext('2d');

  pincel.strokeRect(3, 5, 50, 15);
  pincel.strokeRect(3, 5, 0.5, 140);
}
//funções para final do jogo
function desenhaMensagemDerrota() {
  var tela = document.querySelector("#forca");
  var pincel = tela.getContext('2d');

  pincel.font = "bold 18px Gaegu";
  pincel.fillStyle = 'black';
  pincel.beginPath();
  pincel.arc(600, 250, 50, 0, 2 * 3.14);
  pincel.fill();
  pincel.fillStyle = 'red';
  pincel.fillText('Fim de Jogo', 120, 40);
  pincel.fillText('Você Perdeu!', 120, 60);
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

  pincel.font = "bold 18px Gaegu";
  pincel.fillStyle = 'green';
  pincel.fillText('Parabéns!', 120, 40);
  pincel.fillText('Você Acertou!', 105, 60);
}
