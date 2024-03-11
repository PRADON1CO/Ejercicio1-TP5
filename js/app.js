let numAlateorio;

function crearNumAlatorio() {
  numAlateorio = Math.floor(Math.random() * 100) + 1;
}

function mostrarOcultarAreas() {
  const inicioJugo = document.getElementById('btnInicio');
  inicioJugo.className = 'd-none'
  const enviarNum = document.getElementById('iniciar');
  enviarNum.className = 'd-block pt2'
}

function verificarNum() {
  const numIngresado = parseInt(document.getElementById('input').value);

  if (numIngresado === numAlateorio) {
    alert('¡Felicitaciones! Adivinaste el número.');
  } else if (numIngresado < numAlateorio) {
    alert('El número que ingresaste es menor al número mágico. Intenta nuevamente.');
  } else {
    alert('El número que ingresaste es mayor al número mágico. Intenta nuevamente.');
  }
}

document.getElementById('btnInicio').addEventListener('click', function() {
  crearNumAlatorio();
  mostrarOcultarAreas();
});

document.getElementById('enviar').addEventListener('click', function() {
  verificarNum();
});



