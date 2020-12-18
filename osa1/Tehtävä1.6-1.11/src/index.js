import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => <tr><td>{props.text} {props.value}</td></tr>

const Statistics = (props) => {
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  const all = good + bad + neutral
  const average = (good - bad) / all
  const positive = good / all * 100
  return (
    <table>
      <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutal" value={neutral} />
          <StatisticLine text="bad" value={bad} />

          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} />
      </tbody>
    </table>
  )
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const positiveFeed = newValue => setGood(good + 1)


  const negativeFeed = newValue => setBad(bad + 1)

  const neutralFeed = newValue => setNeutral(neutral + 1)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => positiveFeed()} text="positive" />
      <Button handleClick={() => neutralFeed()} text="neutral" />
      <Button handleClick={() => negativeFeed()} text="negative" />

      <h2>Statistics</h2>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
