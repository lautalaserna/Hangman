import words from '@/assets/word-list.json'

function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}

export { getWord }
