namespace Main {
    let subjects: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let verbs: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objects: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwards", "die Karte des Rumtreibers", "Dementoren"];

    let kMax: number = subjects.length;

    for (let k = 0; k < kMax; k++) {
        console.log(getVers(subjects, verbs, objects));
    }

    function getVers(_subjects: string[], _verbs: string[], _objects: string[]): string {
        let vers: string = stringSelector(randomInteger(0, _subjects.length), _subjects) + " " + stringSelector(randomInteger(0, _verbs.length), _verbs) + " " + stringSelector(randomInteger(0, _objects.length), _objects)

        return vers;
    }

    function randomInteger(max: number, min: number): number {
        let rInt: number = Math.floor(Math.random() * (max - min)) + min;
        return rInt;
    }


    function stringSelector(int: number, arr: string[]): string {
        let word: string = arr[int];
        arr.splice(int, 1);
        return word;
    }
}

