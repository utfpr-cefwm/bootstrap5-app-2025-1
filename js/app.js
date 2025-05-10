// Obter uma referência para o elemento onde o evento de interesse ocorre:
const form = document.querySelector("form");

// Detectar o envio do formulário:
form.addEventListener("submit", function(event) {
// Função "handler".

  // Impedir a ação padrão deste evento neste elemento HTML:
  event.stopPropagation();
  event.preventDefault();

  // Efetivamente reagir ao evento:
  console.log("Olá mundo!");

  // Ler a cor que foi selecionada pelo usuário:
  const cor = form["input-cor"].value;

  // Obter uma referência para o elemento de "output":
  const body = document.querySelector("body");

  // Captura a cor anterior para fins de comparação:
  const corAnterior = body.style.backgroundColor;

  // Aplicar esta cor selecionada no elemento de output:
  body.style.backgroundColor = cor;

  // Bônus: tratamento de erro:
  if (corAnterior == body.style.backgroundColor) {
    alert("Cor não pôde ser trocada...");
  }

  // Impedir a ação padrão deste evento neste elemento HTML:
  return false;
});
