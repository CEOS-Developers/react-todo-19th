import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'


const ItemsWrapper = styled.div`
  
`
const TodoText = styled.div`
  
`
const DeleteButton = styled.button`
  
`
const CheckButton = styled.button`
  
`

function ListsItems({todo, data, deleteTodo, toggleTodo}) {
  

  return (
    <ItemsWrapper>
      <TodoText>{todo}</TodoText>
      <DeleteButton onClick={() => deleteTodo(data.id)}>delete</DeleteButton>
      <CheckButton onClick={() => toggleTodo(data.id)}>check</CheckButton>
    </ItemsWrapper>
  )
}

export default ListsItems