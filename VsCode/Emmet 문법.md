# Emmet

## Emmet이란?

- Emmet(에밋) : HTML, XML, XSL 문서 편집 시 빠른 코딩을 위해 사용되는 플러그인
- 다른 에디터들도 Emmet을 지원하지만, VSCode에서는 기본 내장되어 있음
- 공식 emmet 문서 : https://docs.emmet.io/

## Emmet 사용법

### 중첩 연산자

- Child(자식) : `>`
  - 입력값
    ```html
    div > ul > li
    ```
  - 결과값
    ```html
    <div>
      <ul>
        <li></li>
      </ul>
    </div>
    ```
- Sibling(형제) : `+`
  - 입력값
    ```html
    div + p + bq
    ```
  - 결과값
    ```html
    <div></div>
    <p></p>
    <blockquote></blockquote>
    ```
- 여러개 출력 : `*`
  - 입력값
    ```html
    ul > li * 5
    ```
  - 결과값
    ```html
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    ```
- 그룹화 : `()`
  - 입력값
    ```html
    div > (header > ul > li*2>a) + footer > p
    ```
  - 결과값
    ```html
    <div>
      <header>
        <ul>
          <li><a href=""></a></li>
          <li><a href=""></a></li>
        </ul>
      </header>
      <footer>
        <p></p>
      </footer>
    </div>
    ```

### 속성 연산자

- ID & CLASS : `#`id, `.`class
  - 입력값
    ```html
    div #header + div.page + div #footer.class1.class2.class3
    ```
  - 결과값
    ```html
    <div id="header"></div>
    <div class="page"></div>
    <div id="footer" class="class1 class2 class3"></div>
    ```
- Numbering : `$`
  - 입력값
    ```html
    ul > li.item$ * 5
    ```
  - 결과값
    ```html
    <ul>
      <li class="item1"></li>
      <li class="item2"></li>
      <li class="item3"></li>
      <li class="item4"></li>
      <li class="item5"></li>
    </ul>
    ```

### 텍스트

- 텍스트 : `{}`
  - 입력값
    ```html
    a{Click me}
    ```
  - 결과값
    ```html
    <a href="">Click me</a>
    ```
