import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Section from './Section';
import GlobalStyle from './GlobalStyle';

const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 80%;
	margin: 30px auto;
`;

const Input = styled.input`
	margin: 5px;
	padding: 10px;
	border-radius: 5px;
	border: 1px solid #ccc;
`;

const Button = styled.button`
	padding: 10px 20px;
	margin: 5px;
	border-radius: 15px;
  border:none;
	background-color: #f7f7f7;
	color: black;
  font-size:20px;
	cursor: pointer;

	&:hover {
		background-color: #dedede;
	}
`;

const SummaryText = styled.h2`
	margin-top: 20px;
`;

const CountText = styled.h4`
	margin-top: 2px;
`;

function App() {
	const [sections, setSections] = useState([]);
	const [sectionName, setSectionName] = useState('');

	useEffect(() => {
		const storedSections = JSON.parse(localStorage.getItem('sections')) || [];
		setSections(storedSections);
	}, []);

	useEffect(() => {
		localStorage.setItem('sections', JSON.stringify(sections));
	}, [sections]);

	const addSection = () => {
		if (!sectionName.trim()) return;
		const newSection = {
			id: Date.now(),
			name: sectionName,
			todos: [],
		};
		setSections((prevSections) => [...prevSections, newSection]);
		setSectionName('');
	};

	const deleteSection = (sectionId) => {
		setSections((prevSections) =>
			prevSections.filter((section) => section.id !== sectionId)
		);
	};

	const addTodo = (sectionId, todoText) => {
		setSections((prevSections) =>
			prevSections.map((section) =>
				section.id === sectionId
					? {
							...section,
							todos: [
								...section.todos,
								{ id: Date.now(), text: todoText, completed: false },
							],
					  }
					: section
			)
		);
	};

	const deleteTodo = (sectionId, todoId) => {
		setSections((prevSections) =>
			prevSections.map((section) =>
				section.id === sectionId
					? {
							...section,
							todos: section.todos.filter((todo) => todo.id !== todoId),
					  }
					: section
			)
		);
	};

	const toggleTodoCompleted = (sectionId, todoId) => {
		setSections((prevSections) =>
			prevSections.map((section) =>
				section.id === sectionId
					? {
							...section,
							todos: section.todos.map((todo) =>
								todo.id === todoId
									? { ...todo, completed: !todo.completed }
									: todo
							),
					  }
					: section
			)
		);
	};

	// 남은 할 일과 완료된 할 일의 총 개수 계산
	const [remainingTodos, completedTodos] = sections.reduce(
		([remaining, completed], section) => [
			remaining + section.todos.filter((todo) => !todo.completed).length,
			completed + section.todos.filter((todo) => todo.completed).length,
		],
		[0, 0]
	);

	const today = new Date().toLocaleDateString('ko-KR', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		weekday: 'long',
	});

	return (
		<AppContainer>
			<GlobalStyle />
			<SummaryText>⏰  {today}</SummaryText>
			<CountText>
      ❎ : {remainingTodos}개, ✅ : {completedTodos}개
			</CountText>
			<Input
				type='text'
				placeholder='새 섹션 이름'
				value={sectionName}
				onChange={(e) => setSectionName(e.target.value)}
			/>
			<Button onClick={addSection}>섹션 📥</Button>
			{sections.map((section) => (
				<Section
					key={section.id}
					section={section}
					onDeleteSection={() => deleteSection(section.id)}
					addTodo={addTodo}
					deleteTodo={deleteTodo}
					onToggleCompleted={toggleTodoCompleted}
				/>
			))}
		</AppContainer>
	);
}

export default App;
