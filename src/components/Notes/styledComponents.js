import styled from 'styled-components'

export const MainContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center:
height:100vh;
padding:30px;
`

export const Heading = styled.h1`
  font-family: 'Bree Serif';
  font-size: 35px;
  color: #4c63b6;
  text-align: center;
`
export const InnerContainer = styled.form`
  height: 35vh;
  width: 95%;
  box-shadow: 0px 0px 16px 1px #bfbfbf;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 10px;
`
export const Input = styled.input`
  height: 40px;
  width: 100%;
  background-color: transparent;
  color: #475569;
  border: none;
  margin-bottom: 20px;
  outline: none;
`

export const TextArea = styled.textarea`
  background-color: #ffffff;
  color: #475569;
  border: none;
  outline: none;
`
export const Button = styled.button`
  height: 50px;
  width: 60px;
  border: none;
  padding: 10px;
  background-color: #4c63b6;
  border-radius: 5px;
  color: #ffffff;
  align-self: flex-end;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const Container = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`
export const Container1 = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`
export const Image = styled.img`
  height: 200px;
  width: 200px;
  margin: 10px;
`
export const Head = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: bold;
  color: #1e293b;
`
export const Para = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #1e293b;
`
