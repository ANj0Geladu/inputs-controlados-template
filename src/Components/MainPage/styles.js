import styled from 'styled-components'

export const MainContainer = styled.main`
    flex: 1;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 64px;
`

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const Input = styled.input`
    width: 100%;
    padding: 8px;
`

export const Botao = styled.button`
   border: 5px outset gray;
`