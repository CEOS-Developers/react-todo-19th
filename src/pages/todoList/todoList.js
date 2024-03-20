import { useState } from "react";
import * as T from "./todoList.styles";

export default function TodoListPage() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const onChangeTodo = (event) => {
    setTodo(event.currentTarget.value);
  };

  const onClickSubmit = (event) => {
    event.preventDefault();
    if (!todo.trim()) return;

    const newTodo = { text: todo, checked: false };
    setTodoList([...todoList, newTodo]);

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

  return (
    <T.Wrapper>
      <T.Header>✓ To Do</T.Header>
      <T.TodoContainer>
        <T.Title>오늘 할 일</T.Title>
        <T.TodayDate></T.TodayDate>

        {/*  input container  */}
        <T.WriteForm>
          <T.TodoForm>
            <T.NotCheck />
            <T.TodoInput type="text" onChange={onChangeTodo} value={todo} />
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
