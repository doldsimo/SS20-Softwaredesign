namespace Tree {
    export class MyTree<T>{
        
        public createNode(_value: T): TreeNode<T> {
            return new TreeNode<T>(_value);
        }

    }

}