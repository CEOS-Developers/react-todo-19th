import TodoListPage from "./pages/todoList/todoList";
import { GlobalStyle } from "./styles/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <TodoListPage />
    </div>
  );
}

export default App;
