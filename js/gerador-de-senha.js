// Seleciona os elementos HTML:
const botaoGerar = document.querySelector('#botao-gerar');
const switches = Array.from(
  document.querySelectorAll('input[type="checkbox"]')
);
const inputComprimento = document.querySelector("#comprimento");
const output = document.querySelector('output');

// Adiciona o listener:
botaoGerar.addEventListener('click', function() {

  // Extrair o `number` atual do comprimento:
  const comprimento = +inputComprimento.value;

  // Demonstra o método "filter" do Array:
  const switchesSelecionados = switches.filter(s => {
    return s.checked;
  });
  // filter: Array → Array; #(Array1) >= #(Array2); os elementos são os mesmos, desde que recebam return true.

  // Demonstra o método "map" do Array:
  const regrasSelecionadas = switchesSelecionados.map(s => s.id);
  // map: Array → Array; #(Array1) == #(Array2); tipos podem ser diferentes e os elementos podem se "transformar".

  // Gera os caracteres necessários:
  const caracteres = new Array(comprimento).fill('A').map(slot => {
    const regra = regrasSelecionadas[randInt(regrasSelecionadas.length)];
    return geraCaracter(regra);
  });

  // Demonstra o método "reduce" do Array (OVERKILL!!! Ver abaixo um jeito mais sucinto...):
  output.innerHTML = caracteres.reduce((acum, c) => {
    return acum + c;
  }, '');
  // map: Array → type(acum).

  // output.innerHTML = caracteres.join('');

});

function geraCaracter(regra) {
  switch(regra) {
    case 'numeros':
      return '0123456789'[randInt(10)];
    case 'maiusculas':
      return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[randInt(26)];
    case 'minusculas':
      return 'abcdefghijklmnopqrstuvwxyz'[randInt(26)];
    case 'especiais':
      return '!@#$%&*-_='[randInt(10)];
  }
}

// Function que sorteia um inteiro aleatório entre 0..range-1:
function randInt(range) {
  return Math.min(Math.floor(Math.random()*range), range - 1)
}

// Demonstra o método "forEach" do Array:
switches.forEach(s => {
  s.addEventListener('change', validaFormulario);
})
// forEach: Array → [Não retorna!!]

function validaFormulario() {
  // Conta quantos checkboxes estão tickados:
  const numeroTickados = switches.filter(s => s.checked).length;
  if (numeroTickados == 0) {    // Formulário inválido!
    botaoGerar.disabled = true; // Botão desabilitado.
  } else {
    botaoGerar.disabled = false;
  }
}
validaFormulario();
