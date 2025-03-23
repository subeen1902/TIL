## vue 기본 디렉티브

- `v-`로 시작하는 속성
- HTML 요소와 관련된 작업 지정

| 디렉티브    | 설명                                                                                           | 예시                                              |
| ----------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| `v-bind`    | HTML 속성에 데이터를 바인딩할 때 사용(단방향 : vue 변경 → UI 갱신, 축약 표현 : `:`)            | `<img v-bind:src="imageUrl">`                     |
| `v-model`   | 양방향 데이터 바인딩 (주로 `<input>` 등 폼 요소에 사용, 양방향 : vue 변경 ↔ UI 변경)           | `<input v-model="message">`                       |
| `v-if`      | 조건이 true일 때만 요소를 렌더링                                                               | `<p v-if="seen">Hello</p>`                        |
| `v-else`    | 앞선 `v-if`가 false일 때 렌더링                                                                | `<p v-else>Goodbye</p>`                           |
| `v-else-if` | 여러 조건 분기를 만들 때 사용                                                                  | `<p v-else-if="type === 'warning'">...</p>`       |
| `v-show`    | 조건에 따라 요소의 표시 여부만 제어 (렌더링은 항상 됨)                                         | `<p v-show="visible">Hi</p>`                      |
| `v-for`     | 리스트를 반복 렌더링할 때 사용(여러 요소를 묶어서 반복 랜더링할 경우, `<template v-for = "">`) | `<li v-for="item in items">{{ item }}</li>`       |
| `v-on`      | 이벤트 리스너를 연결할 때 사용                                                                 | `<button v-on:click="doSomething">Click</button>` |
| `v-pre`     | 해당 블록의 템플릿 구문을 컴파일하지 않음                                                      | `<span v-pre>{{ rawMustache }}</span>`            |
| `v-cloak`   | Vue 인스턴스가 준비될 때까지 보이지 않도록 하는 데 사용                                        | `<div v-cloak>...</div>`                          |
| `v-once`    | 처음만 렌더링되고 이후 다시 렌더링되지 않음 (정적 콘텐츠에 유용)                               | `<p v-once>{{ message }}</p>`                     |
| `v-text`    | 요소의 `textContent`를 갱신 (중괄호 없이 문자열 출력)                                          | `<span v-text="message"></span>`                  |
| `v-html`    | 요소의 `innerHTML`을 갱신 (HTML 태그도 함께 렌더링됨)                                          | `<div v-html="rawHtml"></div>`                    |

- `v-model`
  - `checkbox` 바인딩
    - 단일 선택 시, 단일 속성에 바인딩
    - 다중 선택 시, 배열 속성에 바인딩
    - 기본값 : true/false 중 선택
  - 수식어(modifier)
    - `lazy` : input에서 엔터를 치거나/포커스 이동 시, 입력값과 속성 동기화
    - `number` : '문자열 → 숫자'로 자동 형변환을 통해 속성에 반영
    - `trim` : 문자열 앞뒤 공백을 자동 제거
  - 한글 처리 : 값을 받아내는 시점이 한글 한 글자가 입력 완료될 때 처리됨
    - `v-model` 사용 X
    - `v-bind`를 통한 바인딩
    - `input`이 발생했을 때, 이벤트 핸들러에서 속성 데이터에 반영
- `v-for`
  - 배열을 랜더링할 시, 데이터 변경없이 위치가 바뀌는 경우
    - key 속성 X, 전부 다시 랜더링
    - key 속성 O, 위치만 변경
  - key 특성에는 index 번호 부여 X, 고유한 값 부여
