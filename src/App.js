import {Component} from 'react'
import Popup from 'reactjs-popup'
import './App.css'
import {
  Container,
  ScoreCard,
  ScoreInfo,
  Text,
  GameChoicesList,
  Image,
  GameName,
  GameContainer,
  ResultContainer,
  PlayerContainer,
  Heading,
  ResultBox,
  PlayAgainBtn,
  PopUpContainer,
  PopUpContent,
  PopUpCloseIconButton,
  Button,
  PopUpButton,
  PopUpImage,
  ChoiceButton,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    score: 0,
    playerChoice: '',
    opponentChoice: '',
    result: '',
  }

  getOpponentChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3)
    const opponentChoice = choicesList[randomNumber].id
    return opponentChoice
  }

  checkResult = () => {
    const {playerChoice, opponentChoice} = this.state

    if (playerChoice !== opponentChoice) {
      if (
        (playerChoice === 'ROCK' && opponentChoice === 'SCISSORS') ||
        (playerChoice === 'PAPER' && opponentChoice === 'ROCK') ||
        (playerChoice === 'SCISSORS' && opponentChoice === 'PAPER')
      ) {
        this.setState(prevState => ({
          score: prevState.score + 1,
          result: 'YOU WON',
        }))
      } else {
        this.setState(prevState => ({
          score: prevState.score - 1,
          result: 'YOU LOSE',
        }))
      }
    } else {
      this.setState({
        result: 'IT IS DRAW',
      })
    }
  }

  onClickChoices = id => {
    const choice = this.getOpponentChoice()
    this.setState({playerChoice: id, opponentChoice: choice}, this.checkResult)
  }

  onClickPlayAgainBtn = () => {
    this.setState({
      playerChoice: '',
      result: '',
      opponentChoice: '',
    })
  }

  onRenderPopup = () => (
    <Popup
      modal
      trigger={
        <Button type="button" data-testid="hamburgerIconButton">
          RULES
        </Button>
      }
      closeOnDocumentClick={false}
    >
      {close => (
        <>
          <PopUpContainer>
            <PopUpContent>
              <PopUpButton type="button" onClick={() => close()}>
                <PopUpCloseIconButton />
              </PopUpButton>

              <PopUpImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </PopUpContent>
          </PopUpContainer>
        </>
      )}
    </Popup>
  )

  onRenderGameChoice = () => (
    <GameChoicesList>
      <ChoiceButton
        type="button"
        onClick={() => this.onClickChoices('ROCK')}
        data-testid="rockButton"
        choice="ROCK"
        key={choicesList[0].id}
      >
        <Image src={choicesList[0].imageUrl} alt={choicesList[0].id} />
      </ChoiceButton>

      <ChoiceButton
        choice="SCISSORS"
        key={choicesList[1].id}
        type="button"
        onClick={() => this.onClickChoices('SCISSORS')}
        data-testid="scissorsButton"
      >
        <Image src={choicesList[1].imageUrl} alt={choicesList[1].id} />
      </ChoiceButton>

      <ChoiceButton
        choice="PAPER"
        key={choicesList[2].id}
        type="button"
        onClick={() => this.onClickChoices('PAPER')}
        data-testid="paperButton"
      >
        <Image src={choicesList[2].imageUrl} alt={choicesList[2].id} />
      </ChoiceButton>
    </GameChoicesList>
  )

  onRenderResult = () => {
    const {playerChoice, opponentChoice, result} = this.state

    const player = choicesList.find(each => each.id === playerChoice)
    const opponent = choicesList.find(each => each.id === opponentChoice)

    return (
      <ResultContainer>
        <PlayerContainer>
          <Heading>YOU</Heading>
          <Image src={player.imageUrl} alt="your choice" />
        </PlayerContainer>
        <PlayerContainer>
          <Heading>OPPONENT</Heading>
          <Image src={opponent.imageUrl} alt="opponent choice" />
        </PlayerContainer>
        <ResultBox>
          <Heading>{result}</Heading>
          <PlayAgainBtn type="button" onClick={this.onClickPlayAgainBtn}>
            PLAY AGAIN
          </PlayAgainBtn>
        </ResultBox>
      </ResultContainer>
    )
  }

  render() {
    const {score, result} = this.state

    return (
      <Container>
        <GameContainer>
          <ScoreCard>
            <GameName>ROCK PAPER SCISSORS</GameName>
            <ScoreInfo>
              <Text>Score</Text>
              <Text>{score}</Text>
            </ScoreInfo>
          </ScoreCard>
          {result !== '' ? this.onRenderResult() : this.onRenderGameChoice()}
        </GameContainer>
        {this.onRenderPopup()}
      </Container>
    )
  }
}

export default App
