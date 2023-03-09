import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './Button'
import ButtonModal from './ButtonModal'
import ButtonModal2 from './ButtonModla2'
import DropDown1 from './DropDown1'
import DropDown2 from './DropDown2'
import Input from './Input'

function App() {
  // input
  const [name, setName] = useState(``)
  const [price, setPrice] = useState(0)
  const SubmitHander = () => {
    name === '' && price === 0 ? alert('이름과값을입력하시오') :
      alert(`이름: ${name} 가격: ${price}`)
  }
  const onchangeName = (e) => { setName(e.target.value) }
  const onchangePrice = (e) => { setPrice(e.target.value) }
  //modal
  const [modalOpen, setModalOpen] = useState(false)
  const [modalOpen2, setModalOpen2] = useState(false)

  const showModal = () => {
    setModalOpen(true)
  }
  const showModal2 = () => {
    setModalOpen2(true)
  }


  return (
    <>
      {/* 버튼 */}
      <h1>Button</h1>
      <Wrapper>
        <Button size='large' color='bordergreen' onClick={(e) => alert("버튼을 만들어 봅시다")}>Large Primary Button»</Button>
        <Button size='medium' color='green' >Medium button</Button>
        <Button size='small' color='green'>smallbutton</Button>
      </Wrapper>
      <Wrapper>
        <Button size='large' color='borderred' onClick={() => prompt("어렵나요?")}>Large Primary Button🔔</Button>
        <Button size='medium' color='red'>Medium button</Button>
        <Button size='small' color='red'>smallbutton</Button>
      </Wrapper>
      {/* 인풋 */}
      <h1>Input</h1>
      <form onSubmit={SubmitHander}>
        이름<Input size='large' value={name} onChange={onchangeName} type='text' />
        가격<Input size='large' onChange={onchangePrice} type='number' />
        <Button size='small' color='green'>저장</Button>
      </form>
      {/* 모달 */}
      <h1>Modal</h1>
      <Wrapper>
        <Button size='small' color='green' onClick={showModal}>openModal</Button>
        <Button size='large' color='borderred' onClick={showModal2}>openModal</Button>
        {modalOpen && <ButtonModal setModalOpen={setModalOpen} />}
        {modalOpen2 && <ButtonModal2 setModalOpen2={setModalOpen2} />}
      </Wrapper>
      {/* 셀렉트 */}
      <WrapperSelct>
        <h1>select</h1>
        <DropDown1></DropDown1>
        <DropDown2></DropDown2>
      </WrapperSelct>
    </>
  )
}

export default App

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 10px;
`
const WrapperSelct = styled.div`
  gap: 10px;
  margin-top: 10px;
  height:200px;
  border-radius: 8px;
  border:5px solid #DDDDDD;
`

