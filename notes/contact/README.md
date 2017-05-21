##1. 소수 판별
~~~javascript
function isPrime(n){
    if(n === 1 || n === 2){
      return true;
    }
    
    if(n % 2 === 0){
      return false;
    }
    
    if(check.length > 0){
      return false;
    }
    //홀수만 확인 하면 되고 , Math.sqrt(n) 만큼 만 확인하면 된다.
    for(let i = 3; i*i <= n; i+=2){
        if(n % i === 0){
            return false;
        }
    }
    return true
}
~~~



## 2. 최대 공약수

- a의 약수 이면서 b의 약수인 수 중 최대값이 바로 최대공약수

java
~~~Java


int get_gcd(int a,int b)
{
    int max_div = 1;      //가장 큰 공약수를 저장할 변수
    int range = min(a, b);//두 수 중 작은 값 까지만 조사
    for(int i=1; i<=range; i++)
    { //i부터 공약수를 찾는다.
        if( a % i == 0 && b % i == 0)
        { // 두 수 모두의 약수일 경우
            max_div = i; //갱신 (i는 점점 증가하므로)
        }
    }
    return max_div;
}
~~~

javascript
~~~javascript
//추후 작성
~~~

## 3. 최소 공배수
- 최소공배수는 최대공약수와는 반대로, 두 정수가 공통적으로 가지는 배수 중 가장 작은 값

java
~~~Java
int get_gcd(int a,int b)
{
    int max_div = 1;      //가장 큰 공약수를 저장할 변수
    int range = min(a, b);//두 수 중 작은 값 까지만 조사
    for(int i=range; i>=1; i--)
    { //i부터 공약수를 찾는다.
        if( a % i == 0 && b % i == 0)
        { // 두 수 모두의 약수일 경우
            max_div = i;  //저장 후 탈출
            break; //i는 점점 감소하므로, 더이상 볼 필요가 없다.
        }
    }
    return max_div;
}
~~~

javascript
~~~Javascript
//추후작성
~~~


## 4. 유클리드 호제법
-  유클리드 호제법 알고리즘을 사용하면 최대 공약수를 빠르게 계산
-  https://ko.wikipedia.org/wiki/%EC%9C%A0%ED%81%B4%EB%A6%AC%EB%93%9C_%ED%98%B8%EC%A0%9C%EB%B2%95

java
~~~Java
int gcd(int a,int b)
{ //반복문을 이용한 방법
    int mod = a % b;
    while(mod > 0)
    {
        a = b;
        b = mod;
        mod = a % b;
    }
    return b;
}
 
int gcd2(int a,int b)
{ //재귀 함수형
    if( a % b == 0 )
        return b;
    else
        return gcd2(b, a % b);
}
 
int gcd3(int a, int b)
{ //삼항 연산자 축약형 
    return (a % b == 0 ? b : gcd3(b,a%b));
}
~~~


**참고** 
- https://opentutorials.org/module/1544/9533
