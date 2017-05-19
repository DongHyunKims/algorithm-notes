## TREE

1. TREE
- 계층 적인 구조를 표현.
- 조직도, 가계도
- 디렉토리와 서브디렉토리 구조
- 트리는 `node` 와  `node`를 연결하는 link로 구성됨.
- 부모가 없는 node는 `root` , 자식이 없는 node는 `leaf`
- parent-child(부모-자식) 관계, ancestor-descendant(조상-자손) 관계
- 레벨 : 트리의 계층.
- 높이 : 서로다른 레벨의 개수.
- Node 가 `N`개라면 링크는 `N-1`개이다.
- 트리는 루트에서 어떤 노드로 가는 경로는 유일하다.


2. 이진TREE
- 각 노드가 최대 2명의 child를 가지는 것. (자식 개수 - 0,1,2)
- 각 노드는 자신이 부모의 왼쪽인지, 오른쪽인지 지정.
- full binary tree : 모든 레벨에서 node가 전부 차있는 TREE, `높이가 h개 라면 node의 개수는 2^h-1개`
- compelete binary tree : 맨 마지막 중 오른쪽에서만 몇개 비어있는 TREE

**그림**

<img src="http://soen.kr/lecture/ccpp/cpp2/19-5-2.files/image004.gif" />

3. BST (Binary Search TREE)
- 이진트리.
- 각 노드에 하나의 키를 저장.
- 왼쪽 sub tree는 v 보다 작거나 같다. 오른쪽 sub tree는 v보다 크거나 같다.

**그림**

<img src="http://www.algolist.net/img/bst-remove-case-2-1.png" />


**코드1**
~~~Javascript


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

})();
~~~

**코드2**
~~~


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
    //postorder(bts.root);
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
  // 중위 순회 왼쪽 -> 나 -> 오른쪽
  function inorder(node){
    if(node !=null){
      inorder(node.left);
      visit(node);
      inorder(node.right);

    }
  }

  //후위순회 왼쪽 -> 오른쪽 -> 나
  function postorder(node){
    if(node !=null){
      postorder(node.left);
      postorder(node.right);
      visit(node);
    }
  }

  main();
})()

~~~


**참조**

- https://khan4019.github.io/front-end-Interview-Questions/bst.html









