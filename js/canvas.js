var bntIniciar = document.querySelector("#bntIniciar");
var bntReiniciar = document.querySelector("#bntReiniciar");

//criar o canvas//
bntIniciar.addEventListener('click', function(){

  desenhaCanvas();
});

bntReiniciar.addEventListener('click', function() {

  progressoForca = 0;
  progressoPalavra = 0;
  letrasAcertadas = " ";
  letrasErradas = " ";

  var canvas = document.querySelector('#forca');
  canvas.remove();

  palavraSecreta = pool[Math.floor(Math.random() * pool.length)];
  palavraCerta = palavraSecreta.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").split('');

  desenhaCanvas();
  desenhaForca();

  var visibilidadeBotao = document.createAttribute("class");
  visibilidadeBotao.value = "apagar";
  bntReiniciar.setAttributeNode(visibilidadeBotao);
})

function desenhaCanvas() {
  //adicionando tag//
  var tabuleiro = document.createElement("canvas");
  document.getElementById('area-jogo').appendChild(tabuleiro);
  //adicionando atributos da tag//
  var altura = document.createAttribute("height");
  var largura = document.createAttribute("width");
  var id = document.createAttribute("id");

  altura.value = "800";
  largura.value = "1200";
  id.value = "forca";

  var canvas = document.getElementsByTagName('canvas')[0];
  canvas.setAttributeNode(altura);
  canvas.setAttributeNode(largura);
  canvas.setAttributeNode(id);

  //esconder o botão Iniciar, adicionar palavra e input//
  var novaPalavra = document.querySelector('#nWord');
  var visibilidadeBotao = document.createAttribute("class");
  visibilidadeBotao.value = "apagar";
  bntIniciar.setAttributeNode(visibilidadeBotao);
  var visibilidadeBotao = document.createAttribute("class");
  visibilidadeBotao.value = "apagar";
  bntAdicionarPalavra.setAttributeNode(visibilidadeBotao);
  var visibilidadeBotao = document.createAttribute("class");
  visibilidadeBotao.value = "apagar";
  novaPalavra.setAttributeNode(visibilidadeBotao);
}
