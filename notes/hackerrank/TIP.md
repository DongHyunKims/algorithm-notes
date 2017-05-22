## TIP

1. 중복된 숫자중 하나는 남기고 unique 하게 사용.
~~~
result.filter((val,i,arr)=>{
     return arr.indexOf(val)=== i
 });
~~~

2. unique한 원소만 남김.
~~~
result.filter((val,i,arr)=>{
     return arr.indexOf(val)=== arr.lastIndexOf(val);
 });
~~~