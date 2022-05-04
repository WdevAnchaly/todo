import React from 'react'

const TodoList = (props) => {

  return <li>{props.todo} 
  <span className='float-end'>
    <i class="fa fa-edit main-color m"onClick={()=>{
    props.onSelect.dltItems(props.id) }}></i> 
    <i className="fa fa-trash" onClick={()=>{
    props.onSelect.updateItems(props.id) }}></i></span></li>
}

export default TodoList