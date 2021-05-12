import styled from 'styled-components'

export const Container = styled.section`
  margin-top: 30px;
`

export const Title = styled.h1`
  font-size: 40px;
  color: ${({ theme }) => theme.color};
  text-align: center;
`

export const Picture = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  box-sizing: border-box;
`

export const Name = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.color};
  text-align: center;
`

export const Items = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;

  &:last-of-type {
    margin-right: 0;
  }
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;

  &:hover > ${Picture} {
    border: 2px solid #fff;
  }

  &:hover ${Name} {
    font-weight: bold;
  }

  &:last-of-type {
    margin-right: 0;
  }
`
