# let, const 와 블록레벨 스코프

# let, const 와 블록레벨 스코프

JavaScript에서 변수를 선언할 때 var 키워드를 사용했는데, 이는 함수 레벨 스코프를 가지고 있었습니다.

하지만 ES6에서 let과 const 키워드가 도입되면서 블록 레벨 스코프를 가지게 되었습니다.

let과 const는 변수를 선언할 때 사용하는 키워드입니다.

let은 재할당이 가능한 변수, 

const는 재할당이 불가능한 상수를 선언할 때 사용합니다.

블록 레벨 스코프는 중괄호({})로 둘러싸인 범위를 가지는 스코프를 의미합니다. 

즉, 해당 중괄호 내에서 선언된 변수는 해당 중괄호 내에서만 유효합니다.

아래는 let과 const, 그리고 블록 레벨 스코프에 대한 예시입니다.

```js
function example() {
  var a = 1;
  let b = 2;
  const c = 3;

  if (true) {
    var a = 4; // 함수 레벨 스코프를 가지기 때문에 a 값이 바뀜
    let b = 5; // 블록 레벨 스코프를 가지기 때문에 새로운 변수가 생성됨
    const c = 6; // 블록 레벨 스코프를 가지기 때문에 새로운 변수가 생성됨
    console.log(a, b, c); // 4 5 6
  }

  console.log(a, b, c); // 4 2 3
}

example();

```

위 예시에서 함수 example 내부에서 var, let, const로 변수를 선언하고,

 if문 내부에서 이를 다시 선언하였습니다. 

이때 var는 함수 레벨 스코프를 가지기 때문에 값이 바뀌었지만, 

let과 const는 블록 레벨 스코프를 가지기 때문에 새로운 변수가 생성되었습니다. 

따라서 if문 내부에서의 console.log에서는 새로운 변수 b와 c의 값이 출력되었으며,

if문 외부에서의 console.log에서는 값이 변경된 변수 a와 이전에 정의된 변수 b와 c의 값이 출력되었습니다.

이와 같이 let과 const는 블록 레벨 스코프를 가지기 때문에 

코드의 가독성을 높이고 예상치 못한 오류를 방지하는데 도움이 됩니다.

var 를 이용하면 재선언이 가능하지만, let과 const는 재선언이 안된다.

```js
var foo = 123;

var foo = 456;

foo

let bar = 123;

// let bar = 456;   //  ReferenceEroor 

// bar = 456;  // 재할당은 가능.

console.log(bar)
```

let과 const는 var처럼 동작을 안하기 때문에

```js
let foo = 1;

{
    console.log(foo);  // Cannot access 'foo' before initialization
    let foo = 2;
    let bar = 3;
    console.log(foo); // 2
}

console.log(foo); // 1
console.log(bar); // ReferenceError: bar is not defined
```

위 코드에서 중괄호 내부에서 let으로 선언된 foo는 중괄호 내부에서만 유효합니다.

하지만 중괄호 내부의 첫번째 console.log에서 foo를 호출하면 "Cannot access 'foo' before initialization" 라는 에러가 발생합니다.

이는 let으로 선언된 변수는 호이스팅(hoisting)이 발생하기 때문입니다.

호이스팅이란, 변수를 선언하기 전에 호출해도 선언부가 최상단으로 끌어올려져서

에러가 발생하지 않고 undefined 값을 반환하는 것을 의미합니다.


하지만 let으로 선언된 변수는 호이스팅이 되지만 **초기화가 되지 않아서**

호이스팅된 변수를 호출하면 Cannot access 'foo' before initialization 에러가 발생합니다.


두번째 console.log에서 foo를 호출하면, 해당 중괄호 내부에서 초기화가 되어서 2가 출력됩니다.


세번째 console.log에서는 중괄호 밖에서 foo를 호출하고 있는데,

이때는 중괄호 내부에서의 foo가 아닌 중괄호 외부에서 선언된 foo가 호출되기 때문에 1이 출력됩니다.


마지막으로 bar는 let으로 선언되어 있지만, 중괄호 내부에서만 선언되었기 때문에

중괄호 밖에서 호출하면 ReferenceError가 발생합니다.





let으로 선언된 변수는 호이스팅이 되지만, 

초기화되지 않은 상태로 호출하면 

TDZ(Temporal Dead Zone)에 걸리게 됩니다.


### **TDZ(Temporal Dead Zone)란** 변수가 선언되기 전에 접근하려 할 때 발생하는 현상입니다.

let과 const 변수는 호이스팅이 발생하지만, 초기화되지 않은 상태에서 호출하면 TDZ에 걸리게 됩니다.

