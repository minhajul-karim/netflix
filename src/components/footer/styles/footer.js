import styled from 'styled-components'

export const Container = styled.div`
  // background: ${({ isDark }) => (isDark ? '#000' : '#fff')};
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

export const Column = styled.div`
  // color: ${({ isDark }) => (isDark ? '#757575' : '#000')};
  display: flex;
  flex-direction: column;
  text-align: left;
`

export const Link = styled.a`
  // color: ${({ isDark }) => (isDark ? '#757575' : '#000')};
  margin-bottom: 20px;
  font-size: 13px;
  text-decoration: none;
`

export const Title = styled.p`
  font-size: 16px;
  // color: ${({ isDark }) => (isDark ? '#757575' : '#000')};
  margin-bottom: 40px;
`

export const Text = styled.p`
  font-size: 13px;
  // color: ${({ isDark }) => (isDark ? '#757575' : '#000')};
  margin-bottom: 40px;
`

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`
