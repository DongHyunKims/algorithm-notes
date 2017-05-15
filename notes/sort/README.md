## Insertion Sort / Quick Sort


### Insertion Sort
- n^2(일반적인 경우), n(모두 정렬 되어있을때)
- n^2으로 알고리즘 구현 하면 안된다.


### Quick Sort
- n log n
- 재귀로 구현 하기 때문에 많은 요소의 정렬된 배열을 정렬 하면  stack overflow 발생.
- 최악의 경우 n^2
- 3개 값을 비교하는 알고리즘 필요. 중간값의 index가 필요하기 때문에 
- **개선을 위해 3개 값을 랜덤으로 뽑고 중간값을 pivot으로 정한다. **


**코드**
javascript 예제
~~~javascript
function quickSort(arr){

debugger
if(arr.length === 0){
debugger		
return [];
}

debugger
let pivot = arr[0];
let leftArr = [];
let rightArr = [];

debugger 
for(let i = 1; i < arr.length; i++ )
{
	if(arr[i] < pivot){
    	leftArr.push(arr[i]);
	}
	else{
    	rightArr.push(arr[i]);
	}
}

debugger
return Array.prototype.concat(quickSort(leftArr),pivot,quickSort(rightArr);
}
~~~


java 예제
~~~Java
import java.util.Random;

public class MySort {
	
	public long start;
	public void start() {
		start = System.currentTimeMillis();
	}
	
	public long end() {
		return System.currentTimeMillis() - start;
	}
	
	public int[] genArray(int size, boolean is_ordered) {
		int[] arr = new int[size];
		for (int i = 0; i < arr.length; i++) {
			arr[i] = i * 2 + 1;
		}
		if (is_ordered)
			return arr;
		shuffle(arr);
		return arr;	
	}
	
	//임의의 배열을 잘 섞는 방법
	public void shuffle(int[] arr) {
		Random r = new Random();
		int temp, randomIdx;
		for (int idx = arr.length - 1; idx > 0; idx--) {
			randomIdx = r.nextInt(idx+1);
			temp = arr[randomIdx];
			arr[idx] = temp;			
		}	
	}
	
	public void insertionSort(int[] arr) {
		// TODO implement
	}
	
	//배열 print 하는 메소드
	public void print(int[] array) {
		StringBuffer sb = new StringBuffer();
		sb.append("[");
		for(int i: array) {
			sb.append(i + ", ");
		}
		sb.append("]");
	}
	
	public void qsort(int[] array) {
		// TODO implement
		_qsort(array,0,)
	}
	
	public void _qsort(int[] array, int left, int right) {
		// TODO implement

	}
	
	public int partition(){
      
	}
	
	public void swap(){
      
	}
	

	public static void main(String[] args) {
		//TODO complete codes
		int size = 100;
		MySort m = new MySort();
		int[] array = m.genArray(size, true);
		System.out.println(array);
		m.shuffle(array);
		System.out.println(array);
	}

}
~~~


**그림**
<img src="http://www.w3resource.com/w3r_images/quick-sort-part-1.png" />

**참조**
- https://www.youtube.com/watch?v=hq4dpyuX4Uw&list=PL52K_8WQO5oUuH06MLOrah4h05TZ4n38l&index=10

### Merge Sort

**설명**
- 데이터가 저장된 배열을 절반으로 나눔. (분할)
- 각각을 순환적으로 정렬. (재귀 함수로 정렬)
- 정렬된 두 개배열을 합쳐 전체를 정렬한다. (merge로 정렬)
- 재귀함수로 정렬하고 그것을 하나로 합친다. 
- 전부 쪼갠후 값들이 실제로 정렬되는 과정은 merge 에서 일어난다.
- 가장 중요한 것은 merge 하는 과정이다. 정렬된 두개의 리스트를 하나의 배열로 재 배치 하는 과정이다.
- 마지막 2개의 리스트는 이미 정렬이 되어있는 상태이다. i,j,k 를 이용한다.
- 추가 배열을 이용한다. 
- n log n
- DB 사용 100GB를 정렬 한다면 50 / 50 25 / 25 .... 쪼갤수 있는 만큼 쪼개고 disk에서 다시 merge 한다.


**코드**

**javascript1**
~~~javascript
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
~~~

**javascript2**
~~~javascript

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
  let tempIdx = 0;

  let arr1Start = 0;
  let arr1End = arr1.length-1
  let arr2Start = 0;
  let arr2End = arr2.length-1    
  
  while((arr1Start <= arr1End) && (arr2Start <= arr2End)){

    if(arr1[arr1Start] <= arr2[arr2Start]){
      temp[tempIdx] = arr1[arr1Start];
      arr1Start++;
    }else{
      temp[tempIdx] = arr2[arr2Start];
      arr2Start++;
    }

    tempIdx++;

  }

  while(arr1Start <= arr1End){
    temp[tempIdx] = arr1[arr1Start];
    arr1Start++;
    tempIdx++;
  }


  while(arr2Start <= arr2End){
    temp[tempIdx] = arr2[arr2Start];
    arr2Start++;
    tempIdx++;
  }

  console.log(temp);

}
~~~

**java**
~~~Java
public void mergeSort(int[] arr) {
	_mergeSort(arr, 0, arr.length - 1);
}
	
private void _mergeSort(int[] arr, int left, int right) {
	int middle = (left + right)/2;
	if (left < right) {
		_mergeSort(arr, left, middle);
		_mergeSort(arr, middle + 1, right);	
		merge(arr, left, middle, right);
	}
		
}
	
private void merge(int[] arr, int left, int middle, int right) {
   int[] helper = new int[arr.length];

   for (int i = left; i <=right; i++) //왼쪽 부터 오른쪽 까지만 복사 
      helper[i] = arr[i];


    int helperLeft = left;
    int helperRight = middle+1
    int current = left;  

    while((helperLeft <= middle) && (helperRight <= right)){

      if(helper[helperLeft] <= helper[helperRight]){
        arr[current] = arr1[helperLeft];
        helperLeft++;
      }else{
        arr[current] = arr1[helperRight];
        helperRight++;
      }

      current++;

    }

  int remain = middle - helperLeft; //오른 쪽은 그대로 놔두면 된다. 원본 데이터를 바꾸기 때문에!!

  for(int i = 0; i < remain; i++){
    arr[current + i] = helper[helperLeft + i];
  }
		
}
~~~


**그림**
<img src="http://www.personal.kent.edu/~rmuhamma/Algorithms/MyAlgorithms/Sorting/Gifs/mergeSort.gif" />


**참조** 
- http://www.stoimen.com/blog/2010/07/02/friday-algorithms-javascript-merge-sort/
- https://www.youtube.com/watch?v=2YvFRAC8UTM&list=PL52K_8WQO5oUuH06MLOrah4h05TZ4n38l&index=9