아래의 예시를 통해 이를 자세히 살펴보겠습니다.


```js
console.log(a); // ReferenceError: a is not defined
console.log(b); // ReferenceError: b is not defined

let a = 1;
const b = 2;

```


위 코드에서는 let과 const로 변수 a와 b를 선언하고 있습니다.

하지만 console.log에서 a와 b를 호출하고 있기 때문에 ReferenceError가 발생합니다.

이는 변수 a와 b가 아직 초기화되지 않은 상태에서 호출하려고 했기 때문입니다.


변수 a와 b는 호이스팅되어 선언이 되었지만, 아직 초기화되지 않은 상태로 호출하면 TDZ에 걸리게 됩니다.

다음 예시를 통해 TDZ에 대한 이해를 더욱 높여보겠습니다.


```js
let foo = 1;

{
    console.log(foo);  // Cannot access 'foo' before initialization
    let foo = 2;
    console.log(foo); // 2
}

console.log(foo); // 1

```

위 코드에서 중괄호 내부에서 let으로 선언된 foo는 중괄호 내부에서만 유효합니다.

하지만 중괄호 내부의 첫번째 console.log에서 foo를 호출하면 "Cannot access 'foo' before initialization" 라는 에러가 발생합니다.

이는 let으로 선언된 변수는 호이스팅이 발생하기 때문입니다.

호이스팅이란, 변수를 선언하기 전에 호출해도 선언부가 최상단으로 끌어올려져서

에러가 발생하지 않고 undefined 값을 반환하는 것을 의미합니다.

하지만 let으로 선언된 변수는 호이스팅이 되지만 **초기화가 되지 않아서**

호이스팅된 변수를 호출하면 Cannot access 'foo' before initialization 에러가 발생합니다.

이후, 해당 변수가 선언된 위치에 도달하면 초기화가 이루어지고 정상적으로 사용할 수 있습니다.

중괄호 내부에서 let으로 변수를 선언하면 호이스팅이 되지만, 해당 변수가 선언된 위치까지 코드 실행이 진행되지 않아 초기화되기 전에 호출하면

"Cannot access 'foo' before initialization" 에러가 발생합니다.

이후, 해당 변수가 선언된 위치에 도달하면 초기화가 이루어지고 정상적으로 사용할 수 있습니다.

위 예시에서는 중괄호 내부에서 let으로 선언된 foo는 중괄호 내부에서만 유효합니다.

두번째 console.log에서 foo를 호출하면, 해당 중괄호 내부에서 초기화가 되어서 2가 출력됩니다.

세번째 console.log에서는 중괄호 밖에서 foo를 호출하고 있는데,

이때는 중괄호 내부에서의 foo가 아닌 중괄호 외부에서 선언된 foo가 호출되기 때문에 1이 출력됩니다.

이와 같이 let으로 변수를 선언하면 호이스팅이 되지만,

초기화되지 않은 상태로 호출하면

TDZ(Temporal Dead Zone)에 걸리게 되며,

이를 통해 변수의 스코프와 생명주기에 대한 이해를 높일 수 있습니다.




### **const로 변수를 선언할 때 반드시 동시에 값을 할당해야 합니다.**

이는 const로 선언된 변수는 재할당이 불가능하기 때문입니다.

 따라서 const로 변수를 선언하면서 값을 할당하면, 이후에 해당 변수에 다른 값을 할당하는 것이 불가능합니다. 

이는 변수 값이 변하지 않기 때문에 코드의 안정성을 높이고 예상치 못한 버그를 방지하는 데 도움이 됩니다.



```js
const foo;
// Uncaught SyntaxError : Missing initializer in const declaration
```

위 코드는 `const`로 변수 `foo`를 선언하고 초기화를 하지 않아서 에러가 발생하는 코드입니다.

`const`는 재할당이 불가능한 상수를 선언할 때 사용하는 키워드입니다.

따라서 `const`로 변수를 선언할 때는 반드시 초기화를 해주어야 합니다. 

위 코드에서는 초기화를 하지 않았기 때문에 `Uncaught SyntaxError: Missing initializer in const declaration` 에러가 발생합니다.

즉, `const`로 변수를 선언할 때는 반드시 초기화를 해주어야 하며, 초기화된 이후에는 값을 변경할 수 없습니다.

### const 키워드는 재할당을 금지할 뿐, 불변을 의미하는 것은 아니다.

프로퍼티 동적생성, 삭제, 프로퍼티 값의 변경을 통해 객체를 변경하는 것은 가능하다.

**그러나,**

이때 객체가 변경되더라도 **변수에 할당된 객체의 참조값은 변경되지 않는다.**