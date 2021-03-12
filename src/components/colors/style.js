import styled from 'styled-components'

export const Container = styled.main`
    width: 100%;
    height: 100%;
    background-color: #d5d5d5;
    position: relative;
`

export const ColorContainer = styled.div`

`

export const FormContainer = styled.form`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const TextInput = styled.input.attrs({type: 'text'})`
    padding: 5px 10px;
`

export const ColorInput = styled.input.attrs({type: 'color'})`
    width: 50px;
    height: 50px;
`

export const Button = styled.button`
    padding: 5px 10px;
    background-color: #333;
`