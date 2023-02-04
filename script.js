// explicacion de los selectores : https://static.platzi.com/media/user_upload/img-js-5db4ca73-3902-49a0-9c0e-ffc8f750f995.jpg
const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafito = document.querySelector(".parrafito");
const pid = document.querySelector("#pid");
const pall = document.querySelectorAll("p")
const input = document.querySelector("input");

console.log(h1, input.value);
//Console.log para obtener la prodiedades de los elementos html
console.log({
    h1,
    p,
    parrafito,
    pid,
    pall,
    input
});
/// 11. escribiendo HTML desde JS

h1.innerHTML = "NO <br> Cool" // este no es recomendable por temas de seguridad
h1.innerText = "Más cool"
// obteniendo y modificando atributos
let atributo = h1.getAttribute("pantalla")
console.log(h1.getAttribute("class"));
h1.setAttribute("class", "rojo")
console.log(atributo);
// para clases
h1.classList.add("azul")
h1.classList.remove("rojo")
// h1.classList.toggle("rojo") || util para eventos
// h1.classList.contains("rojo") || devuelve true o false
input.value = "456"
// creando y agregando html desde 0
imagen = document.createElement("img")
imagen.setAttribute("src", "https://static.platzi.com/media/achievements/practico-javascript_badge-fb533fa5-73c8-4f75-9d81-0294d9013ab5.png")
console.log(imagen);
pid.innerText = ""
pid.appendChild(imagen)
//pid.replaceWith(imagen); tambien hacer esto y olvidarte de las 2 lineas anteriores


/// 12. Eventos en JS

const input1 = document.querySelector("#calculo1")
const input2 = document.querySelector("#calculo2")
const btn = document.querySelector("#btnCalcular")
const pResult = document.querySelector("#Result")

function btnOnClick() {
    const suma =+input1.value + +input2.value; //asi los suma (Unary plus+)
    const concatenacion =input1.value + input2.value; //asi los concatena

    pResult.innerHTML = "Suma: "+suma+"<br>Concatenación: "+concatenacion
}