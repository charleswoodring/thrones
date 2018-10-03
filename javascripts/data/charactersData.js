import {setCharacters, charactersBuilder, getCharacterz} from "../components/characters.js";

// can't use arrow function when using "this"
function executeThisCodeAfterFileLoaded () {
    // console.log("request", this);
    // console.log("request", this.responseText);
    // console.log("request", data.characters);
    const data = JSON.parse(this.responseText);
    setCharacters(data.characters);
    charactersBuilder(getCharacterz());
}

function executeThisCodeIfXhrFails () {
    console.log("broke");
}

const getCharacters = () => {
let myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeIfXhrFails);
myRequest.open("GET", "./db/character.json");
myRequest.send();
};

export {getCharacters}