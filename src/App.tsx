import { getWord, getMessage, getColor } from '@/utils'
import { Message, HangmanDrawing, HangmanWord, Keyboard } from '@/components'
import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord)
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const activeLetters = guessedLetters.filter(letter => wordToGuess.includes(letter))
  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))
  const isLosser = incorrectLetters.length >= 6
  const isWinner = wordToGuess.split('').every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLosser || isWinner) return

      setGuessedLetters(currentLetters => [...currentLetters, letter])
    },
    [guessedLetters]
  )

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      e.preventDefault()
      const key = e.key

      if (!key.match(/^[a-z]$/) && key != 'Enter') return

      if (key.match(/^[a-z]$/)) {
        addGuessedLetter(key)
      } else if (key == 'Enter') {
        setGuessedLetters([])
        setWordToGuess(getWord())
      }
    }
    document.addEventListener('keypress', handler)
    return () => {
      document.removeEventListener('keypress', handler)
    }
  }, [guessedLetters])

  return (
    <div className="App">
      <Message msg={getMessage(isLosser, isWinner)} color={getColor(isLosser, isWinner)} />
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <Keyboard
        activeLetters={activeLetters}
        inactiveLetters={incorrectLetters}
        addGuessedLetter={addGuessedLetter}
        disabled={isLosser || isWinner}
      />
    </div>
  )
}

export default App
