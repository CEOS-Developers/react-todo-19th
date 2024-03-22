import { useEffect, useState } from 'react';
import styled from 'styled-components';
import AddTodo from './components/AddTodo';
import DoneSection from './components/DoneSection';
import TodoFooter from './components/TodoFooter';
import TodoHeader from './components/TodoHeader';
import TodoSection from './components/TodoSection';
import useLocalStorage from './hooks/useLocalStorage';

let Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #efd8d8;
`;

let TodoListLayout = styled.div`
  width: 100%;
  height: 80%;
  max-width: 840px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    height: 100%;
    border-radius: 0;
  }
`;

function App() {
  const [todoList, setTodoList] = useState([]);
  const [doneList, setDoneList] = useState([]);
  const { getTodoFromLocalStorage } = useLocalStorage();
  const list = getTodoFromLocalStorage('todoList');
  useEffect(() => {
    if (list) {
      setTodoList(list.filter((item) => !item.isdone));
      setDoneList(list.filter((item) => item.isdone));
    }
  }, [list]);
  const addTodo = (todo) => {
    setTodoList((prev) => {
      return [...prev, todo];
    });
  };
  const deleteTodo = (todo, isDone) => {
    if (isDone) {
      setDoneList((prev) => {
        return prev.filter((item) => item.todo !== todo);
      });
    } else {
      setTodoList((prev) => {
        return prev.filter((item) => item.todo !== todo);
      });
    }
  };
  const toggleTodo = (todo, isDone) => {
    if (isDone) {
      setDoneList((prev) => prev.filter((item) => item.todo !== todo));
      setTodoList((prev) => [...prev, { todo, isdone: false }]);
    } else {
      setTodoList((prev) => prev.filter((item) => item.todo !== todo));
      setDoneList((prev) => [...prev, { todo, isdone: true }]);
    }
  };
  return (
    <Layout>
      <TodoListLayout>
        <TodoHeader />
        <TodoSection
          todoList={todoList}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
        <DoneSection
          doneList={doneList}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
        <AddTodo addTodo={addTodo} />
        <TodoFooter
          todoDoneCount={doneList.length}
          todoTotalCount={doneList.length + todoList.length}
        />
      </TodoListLayout>
    </Layout>
  );
}

export default App;
