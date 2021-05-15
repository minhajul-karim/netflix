import { Link as RouteLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.section`
  background-color: ${({ theme }) => theme.background};
  width: 315px;
  margin: 0 auto;
  padding: 60px 68px 90px;
  border-radius: 5px;

  @media (max-width: 500px) {
    width: 100%;
    padding: 50px 20px;
    box-sizing: border-box;
  }
`

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: ${({ maxWidth }) => maxWidth};
  margin: 0 auto;
  margin-top: ${({ marginTop }) => marginTop};

  @media (max-width: 500px) {
    text-align: center;
  }
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.color};
  font-size: 32px;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 10px;
`

export const Input = styled.input`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  border: 1px solid #333;
  border-radius: 4px;
  padding: 15px;
  margin-top: ${({ type }) => type !== 'checkbox' && '15px'};
  margin-right: ${({ type }) => type === 'checkbox' && '5px'};

  &:focus {
    outline: none;
    border-bottom: 2px solid #e87c03;
  }
`

export const Button = styled.button`
  background: ${({ background }) => (background ? '#e50914' : 'transparent')};
  border: ${({ border, theme }) =>
    border ? `${border} solid ${theme.color}` : '0'};
  border-radius: 4px;
  margin: 24px 0 12px;
  margin-right: ${({ marginRight }) => marginRight};
  padding: 15px;
  color: ${({ theme }) => theme.color};
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`

export const Label = styled.label`
  display: flex;
  justify-content: center;
`

export const Link = styled(RouteLink)`
  text-decoration: none;
  font-size: ${({ size }) => size === 'small' && '13px'};
  color: ${({ theme }) => theme.color};

  &:hover {
    text-decoration: underline;
  }
`

export const Text = styled.p`
  color: ${({ theme }) => theme.color};
`

export const SmallText = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.color};
`

export const Error = styled.p`
  color: #e87c03;
  font-size: 13px;
`

export const FlexContainer = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: ${({ flexDirection }) => flexDirection};
    justify-content: center;
  }
`

export const HorizontalRule = styled.hr`
  width: 100%;
  margin-top: 30px;

  @media (max-width: 500px) {
    display: none;
  }
`
