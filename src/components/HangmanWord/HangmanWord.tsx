import './HangmanWord.css'

interface Props {
  guessedLetters: string[]
  wordToGuess: string
}

const HangmanWord = ({ guessedLetters, wordToGuess }: Props) => {
  return (
    <div className="HangmanWord">
      {wordToGuess.split('').map((letter, i) => (
        <span className="letter-space" key={i}>
          <span className={`letter ${guessedLetters.includes(letter) ? 'visible' : 'hidden'}`} key={i}>
            {letter}
          </span>
        </span>
      ))}
    </div>
  )
}

export default HangmanWord
