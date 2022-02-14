var bntAdicionarPalavra = document.querySelector('#addWord');

bntAdicionarPalavra.addEventListener('click', function() {

  var novaPalavra = document.querySelector('#nWord').value;
  novaPalavra = novaPalavra.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Zs]/g, "");
  pool.push(novaPalavra);
})
