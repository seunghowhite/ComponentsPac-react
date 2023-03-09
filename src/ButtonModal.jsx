import React from 'react'
import styled from 'styled-components'
import Button from './Button';

function ButtonModal({ setModalOpen }) {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <ModalBackground>
      {setModalOpen && <ModalContainer>
        <p>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요</p>
        <ButtonPosition>
          <Button color='red' size='small' onClick={closeModal}>
            X
          </Button>
          <Button color='green' size='small'>확인</Button>
        </ButtonPosition>
      </ModalContainer>}
    </ModalBackground>
  )
}

export default ButtonModal

const ModalContainer = styled.div`
  width: 500px;
  height: 300px;
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
  display: flex;
  justify-content: end;
  margin-top: 12em;
  
`