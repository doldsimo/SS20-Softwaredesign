namespace Main {
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
    function reverseWordsAndLeters(_allArray: string[][]): string {
        let newArray: string[] = [];
        _allArray.reverse();
        for (let i: number = 1; i < _allArray.length; i++) {
            newArray.push((_allArray[i]).join(""));
        }
        return newArray.join(" ");
    }

    //2. Vertauschen der Buchstaben innerhalb eines Wortes
    function reserveLetters(_allArray: string[][]): string {
        let newArray: string[] = [];
        for (let i: number = 0; i < _allArray.length - 1; i++) {
            newArray.push(swapElementsOfArray(_allArray[i]).join(""));
        }
        return newArray.join(" ");
    }

    //1. Vertauschen des Satzes 
    function reverseWords(_allArray: string[][]): string {
        return swapElementsOfArray(_allArray[_allArray.length - 1]).join(" ");
    }

    //Umdrehen eines Arrays
    function swapElementsOfArray(_array: string[]): string[] {
        return _array.reverse();
    }
}

