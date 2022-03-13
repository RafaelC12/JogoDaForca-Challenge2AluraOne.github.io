var bntIniciar = document.querySelector("#bntIniciar");
var bntReiniciar = document.querySelector("#bntReiniciar");
var areaInicial = document.getElementById("startA");

//criar o canvas//
bntIniciar.addEventListener('click', function() {

  desenhaCanvas();
  desenhaForca();
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
  var id = document.createAttribute("id");

  id.value = "forca";

  var canvas = document.getElementsByTagName('canvas')[0];
  canvas.setAttributeNode(id);

  //esconder a area inicial//
  var novaPalavra = document.querySelector('#nWord');
  var visibilidadeBotao = document.createAttribute("class");
  visibilidadeBotao.value = "apagar";
  areaInicial.setAttributeNode(visibilidadeBotao);
}
