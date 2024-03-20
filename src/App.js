import React, { useState } from 'react';
import styled from 'styled-components';
import Section from './Section';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 30px auto;
`;

const Input = styled.input`
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function App() {
  const [sections, setSections] = useState([]);
  const [sectionName, setSectionName] = useState('');

  const addSection = () => {
    const newSection = {
      id: Date.now(), // 현재 시간을 기준으로 고유한 ID 생성
      name: sectionName,
      todos: []
    };
    setSections([...sections, newSection]);
    setSectionName(''); // 입력 필드 초기화
  };

  const deleteSection = (sectionId) => {
    setSections(sections.filter(section => section.id !== sectionId));
  };

  const addTodo = (sectionId, todoText) => {
    setSections(sections.map(section => {
      if (section.id === sectionId) {
        const newTodo = { id: Date.now(), text: todoText };
        return { ...section, todos: [...section.todos, newTodo] };
      }
      return section;
    }));
  };

  const deleteTodo = (sectionId, todoId) => {
    setSections(sections.map(section => {
      if (section.id === sectionId) {
        const filteredTodos = section.todos.filter(todo => todo.id !== todoId);
        return { ...section, todos: filteredTodos };
      }
      return section;
    }));
  };

  return (
    <AppContainer>
      <Input
        type="text"
        placeholder="새 섹션 이름"
        value={sectionName}
        onChange={(e) => setSectionName(e.target.value)}
      />
      <Button onClick={addSection}>섹션 추가</Button>
      {sections.map((section) => (
        <Section
          key={section.id}
          section={section}
          onDeleteSection={() => deleteSection(section.id)}
          addTodo={addTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </AppContainer>
  );
}

export default App;
