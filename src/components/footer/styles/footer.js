import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: auto;
  padding: 70px 56px;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 15px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`

export const Link = styled.a`
  margin-bottom: 20px;
  font-size: 13px;
  text-decoration: none;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  ${Link} {
    color: ${({ theme }) => theme.color};
  }
`

export const Title = styled.p`
  font-size: 16px;
  margin-bottom: 40px;
`

export const Text = styled.p`
  font-size: 13px;
  margin-bottom: 40px;
`

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`
