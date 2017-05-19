

(function(){

  function main(){

    let bts = new BinarySearchTree();
    bts.insert(5);
    bts.insert(3);
    bts.insert(1);
    bts.insert(2);
    bts.insert(8);
    bts.insert(9);
    console.log(bts);

    //preorder(bts.root);


    inorder(bts.root);

    // console.log(findNode(bts.root,9));
    // console.log(deleteNode(bts.root,9));
    // console.log(findNode(bts.root,9));


  }

  function Node(val){
    this.left = null;
    this.right = null;
    this.value = val;
  }


  function BinarySearchTree(){
    this.root = null;
  }

  BinarySearchTree.prototype.insert = function (value){
    let root = this.root;


    //root가 없으면
    if(!root){
      this.root = new Node(value);
      return;
   }

   let parentNode = root;

  let newNode = new Node(value);
   while(parentNode){
       //새로 들어온 값이 현재 노드의 값보다 작으면 왼쪽.

       if(parentNode.value > value){
          if(parentNode.left){
            parentNode = parentNode.left;
          }else{
            return parentNode.left = newNode;
          }
       }else if(parentNode.value < value){
         if(parentNode.right){
           parentNode = parentNode.right;
         }else{
           return parentNode.right = newNode;
         }
       }
       else{
         parentNode.value = value;
         return parentNode;
       }
   }

  }

  function visit(node){
      console.log(node.value);
  }

  //전위순회 나 -> 왼쪽 -> 오른쪽
  function preorder(node){
    if(node !=null){
      visit(node);
      preorder(node.left);
      preorder(node.right);

    }
  }
  // 중위 순회 왼쪽 나 오른쪽
  function inorder(node){
    if(node !=null){
      inorder(node.left);
      visit(node);
      inorder(node.right);

    }
  }

  //후위순회 왼쪽 오른쪽 나
  function postorder(node){
    if(node !=null){
      postorder(node.left);
      postorder(node.right);
      visit(node);
    }
  }






  main();



})()
