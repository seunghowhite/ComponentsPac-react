import styled, { css } from 'styled-components'


const INPUTSIZES = {
  large: css`
    width: 200px;
    height: 40px;
    border-radius:8px ;
    border: 1px solid black;
  `
}

const Input = ({ size, ...rest }) => {
  const Inputsize = INPUTSIZES[size]
  return (
    <StyledInput Inputsize={Inputsize} {...rest}></StyledInput>
  )

}


export default Input


const StyledInput = styled.input`
  ${(p) => p.Inputsize}
`