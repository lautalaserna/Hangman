import './Message.css'

interface Props {
  msg: string
  color: string
}

const Message = ({ msg,color }: Props) => {
  return (
    <div className={`Message ${color}`}>
      <p>{msg}</p>
    </div>
  )
}

export default Message
