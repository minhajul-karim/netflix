import styled from 'styled-components'

export const Container = styled.section`
  max-width: 815px;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Title = styled.h1`
  font-size: 50px;
  color: #fff;
  text-align: center;
  width: 70%;
  margin: 0 auto;

  @media (max-width: 500px) {
    font-size: 40px;
  }
`

export const SubTitle = styled.h2`
  color: #fff;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 0;
  font-weight: normal;

  @media (max-width: 500px) {
    font-size: 26px;
  }
`
