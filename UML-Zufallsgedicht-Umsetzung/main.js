"use strict";
var Main;
(function (Main) {
    let subjects = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let verbs = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objects = ["Zaubertränke", "den Grimm", "Lupin", "Hogwards", "die Karte des Rumtreibers", "Dementoren"];
    let kMax = subjects.length;
    for (let k = 0; k < kMax; k++) {
        console.log(getVers(subjects, verbs, objects));
    }
    function getVers(_subjects, _verbs, _objects) {
        let vers = stringSelector(randomInteger(0, _subjects.length), _subjects) + " " + stringSelector(randomInteger(0, _verbs.length), _verbs) + " " + stringSelector(randomInteger(0, _objects.length), _objects);
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
})(Main || (Main = {}));
//# sourceMappingURL=main.js.map