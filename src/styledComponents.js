import styled from 'styled-components'
import {RiCloseLine} from 'react-icons/ri'

export const Container = styled.div`
  background-color: #223a5f;
  padding: 2rem 2rem;
  height: 100vh;

  @media (max-width: 500px) {
    padding: 2rem 1rem;
  }
`

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`

export const ScoreCard = styled.div`
  border: 1px solid white;
  padding: 3rem 2rem;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;

  @media (max-width: 500px) {
    width: 100%;
  }
`

export const GameName = styled.h1`
  width: 12%;
  color: white;
  font-weight: 500;
  font-size: 3rem;

  @media (max-width: 500px) {
    font-size: 2rem;
  }
`

export const ScoreInfo = styled.div`
  background-color: white;
  border-radius: 1rem;
  padding: 1rem 2rem;
  text-align: center;
  height: 100%;
`

export const Text = styled.p`
  color: darkblue;
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  font-family: Roboto;

  @media (max-width: 500px) {
    font-size: 2rem;
  }
`

export const GameChoicesList = styled.ul`
  height: 35rem;
  padding-inline-start: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 0;
  column-gap: 1.5rem;
  margin-top: 10rem;

  width: 100%;
`
export const GameChoiceListItem = styled.li``

export const Image = styled.img`
  height: 15rem;
  width: 15rem;
  object-fit: cover;
  object-position: center;
  @media (max-width: 500px) {
    height: 15rem;
    width: 15rem;
  }
`

export const ResultContainer = styled.ul`
  padding-inline-start: 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 2rem 2rem;
  column-gap: 2rem;
  margin-top: 10rem;
`

export const PlayerContainer = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  width: 45%;
  text-align: center;
  align-items: center;
`

export const Heading = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  @media (max-width: 500px) {
    font-size: 2rem;
  }
`

export const ResultBox = styled.li`
  width: 95%;
  text-align: center;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`

export const PlayAgainBtn = styled.button`
  padding: 1rem 2rem;
  background-color: white;
  color: darkblue;
  font-weight: 500;
  align-self: center;
  border-radius: 1rem;
  border: none;
  outline: none;
`

// popup

export const Button = styled.button`
  background-color: white;
  color: darkblue;
  font-weight: bold;
  border-radius: 1rem;
  padding: 1rem 2rem;
  border: none;
  outline: none;
  position: absolute;
  bottom: 5rem;
  right: 5rem;
`

export const PopUpContainer = styled.div`
  width: 90%;
  background-color: white;
  border-radius: 1rem;
  padding: 2rem 2rem;
  position: relative;
  margin: auto;
`

export const PopUpContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const PopUpButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  position: absolute;
  top: 1rem;
  right: 1rem;
  margin-bottom: 2rem;
`

export const PopUpCloseIconButton = styled(RiCloseLine)`
  font-size: 2rem;
  color: black;
`

export const PopUpImage = styled.img`
  height: 90%;
  width: 90%;
  object-fit: cover;
  object-position: center;
  margin-top: 3rem;
`

export const ChoiceButton = styled.button`
  border: none;
  outline: none;
  background: transparent;
  list-style-type: none;
  width: ${props => {
    switch (props.choice) {
      case 'ROCK':
        return '45%'
      case 'SCISSORS':
        return '45%'
      case 'PAPER':
        return '91%'
      default:
        return null
    }
  }};
  text-align: ${props => {
    switch (props.choice) {
      case 'ROCK':
        return 'right'
      case 'SCISSORS':
        return 'left'
      case 'PAPER':
        return 'center'
      default:
        return null
    }
  }};
  margin: 0;
`
