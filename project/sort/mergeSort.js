  (function(){

    function main(){
        let arr = [6,4,3,1,10,9,8];
        console.log(mergeSort(arr));
    }

    function mergeSort(arr){

      if(arr.length < 2){
        return arr
      }

      let mid = parseInt(arr.length / 2);
      let left = arr.slice(0,mid);
      let right = arr.slice(mid,arr.length);


      return merge(mergeSort(left),mergeSort(right));
    }

    function merge(left, right){
      let temp = [];

      while(left.length && right.length){
        if(left[0] <= right[0]){
            temp.push(left.shift());
        }else{
            temp.push(right.shift());
        }
      }


      //남아 있는 배열의 내용을 순서대로 넣는다.
      if(left.length){
        temp = temp.concat(left);
      }

      if(right.length){
        temp = temp.concat(right);
      }


      return temp;
    }


  main();




  })();
