dreamcoding TS project

HTMLELEMENT 클래스부터 상속이 시작되어 ul, li 등의 ELEMENT들이 Type으로 만들어져있다.

documet API에서 createElement는 자식요소를 만든다.
setAttribute는 속성을 지정해준다.

```
this.element.setAttribute('class', 'page')
```

insertAdjacentElement는

```
insertAdjacentElement(where: InsertPosition, element: Element): Element | null;
```

이렇게 인자를 전달받고 InsertPosition은

```
type InsertPosition = "beforebegin" | "afterbegin" | "beforeend" | "afterend";
```

이런 타입을 가진다.
즉, 어디에 어떤 요소를 추가할 지 정할 수 있는 API이다.

# DOM이란

dcoument object model의 약자
html을 작성하면 브라우저는 이 파일을 그대로 이해하는게 아니라 각각의 태그를 브라우저가 이해할 수 있는 자바스크립트 object로 변환하게 된다.
이것을 메모리에 보관해서 이해하게 된다.

노드는 이벤드타겟을 상속한다. 그래서 모든 노드는 이벤트가 발생할수 있고 addEvent를 사용할 수 있는 것이다. document, elementm, text는 노드를 상속하고 htmlElemnt는 element를 상속한다. 그리고 inputElement, Divelement ... 등은 htmlelemnet를 상속한다.

html 태그들은 결국 위의 관계에 따라 dom tree로 변환된다.

# 다시 프로젝트

template태그는 추가되거나 복사될 수 있는 HTML 요소들을 정의할 때 사용합니다.

template 요소 내의 콘텐츠는 페이지가 로드될 때 즉시 렌더링되지 않으며, 따라서 사용자에게는 보이지 않습니다. 하지만 나중에 자바스크립트를 사용하여, 해당 콘텐츠를 복제한 후 보이도록 렌더링할 수 있습니다.

template.content를 통해 자식을 볼 수 있다

textContent로 title을 추가한 이유는 ${}을 사용하면 title은 사용자로 부터 받은 입력 데이터이라서 사용자가 위험한 코드를 입력하면 사용자가 동적으로 html요소를 만들어낼수가 있다. 따라서 사용자에게 전달받은 데이터를 innerHTML로 작성하는 것은 위험해서 textContent로 추가해준것이다.
