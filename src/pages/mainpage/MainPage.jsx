import React from "react";
import styled from "styled-components";
import AddButton from "../buttons/AddButton";
import DateBar from "./DateBar";

const MainPage = () => {
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
                <input id="todoInput" type="text" placeholder="오늘의 할일..."/>
                <AddButton/>
            </InputContainer>
            <ButtonContainer>
                <AddButton/>
                <AddButton/>
                <AddButton/>  
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
 width: 70%
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

`;

const TodoInput = styled.input`
 
`;

const Button = styled.button`
 
`;

const ButtonContainer = styled.div`

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