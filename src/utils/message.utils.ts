function getMessage(isLosser:boolean, isWinner:boolean) {
  if (isLosser) return 'Ahorcado! Perdiste...'
  if (isWinner) return 'Ganaste! Felicidades!'
  return ''
}

function getColor(isLosser:boolean, isWinner:boolean) {
  if (isLosser) return 'red'
  if (isWinner) return 'green'
  return ''
}

export { getMessage, getColor }
