console.log(document.title);

//*Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
let firstTitle = document.querySelector("#gen-1");
firstTitle.innerHTML = "Generasion 1 Pokimon";

//*Cambia el color de fondo de la primera generación de Pokimon.
const firstCards = document.querySelector(".infocard-list").querySelectorAll("div");
for (let i = 0; i < firstCards.length; i++) {
    firstCards[i].style.backgroundColor = "lightgray"
    
} 
//*Imprime por consola la URL de la página.
const url = document.querySelector("header>div>a").href;
console.log(url);
//*Imprime por consola el dominio de la página.
console.log(document.domain);
//*Imprime todos los nodos de imagen.
const images = document.querySelectorAll("img");
console.log(images);
//*Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
//! for (let i = 0; i < images.length; i++) {
   //! images[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
    
//!} 
//?Premium:

//Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying

const flyers = document.querySelectorAll(".infocard-lg-data.text-muted > small:nth-child(5) > a.itype.flying");
for (let i = 0; i < flyers.length; i++) {
    flyers[i].style.backgroundColor = "lightgreen";
    
}


