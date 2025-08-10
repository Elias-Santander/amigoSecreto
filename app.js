// Archivo JavaScript para el funcionamiento del juego

let listaDeAmigos = []; // Acá un Array para almacenar todos los nombres de los amigos ingresados.

// Función que sirve para agregar los nombres que se ingresen en el input.
function agregarAmigo() {
  // Variable para obtener el elemento input donde se escriben los nombres.
  let inputAmigo = document.getElementById('amigo');
  let nombreAmigo = inputAmigo.value;

  // Condicional IF que valida que el campo de texto no esté vacío.
  if (nombreAmigo.trim() === '') {
    alert('Por favor, ingresa un nombre válido.');
    return; // El Return permite que la función finalice en caso que el campo está vacío.
  }

  // Acá se agrega el nombre ingresado en el array de listaDeAmigos.
  listaDeAmigos.push(nombreAmigo);

  // Al llamar a esta función se muestra la lista actualizada en la página.
  actualizarLista();

  // Limpia el campo de texto para permitir ingresar el próximo nombre.
  inputAmigo.value = '';
}

// Función que sirve para la lista de nombres que se han ingresado.
function actualizarLista() {
  // Variable para obtener el elemento donde se mostrará la lista de nombres.
  let lista = document.getElementById('listaAmigos');
  lista.innerHTML = ''; // Acá se limpia la lista.

  // Ciclo de Iteración sobre el array para crear los elementos de lista por cada amigo.
  listaDeAmigos.forEach(amigo => {
    let item = document.createElement('li');
    item.textContent = amigo;
    lista.appendChild(item);
  });
}

// Función que sirve para sortear cuál será el amigo secreto sorteado.
function sortearAmigo() {
  // Condicional IF encargado de validar que al menos existan dos nombres en la lista, necesarios para poder realizar el sorteo.
  if (listaDeAmigos.length < 2) {
    alert('Necesitas al menos dos amigos para realizar un sorteo.');
    return;
  }

  // Variable para generar un índice aleatorio en base al largo del Array listaDeAmigos.
  let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);

  // Variable para almacenar la Selección del amigo secreto, en el cual se utiliza el índice aleatorio de la variable anterior.
  let amigoSecreto = listaDeAmigos[indiceAleatorio];

  // Invocación a la función para mostrar en pantalla el resultado del sorteo, se envía como argumento el nombre del amigo que ha sido seleccionado.
  mostrarResultado(amigoSecreto);
}

// Función que sirve para mostrar en pantalla el resultado del amigo secreto que se ha elegido en el sorteo.
function mostrarResultado(amigoSecreto) {
  // Variable que obtiene el elemento donde se mostrará el resultado del sorteo.
  let resultado = document.getElementById('resultado');

  // Acá se inserta en el elemento un mensaje que mostrará el nombre del amigo secreto sorteado.
  resultado.textContent = `El amigo secreto es: ${amigoSecreto}`;
}