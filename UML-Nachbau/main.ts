// Namespace mit PascalCase
namespace main {
    //Eingabe des Strings
    let sentence: string = prompt("Geben Sie einen Satz ein", "Die Maus frisst Käse");

    //Array welches die Woerter des Satzes enthaelt
    let wordsArray: string[] = sentence.split(" ");


    //Array welches die Buchstaben enthaelt
    let oneWordArray: string[] = [];
    let letterArray: string[][] = [];
    for (let i: number = 0; i < wordsArray.length; i++) {
        oneWordArray = wordsArray[i].split("");
        letterArray.push(oneWordArray);
    }
    //Fuege Array hinzu
    letterArray.push(wordsArray);

    console.log(reverseWords(letterArray));
    console.log(reserveLetters(letterArray));
    console.log(reverseWordsAndLeters(letterArray));

    //3. Beides vertauschen
    // underscore beim Parameter
    function reverseWordsAndLeters(allArray: string[][]): string {
        let newArray: string[] = [];
        allArray.reverse();
        for (let i: number = 1; i < allArray.length; i++) {
            newArray.push((allArray[i]).join(""));
        }
        return newArray.join(" ");
    }

    //2. Vertauschen der Buchstaben innerhalb eines Wortes
    function reserveLetters(allArray: string[][]): string {
        let newArray: string[] = [];
        for (let i: number = 0; i < allArray.length - 1; i++) {
            newArray.push(swapElementsOfArray(allArray[i]).join(""));
        }
        return newArray.join(" ");
    }

    //1. Vertauschen des Satzes 
    function reverseWords(allArray: string[][]): string {
        return swapElementsOfArray(allArray[allArray.length - 1]).join(" ");
    }

    //Umdrehen eines Arrays
    function swapElementsOfArray(array: string[]): string[] {
        return array.reverse();
    }
}

