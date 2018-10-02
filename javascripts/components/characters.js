import { printToDom } from "../helpers/util.js";
import {detailsBuilder} from "./detail.js";

const characters =[
    {id:"character1", name: "Jon Snow", house: "Stark", imageURL: "https://vignette.wikia.nocookie.net/gameofthrones/images/a/a5/Profile-JonSnow-707.png/revision/latest?cb=20170828030553"},
    {id:"character2", name: "Daenerys Targaryen", house: "Targaryen", imageURL: "https://cdn1.ntv.com.tr/gorsel/yasam/emilia-clarke-daenerys-targaryen-imajini-degistirdi/,dJTaLetJRk6bPVKhZm3xrA.jpg?w=960&mode=max&v=20170920100213652"},
    {id:"character3", name: "Cersei Lannister", house: "Lannister", imageURL: "https://upload.wikimedia.org/wikipedia/en/9/94/Cersei_Lannister-Lena_Headey.jpg"},
    {id:"character4", name: "Tyrion Lannister", house: "Lannister", imageURL: "https://upload.wikimedia.org/wikipedia/en/5/50/Tyrion_Lannister-Peter_Dinklage.jpg"}

];

const characterClick = (e) => {
    const characterId = e.target.closest(".character-card").id;
    const currentCharacter = characters.find(x => characterId === x.id);
    detailsBuilder(currentCharacter);
    console.log(currentCharacter)
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

export {charactersBuilder}