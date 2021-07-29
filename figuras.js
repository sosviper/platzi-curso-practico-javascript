// Código del Cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
const medida = "cm"
console.log("Los lados del cuadrado miden: " + ladoCuadrado + medida + " ");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El Perímetro del Cuadrado es " + perimetroCuadrado + medida + " ");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El Área del Cuadrado es " + areaCuadrado + medida + "^2");
console.groupEnd();

// Código del Triángulo
console.group("Triángulos")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(
  "Los lados del Triángulo miden: " 
  + ladoTriangulo1 + medida + " " 
  + ladoTriangulo2 + medida + " "
  + baseTriangulo + medida
);
console.log("La Altura del Triángulo es de: " + alturaTriangulo + medida);
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El Perímetro del triángulo es: " + perimetroTriangulo + medida);
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El Área del Triángulo es: " + areaTriangulo + medida + "^2");

console.groupEnd();

// Código del Círculo
console.group("Círculos");

// Radio
const radioCirculo = 4;
console.log("El Radio del Círculo es: " + radioCirculo + medida);

// Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El Diámetro del Círculo es: " + diametroCirculo + medida);

// PI
// const PI = 3.1425;
const PI = Math.PI;
console.log("El valor de PI es: " + PI + medida);

// Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El Perímetro del Círculo es: " + perimetroCirculo + medida);

// Área
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El Área del Círculo es: " + areaCirculo + medida + "^2");

console.groupEnd();