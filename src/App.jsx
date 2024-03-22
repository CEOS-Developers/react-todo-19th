import TodoCreate from 'components/TodoCreate';
import TodoHeader from 'components/TodoHeader';
import TodoList from 'components/TodoList';
import { useReducer } from 'react';
import styled from 'styled-components';
import { flexCenter, flexColumn } from 'styles/commonStyle';

const initialState = {
  todoList: [],
  doneList: [],
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todoList: [...state.todoList, action.payload] };
    case 'MOVE_TODO_TO_DONE':
      return {
        todoList: state.todoList.filter((todo) => todo.id !== action.payload.id),
        doneList: [...state.doneList, action.payload],
      };
    case 'MOVE_DONE_TO_TODO':
      return {
        doneList: state.doneList.filter((todo) => todo.id !== action.payload.id),
        todoList: [...state.todoList, action.payload],
      };
    case 'REMOVE_TODO':
      return { ...state, todoList: state.todoList.filter((todo) => todo.id !== action.payload) };
    case 'REMOVE_DONE':
      return { ...state, doneList: state.doneList.filter((todo) => todo.id !== action.payload) };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const { todoList, doneList } = state;

  return (
    <TodoAppLayout>
      <TodoHeader />
      <TodoMain>
        <TodoCreate dispatch={dispatch} />
        <TodoListContainer>
          <TodoList listName="todo" list={todoList} dispatch={dispatch} />
          <TodoList listName="done" list={doneList} dispatch={dispatch} />
        </TodoListContainer>
      </TodoMain>
    </TodoAppLayout>
  );
}

export default App;

const TodoAppLayout = styled.div`
  padding: 4rem 0;
  gap: 2rem;
  ${flexCenter}
  ${flexColumn}
`;

const TodoMain = styled.main`
  ${flexColumn}
  gap: 3rem;
`;

const TodoListContainer = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
