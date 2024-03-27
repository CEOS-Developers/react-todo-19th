const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todoList: [...state.todoList, action.payload] };
    case 'MOVE_TODO_TO_DONE':
      return moveItem(state, action.payload, 'todoList', 'doneList');
    case 'MOVE_DONE_TO_TODO':
      return moveItem(state, action.payload, 'doneList', 'todoList');
    case 'REMOVE_TODO':
      return removeItem(state, action.payload, 'todoList');
    case 'REMOVE_DONE':
      return removeItem(state, action.payload, 'doneList');
    default:
      return state;
  }
};

const moveItem = (state, payload, fromListName, toListName) => {
  const { id } = payload;

  return {
    [fromListName]: state[fromListName].filter((todo) => todo.id !== id),
    [toListName]: [...state[toListName], payload],
  };
};

const removeItem = (state, payload, listName) => {
  const { id } = payload;
  return {
    ...state,
    [listName]: state[listName].filter((todo) => todo.id !== id),
  };
};

export default todoReducer;
