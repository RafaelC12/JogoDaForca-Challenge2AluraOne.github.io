//criar função e desenvolver lógica para sorteiar uma palavra secreta para a forca//

//palavras disponíveis inicialmente//
var pool = ["arco", "bola", "cama", "maçã", "rosa", "alura", "carro", "corda", "lápis", "livro", "porta", "agente", "cavalo", "fronha", "humano", "jardim", "anedota", "cardume", "família", "quimera", "sucesso"];
//sorteiar uma palavra aleatória dentro da pool//
var palavraSecreta = pool[Math.floor(Math.random() * pool.length)];

var palavraCerta = palavraSecreta.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Zs]/g, "").split('');

var progressoForca = 0;
var progressoPalavra = 0;
var letrasAcertadas = " ";
var letrasErradas = " ";
//captura o código da tecla pressionada e transforma em string//
function chavePressionada(evento) {
  evento = evento || window.event;
  var chaveCode = evento.keyCode || evento.which;
  return String.fromCharCode(chaveCode);
}
//ao apertar uma tecla verifica se a string contém numeros, desenha a letra certa ou sinaliza a letra errada //
document.onkeypress = function(evento) {
  var str = chavePressionada(evento).toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Zs]/g, "");
//verifica se o jogo acabou
  if(progressoPalavra <= palavraCerta.length && progressoForca < 6){
//verifica se a key pressionada é uma letra
    if(isNaN(str)) {
//verifica se a letra está na palavra sorteada
      if(palavraCerta.includes(str)) {
//verifica se a letra já não foi usada antes
        if(!letrasAcertadas.includes(str)) {
//desenha a letra correta no seu determinado lugar
          for (var o = 0; o < palavraCerta.length; o++) {

            if(palavraCerta[o] == str) {

              desenhaLetraCorreta(palavraCerta[o], o);
              progressoPalavra++;
              letrasAcertadas += str;
              console.log(letrasAcertadas);

              if(progressoPalavra == palavraCerta.length) {

                desenhaMensagemVitoria();
                progressoForca = 6;
                bntReiniciar.removeAttribute('class');
              }
            }
          }
        }
      } else if(progressoForca < 6){
//desenha a letra incorreta nos erros e desenha a forca
            if(!letrasErradas.includes(str)){

              desenhaLetraIncorreta(str, letrasErradas.length - 1);
              letrasErradas += str;
            }
            if(progressoForca == 0) {

              desenhaQuadroDeErros();
              desenhaErros();
              desenhaCabeca();
              progressoForca++;
            } else if (progressoForca == 1) {

                desenhaTronco();
                progressoForca++;
            } else if (progressoForca == 2) {

                desenhaBracoE();
                progressoForca++;
            } else if (progressoForca == 3) {

                desenhaBracoD();
                progressoForca++;
            } else if (progressoForca == 4) {

                desenhaPernaE();
                progressoForca++;
//desenha a última parte e mostra a mensagem de derrota na tela
            } else if (progressoForca == 5) {

                desenhaPernaD();
                desenhaMensagemDerrota();
                progressoForca++;
                bntReiniciar.removeAttribute('class');
            }
        }
    } else {

        alert("Entrada Inválida");
      }
  }
};
