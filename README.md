# 2주차 미션: React-Todo

# 🥳 배포 링크

https://react-todo-19th-zeta.vercel.app/

# ⚙️ 구현한 기능

![image 23](https://github.com/CEOS-Developers/react-todo-19th/assets/101055312/c3092a30-adf7-4def-8b4e-c9219be0c4ae)
![image 24](https://github.com/CEOS-Developers/react-todo-19th/assets/101055312/c3589454-a07b-4c22-ad33-137861eeea71)

# 🤔 Key Questions

## 1. Virtual-DOM은 무엇이고, 이를 사용함으로서 얻는 이점은 무엇인가요?

가상 돔은, 실제 DOM을 메모리에 복사해준 것입니다.
DOM의 내용이 바뀌면 이를 곧바로 새로운 DOM 트리를 생성하고, Render tree를 생성하는 것이 아닙니다.
내용이 바뀔 시, 우선 가상 돔에 렌더링합니다.
이후, 새로운 가상 DOM과 이전 가상 DOM을 비교하여 실제로 변경된 부분만 실제 DOM에 패치하는 과정을 거칩니다.

-> 실제 돔을 조작하는 것은 '레이아웃을 재계산'하는 과정과 변경된 레이아웃을 바탕으로 화면을 다시 그리는 '리플로우'와 '리페인트' 과정을 필요로 하므로 비용이 많이 드는 작업입니다. 때문에, 가상 DOM을 사용함으로써 필요한 최소한의 변경만 실제 DOM에 적용하여, 성능을 크게 향상시킬 수 있습니다.
-> 가상 DOM은 메모리 내에서 작동하기 때문에, DOM 조작보다 훨씬 빠르게 실행됩니다.

### 2. 미션을 진행하면서 느낀, React를 사용함으로서 얻을수 있는 장점은 무엇이었나요?

<명령적 UI 개발보다, 편리했던 선언적 UI 개발>
리엑트를 사용해 보면서, 컴포넌트 기반 구조를 사용하는 유니티 개발을 할 때와 유사하다고 느꼈습니다. 유니티는, 3D 씬에 오브젝트들을 배치하는 것이므로, 각각의 컴포넌트별로 개발하는 것이 적합한 구조입니다.
웹 페이지도, 결국, 2D 화면에 노드와 요소들을 배치하는 것이므로, 리엑트를 사용하면서 유니티 개발할 때와 유사하다는 생각이 들었습니다. 리엑트를 사용한 컴포넌트 방식이 코드를 작성하고, 계획을 세우는 데 더 편리하다고 느꼈습니다.
바닐라js로 개발했을 때처럼 document의 다양한 메서드를 사용하면서 복잡한 조작을 거치며 "어떻게" UI를 변경할 것인지에 대한 절차적 로직을 작성하는 대신,
컴포넌트별로 개발하며 "무엇"을 보여줄 것인지에 집중할 수 있어서 편리했던 것 같습니다.

## 3. React에서 상태란 무엇이고 어떻게 관리할 수 있을까요?

### 상태란?

리엑트에서 상태는 컴포넌트의 현재 상태에 대한 정보(컴포넌트의 현재 조건이나 데이터)를 보유하는 객체를 말합니다.
특정 시점에서 컴포넌트의 데이터의 스냅샷이라고 생각할 수 있을 것 같습니다.

### 상태를 관리하는 방법

리엑트를 통해 상태를 동적으로 관리하고, 업데이트 할 수 있습니다.
함수형 컴포넌트에선 상태를 선언하고 관리할 수 있게 해주는 내장 훅(Hook) 'useState'를 제공합니다.

1. 섹션 컴포넌트 상태 관리

```javascript
// 섹션 컴포넌트 일부분
const [todoText, setTodoText] = useState('');

const handleAddTodo = () => {
	// 공백일 시 추가x
	if (todoText.trim() === '') return;
	addTodo(section.id, todoText);
	setTodoText('');
};
```

Section 컴포넌트에서 useState를 사용하여 todoText 상태를 관리했습니다.
todoText 상태는, 해당 섹션의 할일로 입력된 것을 가지고 있는 텍스트입니다.
사용자가 특정 섹션에 할 일을 입력하고 추가 버튼을 클릭하면, handleAddTodo() 이벤트 핸들러 함수가 호출됩니다.

```javascript
// 섹션 컴포넌트 리턴문 일부
 <Input
            type="text"
            placeholder="할 일 추가"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
          <Button onClick={handleAddTodo}> 📥</Button>
```

이벤트 핸들러 내부에서 상위 컴포넌트(App 컴포넌트)로부터 전달받은 addTodo() 함수를 호출합니다.
섹션 컴포넌트의 sectionId와 todoText 상태를 addTodo()의 인자로 전달해 새로운 할 일 객체를 생성하고 섹션의 할 일 목록에 추가합니다. 이에 따라 UI가 자동으로 업데이트됩니다.

```javascript
const addTodo = (sectionId, todoText) => {
	setSections((prevSections) =>
		prevSections.map((section) =>
			section.id === sectionId
				? {
						...section,
						todos: [
							...section.todos,
							// 해당 섹선에 새로운 할 일 객체 생성하는 부분
							{ id: Date.now(), text: todoText, completed: false },
						],
				  }
				: section
		)
	);
};
```

아래는 sections를 상태로 가지는 섹션의 상위 컴포넌트인 앱 컴포넌트의 코드 일부입니다.

```javascript
function App() {
	const [sections, setSections] = useState([]);
	const [sectionName, setSectionName] = useState('');
```

2. 투두 아이템 컴포넌트에서 상태 관리
   TodoItem 컴포넌트에서는 섹션과 달리 상태 관리를 직접 하지 않았습니다.
   상위 컴포넌트로부터 할 일 객체(todo), 삭제(onDelete), 완료 상태 토글(onToggleCompleted) 함수를 props로 받았습니다.

```javascript
// 섹션 컴포넌트 return 일부 ...
{
	section.todos.map((todo) => (
		<TodoItem
			key={todo.id}
			todo={todo}
			onDelete={() => deleteTodo(section.id, todo.id)}
			onToggleCompleted={() => onToggleCompleted(section.id, todo.id)}
		/>
	));
}
```

상위 컴포넌트로부터 받은 상태 정보에 따라 투두 아이템을 어떻게 렌더링할지 결정했습니다.

```javascript
// todoitem 컴포넌트 코드 일부...
<span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
  {todo.text}{todo.completed ? ' 🥳' : ''}
</span>
<Button onClick={() => onToggleCompleted(todo.id)}>
  {todo.completed ? '❎' : '✅'}
</Button>
<Button onClick={() => onDelete(todo.id)}>🗑️</Button>
```

- 할 일이 완료된 경우
  -> 해당 할 일의 텍스트에 취소선을 적용 + ✅ 버튼을 렌더링 + 🥳 텍스트 표시
- 할 일이 완료되지 않은 경우
- > 해당 할 일의 텍스트에 취소선 적용x + ❎ 버튼을 렌더링 + 🥳 텍스트 표시 x
- 할 일을 삭제한 경우
  -> 상위 컴포넌트 섹션으로부터 제공받은 onDelete(todo.id) 이벤트 핸들링 함수를 통해
  할 일 삭제

## 4. Styled-Components 사용 후기 (CSS와 비교)

Styled-Components를 통해 CSS를 JS 파일 내에 직접 작성하고, 스타일의 범위를 컴포넌트로 한정지어 사용할 수 있어서 개발하는데 더 직관적이였던 것 같습니다.
스타일드 컴포넌트를 사용하여 리액트의 JSX 문법을 작성할 때 간편하게 컴포넌트의 스타일을 동적으로 변경할 수 있어서, 코드 작성하기 직관적이고 아주 편리했던 것 같습니다.

```javascript
// 완료 여부에 따른 동적 스타일 변경
<span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
```

# 💡 여담

1주차 과제를 할 때 html 태그에 적용한 css 속성이 특정 요소에는 적용되고 특정 요소에는 적용되지 않아서,
임시방편으로 css 속성이 적용이 필요한 요소마다 css 속성을 정의하는 방법으로 해결하였습니다.
그런데 지난 세션에서 유담님과 이야기하면서,
'*' 선택자를 사용하면, 하나씩 요소별로 속성을 정의하지 않아도, 모두 적용된다는걸 알아, *를 사용하는 간결한 코드로 변경하였습니다.
이에 관해 이야기하는 과정에서 브라우저에는 기본적으로 내장된 CSS 스타일이 존재하며, 이는 웹 페이지가 아무런 사용자 정의 스타일 없이도 기본적인 형태를 갖출 수 있도록 하여, 사용자가 정의한 CSS와 브라우저의 기본 스타일 사이에 충돌이 발생할 수 있다는 걸 알았습니다.
브라우저의 기본 스타일과 사용자 정의 스타일 간의 충돌을 해결하기 위해 CSS 선택자의 우선순위를 이해하고 적절히 사용하거나 CSS 리셋(reset)이나 노멀라이즈(normalize)와 같은 기법을 사용하여 브라우저 간의 스타일 차이를 최소화하고, 일관된 스타일링을 적용해야겠다는 깨달았습니다.

# 미션

## 예시

- [리액트 투두 예시](https://react-todo-18th-lemon.vercel.app/)

## 미션 목표

- VSCode, Prettier를 이용하여 개발환경을 관리합니다.
- React의 기초를 이해합니다.
- React를 통한 어플리케이션 상태 관리 방법을 이해합니다.
- React Hooks에 대한 기초를 이해합니다.
- Styled-Components를 통한 CSS-in-JS 및 CSS Preprocessor의 사용법을 익힙니다.

## 기한

- 2024년 3월 22일 금요일

## Key Questions

- Virtual-DOM은 무엇이고, 이를 사용함으로서 얻는 이점은 무엇인가요?
- 미션을 진행하면서 느낀, React를 사용함으로서 얻을수 있는 장점은 무엇이었나요?
- React에서 상태란 무엇이고 어떻게 관리할 수 있을까요?
- Styled-Components 사용 후기 (CSS와 비교)

## 필수 요건

- 1주차 미션의 결과물을 그대로 React로 구현합니다. (‼️ todo / done 개수 잊지 마세요 ‼️)
- Functional Components를 사용합니다.
- React Hooks만을 사용해 상태를 관리합니다.
- (이번주는 Redux, MobX, Recoil, SWR등의 외부 상태관리 라이브러리를 사용하지 않아도 미션 수행에 지장이 없습니다.)

## 선택 요건

- 기존 Todo-list에 여러분들이 추가하고 싶은 기능과 디자인을 자유롭게 추가해보세요.

## 로컬 실행방법

---

`npm start` : 로컬에서 react application을 자동으로 리로드하여 실행시켜줍니다.

# 링크 및 참고자료

---

- [create react app (CRA)](https://create-react-app.dev/docs/getting-started/)
- [리액트 docs 주요 개념 1-12](https://react.dev/learn)
- [리액트 docs Hook 1-3](https://react.dev/reference/react)
- [리액트 useEffect 완벽 가이드](https://overreacted.io/ko/a-complete-guide-to-useeffect/)
- [컴포넌트 네이밍을 위한 자바스크립트 네이밍 컨벤션](https://velog.io/@cada/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8A%A4%ED%83%80%EC%9D%BC-%EA%B0%80%EC%9D%B4%EB%93%9C-%EB%84%A4%EC%9D%B4%EB%B0%8D-%EC%BB%A8%EB%B2%A4%EC%85%98-%ED%8E%B8)
- [useState, useEffect hooks](https://velog.io/@velopert/react-hooks#1-usestate)
- [styled-component](https://styled-components.com/docs/basics#getting-started)
