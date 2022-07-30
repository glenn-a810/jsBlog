// import logo from "./logo.svg";
import './App.css'
import { useState } from 'react'

function App() {
  // let post = 'Head Title A'
  let [title, setTitle] = useState(['C Content Title', 'A Content Title', 'B Content Title'])
  let [like, setLike] = useState(0)
  const [modal, setModal] = useState(false)

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
        <h4
          onClick={() => {
            modal === true ? setModal(false) : setModal(true)
          }}
        >
          {title[2]}
        </h4>
        <p>2022.07.27</p>
      </div>

      {modal === true ? <Modal /> : null}
    </div>
  )
}

const Modal = () => {
  return (
    <div className="modal">
      <h4>Modal Title</h4>
      <p>Modal Date</p>
      <p>Modal Contents</p>
    </div>
  )
}

export default App
