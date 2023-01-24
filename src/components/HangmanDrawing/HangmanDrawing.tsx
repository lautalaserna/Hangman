import './HangmanDrawing.css'

const head = <div className="head" />
const body = <div className="body" />
const leftArm = <div className="left-arm" />
const rightArm = <div className="right-arm" />
const leftLeg = <div className="left-leg" />
const rightLeg = <div className="right-leg" />

const bodyParts = [head, body, leftArm, rightArm, leftLeg, rightLeg]

interface Props {
  numberOfGuesses: number
}

const HangmanDrawing = ({ numberOfGuesses }: Props) => {
  return (
    <div className="HangmanDrawing">
      {bodyParts.slice(0, numberOfGuesses)}
      <div className="hanging1" />
      <div className="hanging2" />
      <div className="hanging3" />
      <div className="hanging4" />
      <div className="hanging5" />
    </div>
  )
}

export default HangmanDrawing
