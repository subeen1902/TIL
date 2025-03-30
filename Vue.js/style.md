## 스타일 적용

- 스타일 표기법
  - JavaScript : 케밥 표기법(e.g. `background-color`)
  - Vue.js : 카멜 케이스 표기법(e.g. `backgroundColor`)
- 스타일 적용 순서 : 요소의 기본 스타일 → `.test` 스타일 → `.over` 스타일 → 인라인 스타일
- 인라인 스타일 : `v-bind:style`

## CSS 클래스 지정

- 표현식 : `v-bind:class = ""`
- 축약 표현 : `:class = ""`
- true/false 값을 가진 객체 바인드 방법 : 객체로 바인딩 → 속성명으로 클래스명 지정 → 속성값으로 클래스 적용 여부 true/false로 지정
