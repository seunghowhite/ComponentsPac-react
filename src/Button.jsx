import React from 'react'
import styled, { css } from 'styled-components'

const BUTTONSIZES = {
  large: css`
    width: 200px;
    height: 50px;
  `,
  medium: css`
    width: 130px;
    height: 45px;
  `,
  small: css`
    width: 100px;
    height: 40px;
  `
}

const COLORS = {
  red: css`
    cursor: pointer;
    background-color: #fab1a0;
    color:#E16A6B;
      &:active{
        background-color: #d63031;
      }
  `,
  green: css`
    cursor: pointer;
    background-color: #55efc4;
      &:active{
        background-color: #00b894;
      }
  `,
  bordergreen: css`
    cursor: pointer;
    border: 3px solid rgb(85, 239, 196);
    background-color: rgb(255, 255, 255);
    font-weight: 600;
      &:active{
        background-color: #F0F0F0;
      }
  `,
  borderred: css`
    cursor: pointer;
    border: 3px solid #fab1a0;
    background-color: rgb(255, 255, 255);
    color:#E16A6B;
    font-weight: 600;
      &:active{
        background-color: #F0F0F0;
      }
  `
}

function Button({ size, color, Positoin, children, ...승호 }) {
  const ButtonSize = BUTTONSIZES[size]
  const ButtonColor = COLORS[color]
  return (
    <StlyedButton
      ButtonSize={ButtonSize}
      ButtonColor={ButtonColor}
      // ButtonPosition={ButtonPosition}
      {...승호}>{children}
    </StlyedButton>
  )
}

export default Button

const StlyedButton = styled.button`
    border-radius: 8px;
    border: none;
    margin: 5px;
    ${(props) => (props.ButtonSize)}
    ${(props) => (props.ButtonColor)}
  `
