import React from 'react'
import styled from 'styled-components'
import Button from './Button';

function ButtonModal2({ setModalOpen2 }) {
  const closeModal2 = () => {
    setModalOpen2(false);
  };

  // ??다시보자
  const handleClickBackground = () => {
    setModalOpen2(false);
  }

  return (
    <ModalBackground onClick={handleClickBackground}>
      {setModalOpen2 && <ModalContainer>
        <p>닫기 버튼 1개가 있고,
          외부 영역을 누르면 모달이 닫혀요.</p>
        <ButtonPosition>
          <Button onClick={closeModal2}>
            X
          </Button>
        </ButtonPosition>
      </ModalContainer>}
    </ModalBackground>
  )
}

export default ButtonModal2

const ModalContainer = styled.div`
  width: 300px;
  height: 200px;
  padding: 24px;
  /* 최상단 위치 */
  z-index: 999;
  
  /* 중앙 배치 */
  /* top, bottom, left, right 는 브라우저 기준으로 작동한다. */
  /* translate는 본인의 크기 기준으로 작동한다. */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* 모달창 디자인 */
  background-color: #FFFFFF;
  border: none;
  border-radius: 8px;

`

const ModalBackground = styled.div`
  position: fixed;
  top:0; left: 0; bottom: 0; right: 0;
  background: RGB(228, 228, 228,0.8)
`

const ButtonPosition = styled.div`
position: absolute;
right: 10px;
top: 10px;
  
`