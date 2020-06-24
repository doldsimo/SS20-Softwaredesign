"use strict";
var Tree;
(function (Tree) {
    class TreeNode {
        constructor(_value) {
            this.value = _value;
            this.parent = null;
            this.children = [];
        }
        appendChild(_child) {
            _child.parent = this;
            this.children.push(_child);
        }
        removeChild(_child) {
            for (let i = 0; i < this.children.length; i++) {
                if (this.children[i] === _child)
                    this.children.splice(i, 1);
            }
        }
        printTree(_depth = 0) {
            let treeAsString = this.value + "\n";
            let depthAsString = "";
            for (let i = 0; i < _depth; i++)
                depthAsString += "*";
            treeAsString = "" + depthAsString + treeAsString;
            _depth++;
            for (let i = 0; i < this.children.length; i++) {
                treeAsString += "" + this.children[i].printTree(_depth);
            }
            return treeAsString;
        }
    }
    Tree.TreeNode = TreeNode;
})(Tree || (Tree = {}));
//# sourceMappingURL=TreeNode.js.map