import React from 'react'

function Checkedtodoitem(props) {
  return (
    <>
    <li style={listyle}>
      <span>
        <input type='checkbox' 
          id={'todoCheckeditem'+props.id} 
          onClick={()=>props.onCheck(props.id)}
          checked />

        <label htmlFor={'todoCheckeditem'+props.id}>{props.element}</label>
      </span>

      <button style={delbutton} 
        onClick={() => props.onSelect(props.id)}>
        <i className="fa fa-times"></i>
      </button>
      </li>
    </>
  )
}

const listyle = {
    border: "1px solid #ddd",
    padding: "10px",
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-between",
    borderRadius: "10px",
    backgroundColor: "white"
  }

const delbutton = {
    color: "white",
    padding: "5px 15px",
    borderRadius: "5px",
    backgroundColor: "tomato",
    border: "none"
  }

export default Checkedtodoitem
