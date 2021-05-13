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
  background: #e50914;
  border: 0;
  border-radius: 4px;
  margin: 24px 0 12px;
  padding: 15px;
  color: #fff;
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
  // color: #8c8c8c;
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

export const RememberMeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
