

(function(){

  function main(){

    let bts = new BinarySearchTree();
    bts.push(6);
    bts.push(4);
    bts.push(5);
    bts.push(8);
    bts.push(9);
    bts.push(10);
    bts.push(11);
    console.log(bts);





    console.log(findNode(bts.root,9));

    console.log(deleteNode(bts.root,9));
    console.log(findNode(bts.root,9));


  }

  function Node(val){
    this.left = null;
    this.right = null;
    this.value = val;
  }


  function BinarySearchTree(){
    this.root = null;
  }

  BinarySearchTree.prototype.push = function (val){
    let root = this.root;


    //root가 없으면
    if(!root){
      this.root = new Node(val);
      return;
   }

   let currentNode = root;
   let newNode = new Node(val);

   while(currentNode){
       //새로 들어온 값이 현재 노드의 값보다 작으면 왼쪽.
       if(val < currentNode.value){
        if(!currentNode.left){
         currentNode.left = newNode;
         break;
         }else{
         currentNode = currentNode.left;
        }
       //새로 들어온 값이 현재 노드의 값보다 크면 오른쪽.
       }else{
         if(!currentNode.right){
          currentNode.right = newNode;
          break;
        }else{
          currentNode = currentNode.right;
        }
       }
   }
  }

  function findNode(bstNode, key){
      if(bstNode === null){
        return "존재하지 않는다.";
      }

      if(bstNode.value === key){
        return bstNode.value;
      }


      if(bstNode.value > key){
          return findNode(bstNode.left, key);
      }else{
          return findNode(bstNode.right, key);
      }
  }



  function deleteNode(bstNode, key){

    if(bstNode === null){
      return "존재하지 않는다.";
    }

    if(bstNode.value === key){

      bstNode.value = null;
      return "삭제완료";
    }


    if(bstNode.value > key){
        return deleteNode(bstNode.left, key);
    }else{
        return deleteNode(bstNode.right, key);
    }
  }

  main();



})()
