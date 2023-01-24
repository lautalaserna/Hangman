import { Key } from './components/'
import './Keyboard.css'

const keys: string[] = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'ñ',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]

interface Props {
  disabled: boolean
  activeLetters: string[]
  inactiveLetters: string[]
  addGuessedLetter: (letter: string) => void
}

const Keyboard = ({ activeLetters, inactiveLetters, addGuessedLetter, disabled }: Props) => {
  return (
    <div className="Keyboard">
      {keys.map(key => {
        const isActive = activeLetters.includes(key)
        const isInactive = inactiveLetters.includes(key)
        return (
          <Key
            key={key}
            letter={key}
            addGuessedLetter={addGuessedLetter}
            isActive={isActive}
            isInactive={isInactive}
            disabled={isActive || isInactive || disabled}
          />
        )
      })}
    </div>
  )
}

export default Keyboard
