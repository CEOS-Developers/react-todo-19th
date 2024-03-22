export default function useLocalStorage() {
  const getTodoFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('todoList')) || [];
  };
  const setTodoToLocalStorage = (todoList) => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  };
  return { getTodoFromLocalStorage, setTodoToLocalStorage };
}
