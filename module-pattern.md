

# 모듈 패턴

JavaScript에서 모듈 패턴(Module Pattern)은 코드를 구성하고 

구성 요소를 캡슐화하여 코드의 재사용성을 높이는 방법 중 하나입니다.

모듈 패턴은 전역 네임스페이스를 오염시키지 않고 코드를 구성할 수 있도록 도와줍니다.

## 모듈 패턴의 구성 요소

1. 즉시 호출 함수 표현식(IIFE, Immediately - invoked Function Expression)
    
    모듈 패턴의 핵심 요소입니다. 
    
    IIFE는 함수를 정의하고 즉시 실행합니다.
    
    ```js
    (function() {
      // 모듈 코드
    })();
    
    ```

2. private 변수
    
    모듈 패턴은 private변수를 사용하여 모듈의 상태를 유지합니다. 
    
    private 변수는 모듈 외부에서 액세스할 수 없습니다.
    
    ```js
    (function() {
      var privateVar = 'private 변수';
    
      function privateFunc() {
        console.log('private 함수');
      }
    
      // 모듈 코드
    })();
    
    ```

3. 공개(public) 인터페이스
    
    공개 인터페이스는 모듈에서 외부에 노출되는 멤버입니다. 
    
    이를 통해 모듈 외부에서 모듈의 상태나 동작을 조작할 수 있습니다.
    
    ```js
    var module = (function() {
      var privateVar = 'private 변수';
    
      function privateFunc() {
        console.log('private 함수');
      }
    
      return {
        publicVar: 'public 변수',
        publicFunc: function() {
          console.log('public 함수');
        }
      };
    })();
    
    console.log(module.publicVar); // 출력: public 변수
    module.publicFunc(); // 출력: public 함수
    
    ```
    

## 모듈 패턴의 장점

- 코드를 캡슐화하여 전역 네임스페이스 오염을 방지합니다.
- 모듈의 상태와 동작을 쉽게 관리할 수 있습니다.
- 모듈의 인터페이스를 통해 다른 모듈과 상호작용할 수 있습니다.
- 코드의 재사용성을 높입니다.

## 모듈 패턴의 단점

- 비공개 멤버는 모듈 외부에서 액세스할 수 없기 때문에 ** 디버깅이 어려울 수 있습니다 **.
- 모듈의 상태를 변경하는 함수가 없는 경우, 모듈의 상태를 갱신할 수 없습니다.

JavaScript에서 모듈 패턴은 코드의 구성을 쉽게 하고 유지보수를 용이하게 합니다.

모듈 패턴을 사용하여 코드를 작성하면 전역 네임스페이스 오염과 같은 문제를 방지할 수 있습니다.따라서 모듈 패턴은 JavaScript 코드의 재사용성을 높이는 좋은 방법 중 하나입니다.



## attention 👉

모듈 패턴을 사용하는 이유 중 하나는 전역 네임스페이스 오염을 방지하기 위해서입니다.

하지만 때로는, 모듈의 일부 기능을 외부에서 사용하고 싶을 때가 있습니다.

이 때는 모듈의 공개 인터페이스를 조작하여 외부에서 기능을 호출할 수 있도록 할 수 있습니다.

```js
var module = (function() {
  var privateVar = 'private 변수';

  function privateFunc() {
    console.log('private 함수');
  }

  function publicFunc() {
    console.log('public 함수');
  }

  return {
    publicVar: 'public 변수',
    publicFunc: publicFunc
  };
})();

module.publicFunc(); // 출력: public 함수

```

위 코드에서는 `publicFunc` 함수를 모듈의 공개 인터페이스에 추가하고,

`publicFunc` 함수를 `return` 키워드를 이용하여 공개하였기 때문에,

외부에서도 해당 함수를 호출할 수 있게 되었습니다.


따라서, 모듈을 작성할 때는 공개하고자 하는 함수나 변수를 

`return` 키워드를 이용하여 공개 인터페이스에 추가하여 

외부에서도 사용할 수 있습니다.

