import {setCharacters, charactersBuilder} from "../components/characters.js";

// can't use arrow function when using "this"
function executeThisCodeAfterFileLoaded () {
    // console.log("request", this);
    // console.log("request", this.responseText);
    // console.log("request", data.characters);
    const data = JSON.parse(this.responseText);
    setCharacters(data.characters);
    charactersBuilder();
}

function executeThisCodeIfXhrFails () {
    console.log("broke");
}

const getCharacters = () => {
// console.log("inside getCharacters");
let myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeIfXhrFails);
myRequest.open("GET", "./db/character.json");
myRequest.send();
};

export {getCharacters}