"use strict";
var main;
(function (main) {
    let subjects = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let verbs = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objects = ["Zaubertränke", "den Grimm", "Lupin", "Hogwards", "die Karte des Rumtreibers", "Dementoren"];
    let kMax = subjects.length;
    for (let k = 0; k < kMax; k++) {
        console.log(getVers(subjects, verbs, objects));
    }
    function getVers(subjects, verbs, objects) {
        debugger;
        let vers = stringSelector(randomInteger(0, subjects.length), subjects) + " " + stringSelector(randomInteger(0, verbs.length), verbs) + " " + stringSelector(randomInteger(0, objects.length), objects);
        return vers;
    }
    function randomInteger(max, min) {
        let rInt = Math.floor(Math.random() * (max - min)) + min;
        return rInt;
    }
    function stringSelector(int, arr) {
        let word = arr[int];
        arr.splice(int, 1);
        return word;
    }
})(main || (main = {}));
//# sourceMappingURL=main.js.map