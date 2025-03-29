import React from 'react'
import "../main.css"

function Content() {
  return (
    <div className='content'>
      <h2>
        Sorry, no results were found for "cakescascsa"
      </h2>
      <img src="/public/images/nothing.png" alt="" />
      <p>We have all your Independence Day sweets covered</p>
      <div>
        <button style={{ background: "#ffeff5", color: "#d58ca5"}}>
          Sweet Cake
        </button>
        <button style={{ background: "#f4f1fe", color: "#9a79e1"}}>
          Black Cake
        </button>
        <button style={{ background: "#feeff5", color: "#e094b1"}}>
          Pozole Verde
        </button>
        <button style={{ background: "#eefcff", color: "#41838d"}}>
          Healthy food
        </button>
      </div>
    </div>
  )
}

export default Content