import React, { useReducer } from 'react';

const initialState = {
  todoList: [
    { id: 1, text: '아침 산책', done: true },
    { id: 2, text: '오늘의 뉴스 읽기', done: true },
    { id: 3, text: '샌드위치 사 먹기', done: false },
    { id: 4, text: '리액트 공부하기', done: false },
  ],
  doneList: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todoList: [...state.todoList, action.payload] };
    case 'MOVE_TODO_TO_DONE':
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.payload.id),
        doneList: [...state.doneList, action.payload],
      };
    case 'MOVE_DONE_TO_TODO':
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
        doneList: state.doneList.filter((todo) => todo.id !== action.payload.id),
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
  const [state, dispatch] = useReducer(reducer, initialState);
  const { todoList, doneList } = state;

  const addTodo = (todo) => {
    dispatch({ type: 'ADD_TODO', payload: todo });
  };

  return (
    <TodoAppLayout>
      <TodoHeader />
      <TodoMain>
        <TodoCreate addTodo={addTodo} />
        <TodoListContainer>
          <TodoList listName="Todo" todos={todoList} dispatch={dispatch} />
          <TodoList listName="Done" todos={doneList} dispatch={dispatch} />
        </TodoListContainer>
      </TodoMain>
    </TodoAppLayout>
  );
}

export default App;
