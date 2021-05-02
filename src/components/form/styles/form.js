import { Link as RouteLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.section`
  background: rgba(0, 0, 0, 0.75);
  width: 315px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 60px 68px 90px;
`

export const Form = styled.form``

export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 10px;
`

export const Input = styled.input`
  background: #333;
  color: #fff;
  border: 0;
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
  color: ${({ color }) => color};

  &:hover {
    text-decoration: underline;
  }
`

export const Text = styled.p`
  color: #8c8c8c;
`

export const SmallText = styled.span`
  font-size: 13px;
  color: ${({ color }) => (color === 'bright' ? '#b3b3b3' : '#8c8c8c')};
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
