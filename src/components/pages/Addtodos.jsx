import React from 'react'

const Addtodos = ({status,todoList,todo,listItems,setStatus,currentTodo,updateItems,updateList}) => {
    
    return (
        <>
            {status.isEditing ? <> <form onSubmit={updateItems}>
                <div className="row justify-content-center text-center">
                    <div className="col-lg-8 col-md-8 offset-md-1 col-12 ">
                        <div className="pb-4">
                            <input type="text" name="todo" defaultValue={currentTodo.text} className={status.errors ? "form__input form-control bd-red" : "form__input form-control"} onChange={updateList} placeholder="Edit ToDo Item" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-12">
                        <button type="submit" value="Submit" className="btn main-btn text-center mx-2" > <i className="fa fa-plus"></i> </button>
                        <button type="reset" className="btn rounded-circle mx-2 border-3 btn-outline-danger mb-2" onClick={() => setStatus(false)}> <i className="fa fa-times"></i></button>
                    </div>
                </div>
            </form></> : <><form>
                <div className="row justify-content-center text-center">
                    <div className="col-lg-8 col-md-8 offset-md-1 col-10 ">
                        <div className="pb-4">
                            <input type="text" name="todo" value={todo} className={status.errors ? "form__input form-control bd-red" : "form__input form-control"} onChange={todoList} placeholder="Add ToDo Item" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-2">
                        <button type="submit" value="Submit" className="btn main-btn text-center" onClick={listItems}> <i className="fa fa-plus"></i> </button>
                    </div>
                </div>
            </form></>}
        </>
    )
}

export default Addtodos