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
    setSections([...sections, { id: sections.length + 1, name: sectionName, todos: [] }]);
    setSectionName('');
  };

  return (
    <AppContainer>
      <Input 
        type="text"
        placeholder="New Section Name"
        value={sectionName}
        onChange={(e) => setSectionName(e.target.value)}
      />
      <Button onClick={addSection}>Add Section</Button>
      {sections.map((section) => (
        <Section key={section.id} section={section} />
      ))}
    </AppContainer>
  );
}

export default App;
