import { printToDom } from "../helpers/util.js";
import {detailsBuilder} from "./detail.js";

let characters =[
];

const setCharacters = (newArray) => {
    characters = newArray;
};

const characterClick = (e) => {
    const characterId = e.target.closest(".character-card").id;
    const currentCharacter = characters.find(x => characterId === x.id);
    detailsBuilder(currentCharacter);
    // console.log(currentCharacter)
}


const createEvents = () => {
const characterCards = document.getElementsByClassName("character-card");
for(let i=0; i<characterCards.length; i++){
    characterCards[i].addEventListener("click", characterClick);
}

}

const charactersBuilder = () => {
    let domString = "";
    characters.forEach((character) => {
        domString += `<div class="col-2 character-card" id="${character.id}">`;
        domString += `<div class="card">`;
        domString += `<img class="card-img-top" src="${character.imageURL}" alt="${character.name}">`;
        domString += `<div class="card-body">`;
        domString += `<h5 class="card-title">${character.name}</h5>`;
        domString += `</div>`;
        domString += `</div>`;
        domString += `</div>`;
    });
    printToDom(domString);
    createEvents();
};

export {charactersBuilder, setCharacters}