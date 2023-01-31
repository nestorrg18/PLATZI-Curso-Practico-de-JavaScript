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
