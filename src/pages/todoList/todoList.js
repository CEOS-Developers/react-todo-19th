import { useState } from "react";
import * as T from "./todoList.styles";

export default function TodoListPage() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const onChangeTodo = (event) => {
    setTodo(event.currentTarget.value);
  };

  const onClickSubmit = () => {
    if (!todo.trim()) return;
    setTodoList([...todoList, todo]);
    // todo 상태 초기화
    setTodo("");
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
            <T.CheckBoxImg />
            <T.TodoInput type="text" onChange={onChangeTodo} />
            <T.SubmitBtn onClick={onClickSubmit}>추가</T.SubmitBtn>
          </T.TodoForm>
        </T.WriteForm>

        {/*  todo list  */}
        <T.TodoList>
          {todoList?.map((item, index) => (
            <T.TodoListLi key={index}>
              <T.TodoListSpan>{item}</T.TodoListSpan>
              <T.TodoListBtn type="button" />
            </T.TodoListLi>
          ))}
        </T.TodoList>
      </T.TodoContainer>
    </T.Wrapper>
  );
}
