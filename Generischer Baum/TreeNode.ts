namespace Tree {
    export class TreeNode<T> {
        private value: T;
        private parent: TreeNode<T>;
        private children: TreeNode<T>[];

        public constructor(_value: T) {
            this.value = _value;
            this.parent = null;
            this.children = [];
        }

        public appendChild(_child: TreeNode<T>): void {
            _child.parent = this;
            this.children.push(_child);
        }

        public removeChild(_child: TreeNode<T>): void {
            for (let i: number = 0; i < this.children.length; i++) {
                if (this.children[i] === _child)
                    this.children.splice(i, 1);
            }
        }
        public printTree(_depth: number = 0): String {
            let treeAsString: String = this.value + "\n";
            let depthAsString: String = "";

            for (let i: number = 0; i < _depth; i++)
                depthAsString += "*";

            treeAsString = "" + depthAsString + treeAsString;
            _depth++;

            for (let i: number = 0; i < this.children.length; i++) {
                treeAsString += "" + this.children[i].printTree(_depth);
            }
            return treeAsString;
        }



    }

}