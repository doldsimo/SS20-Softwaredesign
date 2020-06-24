"use strict";
var Co;
(function (Co) {
    class MyContainer {
        constructor(_myObjects) {
            this.myObjects = _myObjects;
        }
        talk() {
            for (let element of this.myObjects) {
                element.sayHello();
            }
        }
    }
    Co.MyContainer = MyContainer;
})(Co || (Co = {}));
//# sourceMappingURL=MyContainer.js.map