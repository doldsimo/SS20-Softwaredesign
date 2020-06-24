"use strict";
var Co;
(function (Co) {
    let testPeter = [new Co.Peter()];
    let testFritz = [new Co.Franz()];
    let testContainer = new Co.MyContainer(testPeter);
    let testContainer2 = new Co.MyContainer(testFritz);
    testContainer.talk();
    testContainer2.talk();
})(Co || (Co = {}));
//# sourceMappingURL=main.js.map