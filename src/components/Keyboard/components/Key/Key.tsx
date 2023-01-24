export interface KeyInterface {}
import './Key.css'

interface Props {
  letter: string
  addGuessedLetter: (letter: string) => void
  isActive?: boolean
  isInactive?: boolean
  disabled?: boolean
}

const Key = ({ letter, addGuessedLetter, isActive, isInactive, disabled }: Props) => {
  return (
    <button
      className={`btn ${isActive ? 'active' : ''} ${isInactive ? 'inactive' : ''}`}
      onClick={() => addGuessedLetter(letter)}
      key={letter}
      disabled={isActive || isInactive || disabled}
    >
      {letter}
    </button>
  )
}

export default Key
