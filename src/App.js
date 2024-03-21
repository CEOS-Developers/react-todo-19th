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

const SummaryText = styled.h2`
	margin-top: 20px;
`;

function App() {
	const [sections, setSections] = useState([]);
	const [sectionName, setSectionName] = useState('');

	// 로컬 스토리지에서 섹션 데이터 불러오기
	useEffect(() => {
		const storedSections = JSON.parse(localStorage.getItem('sections')) || [];
		setSections(storedSections);
	}, []);

	// 섹션 또는 할 일이 변경될 때마다 로컬 스토리지 업데이트
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
							todos: [...section.todos, { id: Date.now(), text: todoText }],
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

	// 남은 할 일의 총 개수 계산
	const remainingTodos = sections.reduce(
		(acc, section) => acc + section.todos.length,
		0
	);

	// 오늘의 날짜 표시
	const today = new Date().toLocaleDateString('ko-KR', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		weekday: 'long',
	});

	return (
		<AppContainer>
			<GlobalStyle />
			<SummaryText>
				{today} - 남은 할 일: {remainingTodos}개
			</SummaryText>
			<Input
				type='text'
				placeholder='새 섹션 이름'
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
