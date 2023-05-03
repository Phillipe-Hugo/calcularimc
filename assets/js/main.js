// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) { // Previne a atualização do navegador
  e.preventDefault();
  const inputPeso = e.target.querySelector('#peso');// Valores inserido pelo Usuario no HTML
  const inputAltura = e.target.querySelector('#altura');// Valores inserido pelo Usuario no HTML

  const peso = Number(inputPeso.value); //Avalia se o peso é Number
  const altura = Number(inputAltura.value);// Avalia se a altura é Number

  if (!peso) {// Verifica a condição de entrada se é true
    setResultado('Peso inválido', false);
    return;// retornara a mensagem de invalida caso fo false com a cor inserido no CSS
  }

  if (!altura) {// Verifica se a condição de entrada é true
    setResultado('Altura inválida', false);// retornara a mensagem de invalida caso fo false com a cor inserido no CSS
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${nivelImc}).`;

  setResultado(msg, true);
});

function getNivelImc (imc) { // Esta função Calcula o IMC de acordo com o valor inserido no HTML pelo usuario
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

function getImc (peso, altura) { // Esta função captura os valores inseridos na Labem em HTML
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criaP () { // Esta Função Cria um paragro
  const p = document.createElement('p');
  return p;
}

function setResultado (msg, isValid) { // Esta função cria o resultado para ser inserido no HTML
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const p = criaP();// chama o metodo da funcao criaP para acionar 

  if (isValid) {// Condição que valida o resultado de entrada pelo usuario para a saida 
    p.classList.add('paragrafo-resultado');// caso for verdadeiro, chama a linha 60 do CSS
  } else {
    p.classList.add('bad');// caso for falso, chama a linha 65 do CSS
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}
