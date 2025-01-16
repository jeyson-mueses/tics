// Obtención de la fecha actual
var date = new Date();
var day = date.getDate().toString().padStart(2, "0"); // Día con dos dígitos
var month = (date.getMonth() + 1).toString().padStart(2, "0"); // Mes con dos dígitos
var year = date.getFullYear();

// Mostrar fecha en formato DD/MM/YYYY
document.write(day + "/" + month + "/" + year);
// Función para crear un array con los nombres de los meses
function makeArray() {
  var args = Array.from(arguments); // Convertir argumentos en array
  return args;
}

var months = makeArray(
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
);

// Mostrar la fecha en formato "Mes Día, Año"
document.write("<br>" + months[date.getMonth()] + " " + day + ", " + year);
