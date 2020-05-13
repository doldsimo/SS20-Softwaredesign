// Namespace PascalCase
namespace main {
    let subjects: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let verbs: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objects: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwards", "die Karte des Rumtreibers", "Dementoren"];
    
    let kMax: number = subjects.length;

    for (let k = 0; k < kMax; k++) {
        console.log(getVers(subjects, verbs, objects));
    }
    
    // Übergabewert im underscore (z.B: _name)
    function getVers(subjects: string[], verbs: string[], objects: string[]): string {
        let vers: string = stringSelector(randomInteger(0, subjects.length), subjects)+ " " + stringSelector(randomInteger(0, verbs.length), verbs) + " " +stringSelector(randomInteger(0, objects.length), objects)

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

