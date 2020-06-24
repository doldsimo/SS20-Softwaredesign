namespace Co{
    export class MyContainer<T extends Personen>{
        private myObjects: T[];

        constructor(_myObjects: T[]) {
            this.myObjects = _myObjects;
        }

        public talk() {
            for (let element of this.myObjects) {
                element.sayHello();
            }
        }

    }

}