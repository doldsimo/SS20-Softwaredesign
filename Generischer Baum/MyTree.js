"use strict";
var Tree;
(function (Tree) {
    class MyTree {
        createNode(_value) {
            return new Tree.TreeNode(_value);
        }
    }
    Tree.MyTree = MyTree;
})(Tree || (Tree = {}));
//# sourceMappingURL=MyTree.js.map