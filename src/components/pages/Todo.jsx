import React from 'react'

const Todo = ({todo,checkboxBtn,updateItem ,dltItem ,complited ,multiDlt}) => {
    return (
        <li key={todo.id}>
            <input
                onChange={checkboxBtn(todo)}
                checked={multiDlt[todo.id] || false}
                className="form-check-input"
                type="checkbox"
            />
            {todo.text}
            <span className='float-end'>
                <i className={todo.complete ? "fa fa-check border-2 btn-success rounded-circle btn mx-2" : "fa fa-check border-2 btn-outline-success rounded-circle btn mx-2"} onClick={() => complited(todo.id)}></i>
                {todo.complete ? "" : (<i className="fa fa-pencil btn main-btn text-center border-2 mb-1 mx-2" onClick={() => {
                    updateItem(todo)
                }}></i>)}
                <i className="fa fa-trash btn-outline-danger rounded-circle btn border-2 mx-2" onClick={() => {
                    dltItem(todo.id)
                }}></i></span>
                </li>
    )
}

export default Todo