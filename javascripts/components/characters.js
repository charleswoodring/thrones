import { printToDom } from "../helpers/util.js";

const characters =[
    {name: "John Snow", house: "Stark", imageURL: "https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"},
    {name: "Daenerys Targaryen", house: "Targaryen", imageURL: "https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"},
    {name: "Cersei Lannister", house: "Lannister", imageURL: "https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"},
    {name: "Tyrion Lannister", house: "Lannister", imageURL: "https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"}

];

const charactersBuilder = () => {
    let domString = "";
    characters.forEach((character) => {
        domString += `<h1>${character.name}</h1>`;
    });
    printToDom(domString);
};

export {charactersBuilder}