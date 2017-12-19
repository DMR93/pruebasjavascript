var minumero = 3;
var pares = ['2,4,8,10,12']
if (minumero === pares) {
  console.log('es par');              // aplica el contenedor de pares //
}

else {
  console.log('es impar');
}
// otra forma de hacerlo abajo //
  function comprobarSiEsPar(valor) {
  var resultado = valor%2;
  if (resultado === 0) {
    return 'es par';
  } else {
    return 'esimpar';
  }
}
*

var miNumero = 3;
var esPar = comprobarSiEsPar(miNumero);

if (esPar === true) {
  console.log('Es par');
} else {
  console.log('Es Impar');
}
