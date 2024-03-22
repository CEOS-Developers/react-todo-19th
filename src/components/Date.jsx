import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'
dayjs.locale('ko')

const DateWrapper = styled.div`
  width: 100%;
  height: 8.583rem;
  display: flex;
  flex-direction: column;
  border-bottom: 0.05rem solid #968E8E;
`
const Title = styled.div`
  text-align: end;
  color: #968E8E;
  font-weight: 200;
  font-size: 1.3rem;
`
const GetDate = styled.h1`
  margin: 0;
  font-size: 3rem;
  font-weight: bold;
`
const GetWeek = styled.h3`
  margin: 0.5rem 0;
  font-size: 2rem;
  font-weight: normal;
`


function Date() {
const date = dayjs();
const dateFormat = date.format('YYYY년 MM월 DD일');
const weekFormat = date.format('dddd')


  return (
    <DateWrapper>
      <Title>To do List</Title>
      <GetDate>{dateFormat}</GetDate>
      <GetWeek>{weekFormat}</GetWeek>
    </DateWrapper>
  )
}

export default Date