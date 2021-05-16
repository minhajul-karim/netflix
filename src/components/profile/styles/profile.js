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
  width: 110px;
  height: 110px;
  object-fit: cover;
  box-sizing: border-box;

  @media (max-width: 500px) {
    width: 90px;
    height: 90px;
  }
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
  flex-wrap: wrap;
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

  @media (max-width: 500px) {
    &:last-of-type {
      margin-right: 0;
    }
  }
`

export const AddButton = styled.button`
  background: #b5afaf;
  border: 0;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin-bottom: 40px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: #fff;
  }

  @media (max-width: 500px) {
    width: 50px;
    height: 50px;
  }

  ${Picture} {
    width: 50px;
    height: 50px;
    margin-left: 0;

    @media (max-width: 500px) {
      width: 30px;
      height: 30px;
    }
  }
`
