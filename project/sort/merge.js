


  function mergeSort(arr){

    let length = arr.length;
    if(length < 2){
      return arr;
    }


    let mid = parseInt( length / 2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid,length);
    return merge(mergeSort(left),mergeSort(right));

  }




function merge(arr1, arr2){
  let temp = [];
  while(arr1.length && arr2.length){
    if(arr1[0] <= arr2[0]){
      temp.push(arr1.shift());
    }else{
      temp.push(arr2.shift());
    }
  }

  if(arr1.length){
    temp = temp.concat(arr1);
  }


  if(arr2.length){
    temp = temp.concat(arr2);
  }


  return temp;
}
