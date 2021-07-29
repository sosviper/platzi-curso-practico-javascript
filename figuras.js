const medida = "cm"

// Código del Cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
  return lado * 4;
} 

function areaCuadrado(lado) {
  return lado * lado;
}

console.groupEnd();

// Código del Triángulo
console.group("Triángulos")

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.groupEnd();

// Código del Círculo
console.group("Círculos");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();

// Aquí interactuamos con HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;
  const area = areaCuadrado(value);
  alert(area);
}

function calcularAlturaTriangulo(lado1, lado2, base) {
  if (lado1 != lado2) {
    return alert("No es un Triángulo isósceles")
  }
  const altura = Math.sqrt((lado1 * lado1) - ((base * base) / 4 ));
  alert(altura);
}