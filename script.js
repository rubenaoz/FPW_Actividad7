const section = document.querySelector(".section");

// Variables 1
let myName = "Ruben"; // Declarando e inicializnado variable myName
let myAge = 99; // Declarando e inicializando variable myAge

// Agregando resultado a la pagina web
const variable1 = document.createElement("h3");
variable1.textContent = "Variables 1";
const para1 = document.createElement("p");
para1.textContent = myName;
const para2 = document.createElement("p");
para2.textContent = myAge;

section.appendChild(variable1);
section.appendChild(para1);
section.appendChild(para2);

// Variables 2
let myName2 = "Ruben"; // Reemplazando Paul con mi nombre

// Agregando resultado a la pagina web
const para = document.createElement("p");
const variable2 = document.createElement("h3");
variable2.textContent = "Variables 2";
para.textContent = myName2;
section.appendChild(variable2);
section.appendChild(para);

// Variables 3
let myName3 = "Default"; // Cambiando la declaracion de la variable a "let" en lugar de "const"
myName3 = "Chris";
let myAge2 = "42";

// Agregando resultado a la pagina web
const variable3 = document.createElement("h3");
const para3 = document.createElement("p");
const para4 = document.createElement("p");
variable3.textContent = "Variables 3";
para3.textContent = myName3;
para4.textContent = `In 20 years, I will be ${+myAge2 + 20}`;
section.appendChild(variable3);
section.appendChild(para3);
section.appendChild(para4);

// Matematicas 1
let finalResult;
let evenOddResult;

// Declarando Numeros
let numeroUno = 1;
let numeroDos = 5;
let numeroTres = 10;
let numeroCuatro = 2;
// Sumando los primeros dos numeros declarados
let sumaUnoDos = numeroUno + numeroDos;
// Restando el cuarto numero delcarado del tercero
let restaTresCuatros = numeroTres - numeroCuatro;
// Multiplicando Ambos resultados
finalResult = sumaUnoDos * restaTresCuatros;
// Checando si el resultado es par
evenOddResult = finalResult % 2;

// Agregando resultado a la pagina web
const mate1 = document.createElement("h3");
mate1.textContent = "Matematicas 1";
const para5 = document.createElement("p");
const finalResultCheck =
  finalResult === 48 ? `Yes, well done!` : `No, it is ${finalResult}`;
para5.textContent = `Is the finalResult 48? ${finalResultCheck}`;
const para6 = document.createElement("p");
const evenOddResultCheck =
  evenOddResult === 0
    ? "The final result is even!"
    : "The final result is odd. Hrm.";
para6.textContent = evenOddResultCheck;
section.appendChild(mate1);
section.appendChild(para5);
section.appendChild(para6);

// Matematicas 2
let result = 7 + 13 / 9 + 7;
let result2 = (100 / 2) * 6;
// Multiplicando ambos resultados y almacenandolos en 'result'
result = result * result2;
// Cambiando el resultado a dos decimales
let finalResult2 = result.toFixed(2);
// Convirtiendolo a tipo numero
let finalNumber = +finalResult2;

// Agregando resultado a la pagina web
const mate2 = document.createElement("h3");
mate2.textContent = "Matematicas 2";
const para7 = document.createElement("p");
para7.textContent = `Your finalResult is ${finalResult2}`;
const para8 = document.createElement("p");
const finalNumberCheck =
  isNaN(finalNumber) === false
    ? "finalNumber is a number type. Well done!"
    : `Ooops! finalNumber is not a number.`;
para8.textContent = finalNumberCheck;
section.appendChild(mate2);
section.appendChild(para7);
section.appendChild(para8);

// Matematicas 3
// Statement 1: The elephant weighs less than the mouse
const eleWeight = 1000;
const mouseWeight = 2;

// Statement 2: The Ostrich is taller than the duck
const ostrichHeight = 2;
const duckHeight = 0.3;

// Statement 3: The two passwords match
const pwd1 = "stromboli";
const pwd2 = "stROmBoLi";

