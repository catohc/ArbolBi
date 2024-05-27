import Node  from "./Node.js"

class BST {
    #root

    constructor() {
        this.#root = null
    }

    add(value) {
        if (this.#root == null){
            this.#root = new Node(value)
            if (this.#root != null) return true
        }
        else
            return this.insertNode(this.#root, value)
    }

    insertNode(node, value){
        if (value.matricula < node.value.matricula){
            if (node.left == null){
                node.left = new Node(value)
                if (node.left != null) return true
            }
            else
                return this.insertNode(node.left, value)
        } else {
            if (node.right == null){
                node.right = new Node(value)
                if (node.right != null) return true
            }
            else
                return this.insertNode(node.right, value)
        }
    }
    search(matricula){
        return this.searchNode(this.#root,matricula)
    }
    searchNode(node,matricula){
        if (node == null ||node.value.matricula === matricula) {
            return node;
        }
        else if (matricula < node.value.left) {
            this.searchNode(node.left,matricula)
        }
        else return this.searchNode(node.right,matricula)
    }
    preOrderTraversal(callback) {
        this.preOrder(this.#root, callback);
    }

    preOrder(node, callback) {
        if (node != null) {
            callback(node.value);
            this.preOrder(node.left, callback);
            this.preOrder(node.right, callback);
        }
    }

    wander() {
        let result = [];
        this.preOrderTraversal((value) => {
            result.push(value);
        });
        return result;
    }
    /*wander(){
        this.marchTree(this.#root, result);
    }
    marchTree(node){
        if (node != null) {
            alert(node.value)
            this.marchTree(node.left, result); 
            this.marchTree(node.right, result); 
        }
    }
    */
}

export default BST