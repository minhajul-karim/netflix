import { Link as ReachRouterLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  margin: 0 56px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 20px;
    margin-bottom: 50px;
  }
`

export const Group = styled.div`
  display: flex;
  justify-content: center;
  justify-content: ${({ justifyContent }) =>
    justifyContent === 'space-between' ? 'space-between' : 'center'};
  align-items: center;

  @media (max-width: 550px) {
    flex-direction: ${({ directionCol }) => directionCol && 'column'};
    justify-content: ${({ directionCol }) => directionCol && 'center'};
    align-items: ${({ directionCol }) => directionCol && 'flex-start'};
    position: ${({ shouldAbsolute }) => shouldAbsolute && 'absolute'};
    top: ${({ shouldAbsolute }) => shouldAbsolute && '70px'};
    left: ${({ shouldAbsolute }) => shouldAbsolute && '0'};
    right: ${({ shouldAbsolute }) => shouldAbsolute && '0'};
  }
`

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 8px);
  min-height: 600px;
  border-bottom: ${({ border }) => border && '8px solid #222'};
  background-color: #5a4646;
  background-image: url(${({ src }) =>
    src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg'});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: ${({ darken }) => darken && 'multiply'};

  @media (max-width: 1100px) {
    ${({ dontShowOnSmallScreen }) =>
      dontShowOnSmallScreen && `background: none;`}
  }
`

export const Link = styled.p`
  font-size: 20px;
  color: #fff;
  text-decoration: none;
  margin-right: 30px;
  font-weight: ${({ active }) => (active ? '700' : 'normal')};
  cursor: pointer;
  letter-spacing: ${({ active }) => (active ? '0' : '0.25px')};

  &:hover {
    font-weight: bold;
    letter-spacing: 0;
  }
  &:last-of-type {
    margin-right: 0;
  }
`

export const ButtonLink = styled(ReachRouterLink)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 16px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    background: #f40612;
  }
`

export const Logo = styled.div`
  height: 32px;
  width: 108px;
  margin-right: 40px;
  background: url(/images/misc/logo.svg);
  background-repeat: no-repeat;
  background-size: contain;

  @media (max-width: 500px) {
    width: ${({ setSmallLogo }) => setSmallLogo && '20px'};
    height: ${({ setSmallLogo }) => setSmallLogo && '40px'};
    background: ${({ setSmallLogo }) =>
      setSmallLogo && 'url(/images/misc/small.png)'};
    background-repeat: ${({ setSmallLogo }) => setSmallLogo && 'no-repeat'};
    background-size: ${({ setSmallLogo }) => setSmallLogo && 'contain'};
  }

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`

export const Feature = styled(Container)`
  // padding: 150px 0 500px 0;
  width: 50%;
  height: 100%;
  flex-direction: column;
  align-items: normal;
  justify-content: center;

  @media (max-width: 550px) {
    width: 90%;
  }

  @media (max-width: 200px) {
    display: none;
  }
`

export const FeatureCallOut = styled.h2`
  color: white;
  font-size: 50px;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;

  @media (max-width: 550px) {
    font-size: 40px;
  }
`

export const Text = styled.p`
  color: white;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);

  @media (max-width: 550px) {
    font-size: 18px;
    line-height: 25px;
  }
`

export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  border-width: 0;
  padding: 10px 20px;
  border-radius: 5px;
  max-width: 130px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.5s ease;

  &:hover {
    background: #ff1e1e;
    color: white;
  }
`

export const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;

  img {
    filter: brightness(0) invert(1);
    width: 25px;
  }
`

export const SearchInput = styled.input`
  background-color: #44444459;
  color: white;
  border: 1px solid white;
  transition: width 0.5s;
  height: 30px;
  font-size: 14px;
  margin-left: ${({ active }) => (active === true ? '10px' : '0')};
  padding: ${({ active }) => (active === true ? '0 10px' : '0')};
  opacity: ${({ active }) => (active === true ? '1' : '0')};
  width: ${({ active }) => (active === true ? '110px' : '0px')};
`

export const Picture = styled.img`
  width: 35px;
  height: 35px;
  object-fit: cover;
  padding: 10px 0;
  cursor: pointer;
`

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: #000;
  padding: 10px;
  width: 100px;
  top: 53px;
  right: 0;

  ${Group}:last-of-type ${Link} {
    cursor: pointer;
  }

  ${Group} {
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }

    ${Link}, ${Picture} {
      cursor: default;
    }
  }

  button {
    margin-right: 10px;
  }

  p {
    font-size: 16px;
    margin: 0;
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  position: relative;

  button {
    cursor: pointer;
  }

  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`

export const ThemeButton = styled.button`
  width: 35px;
  height: 35px;
  padding: 10px 0;
  border: 0;
  font-size: 20px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
