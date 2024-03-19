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
min-width: 375px;
height: 60%;
min-height: 667px;
background-color: #fff;
border-radius: 10px;
`;
const Header = styled.div`
 
`;

const TitleWrapper = styled.div`
  
`;

const Title = styled.h2`
  
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