// import logo from "./logo.svg";
import './App.css'
import { useState } from 'react'

function App() {
  let post = 'Head Title A'
  let [title, setTitle] = useState(['C Content Title', 'A Content Title', 'B Content Title'])
  let [like, setLike] = useState(0)

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Blog</h4>
      </div>
      <div className="list">
        <button
          onClick={() => {
            let sortCopy = [...title]
            sortCopy.sort()
            setTitle(sortCopy)
          }}
        >
          Sort
        </button>
        <h4>
          {title[0]}{' '}
          <span
            onClick={() => {
              setLike(like++)
            }}
          >
            👍
          </span>
          {like}
        </h4>
        <button
          onClick={() => {
            let copy = [...title]
            copy[0] = 'Content Title A changed'
            setTitle(copy)
          }}
        >
          Change
        </button>
        <p>2022.07.27</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2022.07.27</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>2022.07.27</p>
      </div>
    </div>
  )
}

export default App
