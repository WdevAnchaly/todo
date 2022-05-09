import React,{useState,useMemo} from 'react'
import Todo from './Todo'

const TodoList = ({ todos, updateItem, checkboxBtn, dltItem, complited, multipleDlt, multiDlt, status,filter }) => {


  return <div className="row justify-content-center">
    <div className="col-lg-11 offset-md-1 pt-4">
      {status.searchShow ?
        <ol className='p-0'>
        {filter.map((todos) => {
          return <Todo key={todos.id} todo={todos} checkboxBtn={checkboxBtn} updateItem={updateItem} dltItem={dltItem} complited={complited} multiDlt={multiDlt} />
        })}
      </ol>:   <ol className='p-0'>
        {todos.map((todos) => {
          return <Todo key={todos.id} todo={todos} checkboxBtn={checkboxBtn} updateItem={updateItem} dltItem={dltItem} complited={complited} multiDlt={multiDlt} />
        })}
      </ol>}

      <div>
        {multiDlt.length <= 0  ? "":
        <button type="reset" className="btn multi-dlt rounded-circle border-3 btn-outline-danger mb-2" onClick={() => multipleDlt(multiDlt)}> <i className="fa fa-trash"></i></button> }
      </div>
    </div>
  </div>
}

export default TodoList