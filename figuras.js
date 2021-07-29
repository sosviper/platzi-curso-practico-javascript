const medida = "cm"

// Código del Cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + medida + " ");

function perimetroCuadrado(lado) {
  return lado * 4;
} 
// console.log("El Perímetro del Cuadrado es " + perimetroCuadrado + medida + " ");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El Área del Cuadrado es " + areaCuadrado + medida + "^2");

console.groupEnd();

// Código del Triángulo
console.group("Triángulos")
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log(
//   "Los lados del Triángulo miden: " 
//   + ladoTriangulo1 + medida + " " 
//   + ladoTriangulo2 + medida + " "
//   + baseTriangulo + medida
// );
// console.log("La Altura del Triángulo es de: " + alturaTriangulo + medida);


function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

// console.log("El Perímetro del triángulo es: " + perimetroTriangulo + medida);
function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
// console.log("El Área del Triángulo es: " + areaTriangulo + medida + "^2");

console.groupEnd();

// Código del Círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El Radio del Círculo es: " + radioCirculo + medida);

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}
// console.log("El Diámetro del Círculo es: " + diametroCirculo + medida);

// PI
// const PI = 3.1425;
const PI = Math.PI;
// console.log("El valor de PI es: " + PI + medida);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}
// console.log("El Perímetro del Círculo es: " + perimetroCirculo + medida);

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}
// console.log("El Área del Círculo es: " + areaCirculo + medida + "^2");

console.groupEnd();