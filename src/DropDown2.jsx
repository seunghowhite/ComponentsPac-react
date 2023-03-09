import React, { useCallback, useState } from 'react'
import styled from 'styled-components';

function DropDown2() {
  //세렉트
  const selectList = ["리엑트", "자바", "스프링", "리액트"];
  const [list, setList] = useState(false);
  const [choice, setchoice] = useState("리액트");
  const choiceone = (e) => {
    setchoice(e.target.value)
    setList(false)
  }

  const onSelect = (event) => {
    setchoice(event.target.value);
  };
  return (
    <DropdownMenu >
      <DropdownButton onClick={() => setList((toggle) => !toggle)}>
        <div>{choice}</div>
        <div></div>
        <div>▼</div>
      </DropdownButton>
      <DropdownContent onChange={onSelect}>
        {
          list && selectList.map((item) => (
            <DropdownItem value={item} key={item} onClick={choiceone}>
              {item}
            </DropdownItem>
          ))
        }
      </DropdownContent>
    </DropdownMenu >
  )
}

export default DropDown2

const DropdownMenu = styled.div`

  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: white;
  color: black;
  padding: 12px;
  font-size: 16px;
  width: 300px;
  border: 1px solid lightgray;
  border-radius: 10px;
  cursor: pointer;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
`;

const DropdownContent = styled.div`
  width: 300px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  border: none;
  border-radius: 10px;
  overflow: hidden;
`;

const DropdownItem = styled.button`
  color: black;
  width: 300px;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  background-color: white;
  border: 1px transparent;
  border-radius: 10px;
  &:hover {
    background-color: lightgray;
  }
  
`;