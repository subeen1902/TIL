## js의 this

- 메서드/함수 호출 시, 현재 호출 중인 메서드를 보유한 객체가 `this`로 연결됨
- 현재 호출 중인 메서드를 보유한 객체가 없을 경우, 전역 객체 연결
- 호출 방식에 따라 다르게 바인딩됨
- 화살표 함수 : `this` 생성 X ⇒ 항상 상위 스코프의 `this` 사용
- 메서드 내부에서 콜백함수를 사용할 경우 : `this`를 유지하고 싶을 경우, `bind(this)` 사용
- in 생성자 함수 ⇒ 화살표 함수 사용 X (`this` 바인딩 X, `new`와 함께 사용 X)
- 사용 가이드
  - 콜백 함수에서 `this`가 필요한 경우: `화살표 함수 사용`
  - 메서드 정의할 때 : `일반 함수(선언형)` 사용
  - 생성자 함수 정의 : `일반 함수 + new` 조합
  - Vue 등 프레임워크에서 `this`를 활용할 경우: 화살표 함수 사용에 주의!

## js this의 바인딩 정리

| 상황                            | `this`가 가리키는 대상                      |
| ------------------------------- | ------------------------------------------- |
| 전역에서 사용                   | 브라우저: `window`, Node.js: `{}` (빈 객체) |
| 일반 함수 호출                  | 전역 객체 (`window` 또는 `global`)          |
| 객체의 메서드 호출              | 메서드를 호출한 객체                        |
| 생성자 함수 (`new`)             | 새로 생성된 객체                            |
| `call`, `apply`, `bind` 사용    | 명시한 객체로 강제 바인딩                   |
| 화살표 함수                     | 상위 스코프의 `this` (정적으로 결정됨)      |
| 메서드 안의 중첩 일반 함수      | 전역 객체 (예상 외 결과, 주의!)             |
| 메서드 안의 중첩 화살표 함수    | 메서드의 `this` (즉, 객체 자신)             |
| `setTimeout`의 일반 함수 콜백   | 전역 객체                                   |
| `setTimeout`의 화살표 함수 콜백 | 상위 스코프의 `this` (원하는 객체)          |

### 전역에서의 this

- 브라우저 : `window`
- Node.js : 빈 객체 `{}`

```js
let gt = this;
console.log(this);
```

### 일반 함수에서의 this

- 그냥 호출할 경우 : 전역객체
- 객체에 담아서 호출할 경우, 해당 객체

```js
function funcA() {
  return this;
}
funcA();
```

### 객체 메서드에서의 this

- `this` : 해당 메서드를 호출한 객체 참조

```js
let obj = {
  getAddress() {
    return this.address;
  },
};
obj.getAddress(); // this = obj
```

- 따로 호출할 경우, 전역 객체가 바인딩 됨

```js
let getAddr = obj.getAddress;
getAddr();
```

### 생성자 함수에서의 this

- `new`로 호출 시, 새 객체에 바인딩
- `new`없이 호출 시, 전역 객체에 바인딩(버그 유발)
- 콜백함수 사용 X ⇒ `this` 바인딩이 제대로 X

```js
function Person(name) {
  this.name = name;
}
let p = new Person('Kim'); // this : 새로 생성된 객체
```

### 명시적 바인딩

- 직접 `this`를 원하는 객체에 강제로 바인딩
- `call()` : 즉시 실행, `,`로 인자 나열, 첫번째 인자 ⇒ `this`로 사용할 객체
- `apply()` : 즉시 실행, 배열 `[]`로 인자 전달, 첫번째 인자 ⇒ `this`로 사용할 객체
- `bind()` : 새로운 함수 반환(즉시 실행 X), `this`롸 초기 인자를 고정한 함수 생성 ⇒ 나중에 실행할 함수

```js
function func() {
  console.log(this);
}
func.call(obj); // this = obj
func.apply(obj); // this = obj
let boundFunc = func.bind(obj);
boundFunc(); // this = obj
```

### 화살표 함수에서의 this

- 항상 `상위 컨텍스트의 this`를 그대로 사용
- 화살표 함수 : `this` 생성 X

```js
let arrow = () => {
  console.log(this);
};
arrow(); // 상위 스코프의 this
```

```js
let obj = { a: 1, arrow: () => console.log(this) };
obj.arrow(); // 전역 객체
```

### 메서드 내부에서 콜백 함수 사용

- `this`를 유지하고 싶을 경우, `bind(this)` 사용

```js
let person = {
  name: 'Kim',
  sayHiLater() {
    setTimeout(
      function () {
        console.log('안녕하세요, 제 이름은', this.name, '입니다.');
      }.bind(this),
      1000
    ); // this를 person 객체로 고정
  },
};

person.sayHiLater();
```

### 메서드 내부에서 선언 함수 사용

- 중첩된 일반함수 : `전역 객체` 의미

```js
let obj = {
  age: 30,
  getAge() {
    function inner() {
      console.log(this.age); // 전역 객체
    }
    inner();
  },
};
```

### 메서드 내부에서 화살표 함수 사용

- 화살표 함수 : `getAge()`의 `this`(obj)를 사용

```js
let obj = {
  age: 30,
  getAge() {
    let inner = () => console.log(this.age); // obj.age
    inner();
  },
};
```

### 콜백 함수의 this

- 일반 콜백함수 : 전역객체
- 화살표 함수 콜백 : 상위의 `this` 사용

```js
let obj = {
  value: 100,
  fnA() {
    setTimeout(function () {
      console.log(this.value); // 전역 객체
    }, 1000);
  },
  fnB() {
    setTimeout(() => {
      console.log(this.value); // 100 (obj)
    }, 1000);
  },
};
```
