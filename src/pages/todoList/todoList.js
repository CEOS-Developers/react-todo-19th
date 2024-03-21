import { useEffect, useState } from "react";
import * as T from "./todoList.styles";

export default function TodoListPage() {
  // const [todoNum, setTodoNum] = useState(0);
  // const [doneTodoNum, setDoneTodoNum] = useState(0);
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState(() => {
    // 로컬스토리지에서 할일 불러오기
    const savedTodo = localStorage.getItem("todoItem");
    return savedTodo ? JSON.parse(savedTodo) : [];
  });

  // 오늘 날짜
  const today = new Date().toISOString().slice(0, 10);

  // todoList 변경 시 로컬스토리지 업데이트
  useEffect(() => {
    localStorage.setItem("todoItem", JSON.stringify(todoList));
  }, [todoList]);

  const onChangeTodo = (event) => {
    setTodo(event.currentTarget.value);
  };

  const onClickSubmit = (event) => {
    event.preventDefault();
    if (!todo.trim()) return;

    const newTodo = { text: todo, checked: false };
    setTodoList([newTodo, ...todoList]);

    // todo 상태 초기화
    setTodo("");
  };

  const onClickDelete = (event) => {
    setTodoList(
      todoList.filter(
        (_, index) => index !== parseInt(event.currentTarget.value),
      ),
    );
  };

  const onClickToggle = (currentIndex) => {
    const updatedTodo = todoList.map((item, index) =>
      index === currentIndex ? { ...item, checked: !item.checked } : item,
    );
    setTodoList(updatedTodo);
  };

  // 할 일 갯수 계산
  const todoCount = todoList.length;
  const completedCount = todoList.filter((item) => item.checked).length;
  const notCompletedCount = todoCount - completedCount;

  return (
    <T.Wrapper>
      <T.Header>✓ To Do</T.Header>
      <T.TodoContainer>
        <T.HeadWrapper>
          <div>
            <T.Title>오늘 할 일</T.Title>
            <T.TodayDate>{today}</T.TodayDate>
          </div>
          <T.TodoCountContainer>
            <T.TodoDiv>
              todo : <T.TextP>{notCompletedCount}</T.TextP>
            </T.TodoDiv>
            <T.TodoDiv>
              complete : <T.TextP2>{completedCount}</T.TextP2>
            </T.TodoDiv>
          </T.TodoCountContainer>
        </T.HeadWrapper>
        {/*  input container  */}
        <T.WriteForm>
          <T.TodoForm>
            <T.InputCheckImg />
            <T.TodoInput
              type="text"
              onChange={onChangeTodo}
              value={todo}
              placeholder="할 일을 입력해주세요."
            />
            <T.SubmitBtn onClick={onClickSubmit}>추가</T.SubmitBtn>
          </T.TodoForm>
        </T.WriteForm>

        {/*  todo list  */}
        <T.TodoList>
          {todoList?.map((item, index) => (
            <T.TodoListLi key={index}>
              {item.checked ? (
                <div value={index}>
                  <T.Check onClick={() => onClickToggle(index)} />
                </div>
              ) : (
                <T.NotCheck onClick={() => onClickToggle(index)} />
              )}
              <T.TodoListSpan>{item.text}</T.TodoListSpan>
              <T.TodoListBtn
                type="button"
                onClick={onClickDelete}
                value={index}
              >
                삭제
              </T.TodoListBtn>
            </T.TodoListLi>
          ))}
        </T.TodoList>
      </T.TodoContainer>
    </T.Wrapper>
  );
}
