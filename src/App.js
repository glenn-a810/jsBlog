// import logo from "./logo.svg";
import './App.css'
import { useState } from 'react'

function App() {
  // let post = 'Head Title A'
  let [title, setTitle] = useState(['C Content Title', 'A Content Title', 'B Content Title'])
  let [like, setLike] = useState([0, 0, 0])
  const [modal, setModal] = useState(false)

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Blog</h4>
      </div>

      {title.map((parm, i) => {
        return (
          <div className="list">
            <h4>
              {title[i]}
              <span
                onClick={() => {
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
          </div>
        )
      })}
      {/*<div className="list">*/}
      {/*  <button*/}
      {/*    onClick={() => {*/}
      {/*      let sortCopy = [...title]*/}
      {/*      sortCopy.sort()*/}
      {/*      setTitle(sortCopy)*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    Sort*/}
      {/*  </button>*/}
      {/*  <h4>*/}
      {/*    {title[0]}{' '}*/}
      {/*    <span*/}
      {/*      onClick={() => {*/}
      {/*        // setLike(like++)*/}
      {/*        let likeCopy = [...like]*/}
      {/*        likeCopy[0] += 1*/}
      {/*        setLike(likeCopy)*/}
      {/*      }}*/}
      {/*    >*/}
      {/*      👍*/}
      {/*    </span>*/}
      {/*    {like[0]}*/}
      {/*  </h4>*/}
      {/*  <button*/}
      {/*    onClick={() => {*/}
      {/*      let copy = [...title]*/}
      {/*      copy[0] = 'Content Title A changed'*/}
      {/*      setTitle(copy)*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    Change*/}
      {/*  </button>*/}
      {/*  <p>2022.07.27</p>*/}
      {/*</div>*/}
      {/*<div className="list">*/}
      {/*  <h4>*/}
      {/*    {title[1]}{' '}*/}
      {/*    <span*/}
      {/*      onClick={() => {*/}
      {/*        // setLike(like++)*/}
      {/*        let likeCopy = [...like]*/}
      {/*        likeCopy[1] += 1*/}
      {/*        setLike(likeCopy)*/}
      {/*      }}*/}
      {/*    >*/}
      {/*      👍*/}
      {/*    </span>*/}
      {/*    {like[1]}*/}
      {/*  </h4>*/}
      {/*  <p>2022.07.27</p>*/}
      {/*</div>*/}
      {/*<div className="list">*/}
      {/*  <h4*/}
      {/*    onClick={() => {*/}
      {/*      modal === true ? setModal(false) : setModal(true)*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    {title[2]}{' '}*/}
      {/*    <span*/}
      {/*      onClick={() => {*/}
      {/*        // setLike(like++)*/}
      {/*        let likeCopy = [...like]*/}
      {/*        likeCopy[2] += 1*/}
      {/*        setLike(likeCopy)*/}
      {/*      }}*/}
      {/*    >*/}
      {/*      👍*/}
      {/*    </span>*/}
      {/*    {like[2]}*/}
      {/*  </h4>*/}
      {/*  <p>2022.07.27</p>*/}
      {/*</div>*/}

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
