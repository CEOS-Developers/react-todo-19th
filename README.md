# 2주차 미션: React-Todo

# 미션

## 배포 링크

- [배포 링크](https://react-todo-19th.vercel.app/)

## 기능 구현

기존 기능

- 입력창을 통해 할 일 추가
- 삭제 버튼 클릭으로 할 일 삭제
- 체크 버튼 클릭으로 완료 표시, 밑줄 그어 완료 표시
- 날짜 출력
- 총 할 일 개수와 완료한 일 개수 출력
- 로컬 스토리지 저장

추가된 기능

- 반응형 구현
- 버튼 컨테이너 애니메이션 효과
- React.memo를 이용한 렌더링 최적화

## 느낀 점

안녕하세요, 19기 프론트 안혜연입니다!

1주차 과제에서 추가로 몇몇 기능을 넣으려고 했으나,, 일단 필수 기능 위주로 구현했습니다.
추가로 스타일을 반응형으로 지정해주려고 했습니다. 평소 자주 쓰는 px 단위가 익숙해서 반응형 구현에 있어 어렵게 느껴졌습니다..
다른 분들은 어떤 단위 위주로 사용하는지,, 피그마로 디자인을 볼 때 px 단위로 나타나는데 직접 다른 단위로 계산해서 사용하는지,,
반응형 구현은 미디어 쿼리로 지정해주시는지 궁금합니다.!!
그리고 Tailwind CSS를 사용하면 반응형 디자인 구현이 훨씬 편리하다는 것 같아 Tailwind CSS도 공부해서 사용해보고 싶습니다.

할 일을 입력할 때마다 할 일 목록들이 불필요하게 렌더링되어 React.memo를 사용해 이를 방지하였습니다.
또 할 일 텍스트를 선택하면 버튼 컨테이너가 나오게끔 슬라이드 효과를 주고 싶어 애니메이션 효과를 지정해주었습니다.

## 미션 목표

- VSCode, Prettier를 이용하여 개발환경을 관리합니다.
- React의 기초를 이해합니다.
- React를 통한 어플리케이션 상태 관리 방법을 이해합니다.
- React Hooks에 대한 기초를 이해합니다.
- Styled-Components를 통한 CSS-in-JS 및 CSS Preprocessor의 사용법을 익힙니다.

## Key Questions

1. Virtual-DOM은 무엇이고, 이를 사용함으로서 얻는 이점은 무엇인가요?
   Virtual DOM은 웹 개발에서 사용되는 개념으로, 실제 DOM(Document Object Model)의 가벼운 사본입니다. Virtual DOM은 메모리 내에 존재하며, 실제 DOM과 상호작용하는 대신에 애플리케이션의 UI 상태를 효율적으로 업데이트하는 데 사용됩니다. 애플리케이션의 상태가 변경될 때 이전 Virtual DOM에서 변경된 부분만 업데이트하여 실제 DOM 업데이트가 최소화되어 애플리케이션의 성능이 향상됩니다.

2. 미션을 진행하면서 느낀, React를 사용함으로서 얻을수 있는 장점은 무엇이었나요?
   UI를 독립적인 컴포넌트로 나누어 개발할 수 있다는 것이 장점으로 느껴졌습니다. 컴포넌트들은 재사용이 가능하고, 컴포넌트에서 자신이 개별적으로 상태 관리를 할 수 있어 복잡한 UI도 쉽게 관리하고 유지할 수 있습니다.

3. React에서 상태란 무엇이고 어떻게 관리할 수 있을까요?
   상태란 컴포넌트의 상태를 저장하고 관리하는 데이터로 컴포넌트가 동적으로 데이터를 처리하고 UI를 적절히 업데이트할 수 있게 해줍니다.
   클래스 컴포넌트 내에서는 this.state를 사용하여 상태를 초기화하고, this.setState 메소드를 사용해 상태를 업데이트합니다. React 16.8부터 도입된 Hooks는 class없이 state를 사용할 수 있게 하여 함수 컴포넌트에서도 상태 관리를 가능하게 합니다.

4. Styled-Components 사용 후기 (CSS와 비교)
   css 파일로 스타일을 지정하는 것보다 Styled-Components가 더 편리하게 느껴졌습니다. 별도의 css 파일 없이 하나의 js 파일 안에서 컴포넌트 단위별로 스타일을 지정해줄 수 있다는 점에서 스타일을 관리하기 더 쉬웠습니다. 또한 props나 상태에 따라 해당 스타일을 쉽게 처리할 수 있어 편리했습니다.

# 링크 및 참고자료

---

- [create react app (CRA)](https://create-react-app.dev/docs/getting-started/)
- [리액트 docs 주요 개념 1-12](https://react.dev/learn)
- [리액트 docs Hook 1-3](https://react.dev/reference/react)
- [리액트 useEffect 완벽 가이드](https://overreacted.io/ko/a-complete-guide-to-useeffect/)
- [컴포넌트 네이밍을 위한 자바스크립트 네이밍 컨벤션](https://velog.io/@cada/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8A%A4%ED%83%80%EC%9D%BC-%EA%B0%80%EC%9D%B4%EB%93%9C-%EB%84%A4%EC%9D%B4%EB%B0%8D-%EC%BB%A8%EB%B2%A4%EC%85%98-%ED%8E%B8)
- [useState, useEffect hooks](https://velog.io/@velopert/react-hooks#1-usestate)
- [styled-component](https://styled-components.com/docs/basics#getting-started)
