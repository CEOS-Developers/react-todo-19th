import React, { useState } from "react";

import styled from "styled-components";
import DateBar from "./DateBar";
import AddButton from "../buttons/AddButton";
import DoneButton from "../buttons/DoneButton";
import TrashButton from "../buttons/TrashButton";
import ResetButton from "../buttons/ResetButton";

const MainPage = () => {
    const [inputValue, setInputValue] = useState(""); // 입력 값 추적
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };








    return (
        <PageContainer>
            <ContentContaner>
            <Header>
                <TitleWrapper>
                    <Title>투두리스트</Title>
                    <ProgressStatusNumber/>
                </TitleWrapper>
                <DateBar/>
            </Header>

            <InputContainer>
                <TodoInput 
                type="text" 
                placeholder="오늘의 할일..." 
                value={inputValue} // 입력값 상태
                onChange={handleInputChange}
                hasContent={inputValue.length > 0} //입력값 있으면 prop 전달!!
                />
                <AddButton/>
            </InputContainer>
            <ButtonContainer>
                <TrashButton/>
                <DoneButton/>
                <ResetButton/>  
            </ButtonContainer>
            <ListContainer>
                <TodoList/>
                <DoneList/>
            </ListContainer>
            <Footer>
                <ProgressBar/>
            </Footer>
            </ContentContaner>
        </PageContainer>
    )
}

export default MainPage;


const PageContainer = styled.main`
min-width: 375px;
width: 100vw;
height: 100vh;
background-color: #F9FFD1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const ContentContaner = styled.body`
width: 40%;
min-width: 260px; //padding 계산해서 최소 너비 설정
height: 60%;
min-height: 420px;  //padding 계산해서 최소 높이 설정
padding: 50px 20px 30px 20px;
background-color: #fff;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;

`;
const Header = styled.div`
 width: 80%
`;

const TitleWrapper = styled.div`
  
`;

const Title = styled.h2`
font-family: SUIT-Regular;
font-size: 25px;
font-weight: 800;
`;

const ProgressStatusNumber = styled.span`
 
`;

const InputContainer = styled.div`
width: 80%;
display: flex;
flex-direction: row; //인풋칸이랑 버튼 가로로 나열되게
justify-content: center;
margin-top: 20px;
`;

const TodoInput = styled.input`
flex: 1;
border: none;
border-bottom: 1.5px solid ${props => props.hasContent ? '#4A90E2' : '#ccc'}; //입력된 값 있을 때 파란색으로 변경
color: ${props => props.hasContent ? '#4A90E2' : '#000'};
font-family: 'SUIT-Regular';
font-size: 12px;
margin-right: 10px; 

&:focus {
    outline: none; 
    border-bottom: 1.5px solid ${props => props.hasContent ? '#4A90E2' : '#ccc'};
}
`;


const ButtonContainer = styled.div`
  display: flex; 
  flex-direction: row; 
  justify-content: flex-end;  
  width: 80%;
  margin-top: 10px;
  margin-left:10px;
`;


const ListContainer = styled.div`

`;

const TodoList = styled.ul`
 
`;

const DoneList = styled.ul`
  
`;

const Footer = styled.div`
  
`;

const ProgressBar = styled.div`

`;