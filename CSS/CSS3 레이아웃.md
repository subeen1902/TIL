## 수평 정렬 레이아웃

- 부모 - 자손

  | 부모                                  | 자손              |
  | ------------------------------------- | ----------------- |
  | `hidden` 키워드 적용(`overflow` 속성) | `float` 속성 지정 |

- `clear` 속성 : `float` 속성 제거(left, right, both)

## One True 레이아웃

- 1행 구성 : 행 3개로 구분 ⇒ 공간을 3개로 분할

  ```html
  <body>
    <div id="top"></div>
    <div id="middle"></div>
    <div id="bottom"></div>
  </body>
  ```

- 2열 구성

  ```html
  <body>
    <div id="top"></div>
    <div id="middle"></div>
    <div id="left"></div>
    <div id="right"></div>
    <div id="bottom"></div>
  </body>
  ```

- 3 레이아웃 구성
  1.  부모 태그 : 고정된 너비 지정
  2.  수평 정렬하는 부모 태그의 `overflow` 속성 내 `hidden` 적용
  3.  자손 태그 : 적당한 너비 입력, `float` 속성 적용

## 요소 배치

- 절대 위치를 사용한 요소 배치
  - 자식 요소에 `position : absolute` 적용 시,
  - 부모 요소에 `position : relativ / absolute / fixed` 적용 필요
- 요소 중앙 배치
  1.  `<div>` 태그의 `position : absolute` 지정
  2.  `left`, `right` 속성 모두 50% 지정
  3.  `margin-left`, `margin-top` 속성 : 음수 입력
  ```css
  #id {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -250px;
    margin-top: -125px;
  }
  ```
