import React, {useState} from 'react';

function Todoitem(props) {

  const [checked, setChecked] = useState(false);

  function handleChecked() {
    setChecked(!checked);
  }

  return (
    <>
    <li style={listyle}>
      <span>
        <input type='checkbox' 
          id={'todoitem'+props.id} 
          checked={checked} 
          onChange={handleChecked} />

        <label htmlFor={'todoitem'+props.id}
          style={checked
          ?{textDecoration:"line-through"}
          :{textDecoration:"none"}}>
        {props.element}
        </label>
      </span>

      <button style={delbutton} 
        onClick={() => props.onSelect(props.id)}>
        <i class="fa fa-times"></i>
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

export default Todoitem
