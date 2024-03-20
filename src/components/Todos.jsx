import React from 'react';
import Date from './Date';
import ListsWrapper from './Lists/ListsWrapper';
import ListsCount from './Lists/ListsCount';
import styled from 'styled-components';
import TodoInputField from './Lists/TodoInputField';

//전체 틀 잡기
const TodoContainer = styled.div`
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    width: 70vw;
    height: 70vh;
    display: flex;
    margin: 10vh auto;
    border: 0.05rem solid #CBC0C0;
    border-radius: 25px;
    box-shadow: 5px 4px 4px #CBC0C0;
    padding: 2rem;
`

//list가 표시되는 하단부
const Wrapper = styled.div`
    background-color: antiquewhite;
    display: flex;
    flex-direction: row;
`
const TodoLists = styled.div`
    background-color: beige;
    display: flex;
    flex-direction: column;
    width: 50%;
   `
const DoneLists = styled.div`
    background-color: beige;
    display: flex;
    flex-direction: column;
    width: 50%;
`


export default function Todos() {
  return (
    <TodoContainer>
        <Date/>
        <Wrapper>
        <TodoLists>
            <TodoInputField/>
            <ListsWrapper/>
            <ListsCount/>
        </TodoLists>
        <DoneLists>
            <h4>Done</h4>
            <ListsWrapper/>
            <ListsCount/>
        </DoneLists>
        </Wrapper>
    </TodoContainer>
  )
}
