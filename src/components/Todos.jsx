import React from 'react';
import Date from './Date';
import ListsWrapper from './Lists/ListsWrapper';
import ListsCount from './Lists/ListsCount';
import styled from 'styled-components';


export default function Todos() {
const TodoContainer = styled.div`
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 70%;
    display: flex;
    margin: 10vh auto;
`
const Wrapper = styled.div`
    background-color: antiquewhite;
    display: flex;
    flex-direction: row;
`
const TodoLists = styled.div`
    background-color: beige;
    display: flex;
    flex-direction: column;
`
const DoneLists = styled.div`
    background-color: beige;
    display: flex;
    flex-direction: column;
`
  return (
    <TodoContainer>
        <Date/>
        <Wrapper>
        <TodoLists>
            <ListsWrapper/>
            <ListsCount/>
        </TodoLists>
        <DoneLists>
            <ListsWrapper/>
            <ListsCount/>
        </DoneLists>
        </Wrapper>
    </TodoContainer>
  )
}
