import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0))
  const [mostVotes, setMostVotes] = useState(0)

  const getRandom = newValue => {
    let min = 0
    let max = props.anecdotes.length - 1
    return (
      setSelected(Math.floor(Math.random() * (max - min + 1) + min))
    )
  }

  const vote = newValue => {
    const jaa = [...points]
    jaa[selected] += 1
    setPoints(jaa)
    setMostVotes(jaa.indexOf(Math.max(...jaa)))
  }
  //console.log(selected);
  return (
    
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <Button handleClick={() => getRandom()} text="next anecdote" />
      <Button handleClick={() => vote()} text="vote" />
      <h1>Best anecdote</h1>
      <p>{props.anecdotes[mostVotes]}</p>
      <p>has {points[mostVotes]} votes</p>
    </div>
  )
}



const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
