"use strict";
var main;
(function (main) {
    //Eingabe des Strings
    let sentence = prompt("Geben Sie einen Satz ein", "Die Maus frisst Käse");
    //Array welches die Woerter des Satzes enthaelt
    let wordsArray = sentence.split(" ");
    //Array welches die Buchstaben enthaelt
    let oneWordArray = [];
    let letterArray = [];
    for (let i = 0; i < wordsArray.length; i++) {
        oneWordArray = wordsArray[i].split("");
        letterArray.push(oneWordArray);
    }
    //Fuege Array hinzu
    letterArray.push(wordsArray);
    console.log(reverseWords(letterArray));
    console.log(reserveLetters(letterArray));
    console.log(reverseWordsAndLeters(letterArray));
    //3. Beides vertauschen
    function reverseWordsAndLeters(allArray) {
        let newArray = [];
        allArray.reverse();
        for (let i = 1; i < allArray.length; i++) {
            newArray.push((allArray[i]).join(""));
        }
        return newArray.join(" ");
    }
    //2. Vertauschen der Buchstaben innerhalb eines Wortes
    function reserveLetters(allArray) {
        let newArray = [];
        for (let i = 0; i < allArray.length - 1; i++) {
            newArray.push(swapElementsOfArray(allArray[i]).join(""));
        }
        return newArray.join(" ");
    }
    //1. Vertauschen des Satzes 
    function reverseWords(allArray) {
        return swapElementsOfArray(allArray[allArray.length - 1]).join(" ");
    }
    //Umdrehen eines Arrays
    function swapElementsOfArray(array) {
        return array.reverse();
    }
})(main || (main = {}));
//# sourceMappingURL=main.js.map