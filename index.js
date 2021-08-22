


function inOrder(node){
    if(node.left){
        inOrder(node.left)
    }
    console.log(node.data)
    if(node.right){
        inOrder(node.right)
    }
}

function findOrAdd(currentNode, node){

    

    if(node.data < currentNode.data){
        currentNode.left ? findOrAdd(currentNode.left, node) : currentNode.left = node;
    }
    
    if(node.data > currentNode.data){
        currentNode.right ? findOrAdd(currentNode.right, node) : currentNode.right = node;
    }
    return true
}

function max(node){
    let maxNode = node.right ? max(node.right) : node
  return maxNode
}

function min(node){
    let minNode = node.left ? min(node.left) : node
    return minNode;
}
