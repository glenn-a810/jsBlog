// import logo from "./logo.svg";
import './App.css'
import { useState } from 'react'

function App() {
  // let post = 'Head Title A'
  const [title, setTitle] = useState(['C Content Title', 'A Content Title', 'B Content Title'])
  const [like, setLike] = useState([0, 0, 0])
  const [modal, setModal] = useState(false)
  const [titleId, setTitleId] = useState(0)
  const [inputTitle, setInputTitle] = useState('')

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Blog</h4>
      </div>

      {title.map((parm, i) => {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setTitleId(i)
                modal === false ? setModal(true) : setModal(false)
              }}
            >
              {title[i]}
              <span
                onClick={(e) => {
                  e.stopPropagation()
                  let likeCopy = [...like]
                  likeCopy[i] += 1
                  setLike(likeCopy)
                }}
              >
                {' '}
                👍{like[i]}
              </span>
            </h4>
            <p>2022.07.31</p>
            <p>
              <button
                onClick={() => {
                  console.log(i)
                  const copyDelTitle = [...title]
                  copyDelTitle.splice(i, 1)
                  setTitle(copyDelTitle)
                  console.log(copyDelTitle)
                }}
              >
                Delete
              </button>
            </p>
          </div>
        )
      })}

      <input
        onChange={(e) => {
          setInputTitle(e.target.value)
        }}
      />
      <button
        onClick={() => {
          const copyTitle = [...title]
          let addTitle = copyTitle.concat(inputTitle)
          setTitle(addTitle)
          // console.log(addTitle)
        }}
      >
        ADD
      </button>

      {modal === true ? <Modal color={'skyblue'} title={title} titleId={titleId} /> : null}
    </div>
  )
}

const Modal = (props) => {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.title[props.titleId]}</h4>
      <p>Modal Date</p>
      <p>Modal Contents</p>
      <button>EDIT</button>
    </div>
  )
}

export default App