// Declarando e inicializnado varaibles booleanas de acuerdo a las declaraciones previas
const weightComparison = eleWeight < mouseWeight;
const heightComparison = ostrichHeight > duckHeight;
const pwdMatch = pwd1 === pwd2;

// Agregando reusltado a la pagina web
const mate3 = document.createElement("h3");
mate3.textContent = "Matematicas 3";
section.appendChild(mate3);
const parra1 = document.createElement("p");
const parra2 = document.createElement("p");
const parra3 = document.createElement("p");

const weightTest = weightComparison
  ? "True — elephants weigh less than mice!?"
  : "False — of course an elephant is heavier than a mouse!";
const heightTest = heightComparison
  ? "True — an ostrich is indeed taller than a duck!"
  : "False — apparently a duck is taller than an ostrich!?";
const pwdTest = pwdMatch
  ? "True — the passwords match."
  : "False — the passwords do not match; please check them";

parra1.textContent = weightTest;
section.appendChild(parra1);
parra2.textContent = heightTest;
section.appendChild(parra2);
parra3.textContent = pwdTest;
section.appendChild(parra3);

// Cadenas 1
const quoteStart = "Don't judge each day by the harvest you reap";
// Declarando quoteEnd con el final de la frase
const quoteEnd = " but by the seeds that you plant.";
// Concatenando ambos strings en una nueva variable finalQuote
const finalQuote = quoteStart.concat(quoteEnd);

// Agregando resultado a la pagina web
const cadenas1 = document.createElement("h3");
cadenas1.textContent = "Cadenas 1";
const parra4 = document.createElement("p");
parra4.textContent = finalQuote;
section.appendChild(cadenas1);
section.appendChild(parra4);

// Cadenas 2
const quote = "I do not like green eggs and ham. I do not like them, Sam-I-Am.";
const substring = "green eggs and ham";
// Obteniendo la longitud de la cita
const quoteLength = quote.length;
// Obteniendo el indice en el que se encuentra el substring
const index = quote.indexOf(substring);
// Creando un nuevo substring omitiendo la segunda oracion
const revisedQuote = quote.slice(0, index + substring.length);

// Agregando resultado a la pagina web
const cadenas2 = document.createElement("h3");
cadenas2.textContent = "Cadenas 2";
const parrafo1 = document.createElement("p");
parrafo1.textContent = `The quote is ${quoteLength} characters long.`;
const parrafo2 = document.createElement("p");
parrafo2.textContent = revisedQuote;
section.appendChild(cadenas2);
section.appendChild(parrafo1);
section.appendChild(parrafo2);

// Cadenas 3
const quote2 = "I dO nOT lIke gREen eGgS anD HAM";
// Arreglando la capitalizacion de la cadena y reemplazando comidas
const fixedQuote = (quote2[0] + quote2.slice(1).toLowerCase()).replace(
  "green eggs and ham",
  "mushrooms and tomatoes"
);
// Agregando punto al final
const finalQuote2 = fixedQuote + ".";
// Agregando resultado a la pagina web
const cadenas3 = document.createElement("h3");
cadenas3.textContent = "Cadenas 3";
const parrafo3 = document.createElement("p");
parrafo3.textContent = fixedQuote;
const parrafo4 = document.createElement("p");
parrafo4.textContent = finalQuote2;
section.appendChild(cadenas3);
section.appendChild(parrafo3);
section.appendChild(parrafo4);

// Cadenas 4
const theorem = "Pythagorean theorem";
const a = 5;
const b = 8;
// Cambiando a plantilla literal y agregando variables y resultado dentro de la plantilla
const myString = `Using ${theorem}, we can work out that that if the two shortest sides of a right-angled triangle have lengths of ${a} and ${b}, the length of the hypotenuse is ${Math.sqrt(
  a * a + b * b
).toFixed(2)}.`;

// Agregando resultado a la pagina web
const cadenas4 = document.createElement("h3");
cadenas4.textContent = "Cadenas 4";
const p1 = document.createElement("p");
p1.textContent = myString;
section.appendChild(cadenas4);
section.appendChild(p1);
