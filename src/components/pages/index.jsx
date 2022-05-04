import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import TodoList from './TodoList';

const Index = () => {
	const [todo, setTodo] = useState("");
	const [items, setItems] = useState([]);
	const [isEditing, setIsEditing] = useState(false);
	const [errors, setErrors] = useState(false);
	const [currentTodo, setCurrentTodo] = useState();
	const [multiDlt, setMultiDlt] = useState([]);

	const todoList = (e) => {
		setTodo(e.target.value)
	}

	const listItems = (e) => {
		e.preventDefault();
		if (todo !== "") {
			setItems([...items, { id: items.length + 1, text: todo.trim() }
			]);
			setTodo("");
		} else {
			setErrors(true);
		}
	}

	const updateList = (e) => {
		setCurrentTodo({ ...currentTodo, text: e.target.value });
		setTodo("");
	}

	const updateItems = (e) => {
		e.preventDefault();
		updateListItems(currentTodo.id, currentTodo);
	}

	const updateListItems = (id, updatedTodo) => {
		const updatedItem = items.map((todo) => {
			return todo.id === id ? updatedTodo : todo;
		});
		setIsEditing(false);

		setItems(updatedItem);
	}

	const dltItem = (id) => {
		const removeItem = items.filter((todo) => {
			return todo.id !== id;
		});
		setItems(removeItem);
	}

	const updateItem = (todo) => {
		setIsEditing(true);
		setCurrentTodo({ ...todo });
	}
	const togglebtn = (e) => {
		let id = e.target.id
		setMultiDlt([...multiDlt, { id: id, isChecked: true }]);
	}

	const multipleDlt =(multiDlt)=>{
      console.log(multiDlt);
	  multiDlt.forEach(element => {
		  const removeItem = items.filter((todo) => {
			console.log(todo.id);
			console.log(element.id);
			return todo.id !== element.id;  
		});
		setItems(removeItem);
	  });
	
	}
	
	return (
		<>
			<div className="container">
				<div className="row main-content text-center w-75">
					<div className="col-12 pt-2">
						<h2 className='text-center main-bg m-3 mt-4 rounded p-2 shadow'>ToDo List</h2>
						<div className="container p-md-5 pt-4">


							{isEditing ? <> <form onSubmit={updateItems}>
								<div className="row justify-content-center">
									<div className="col-lg-7 col-md-7 offset-md-1 col-12 ">
										<div className="pb-4">
											<input type="text" name="todo" defaultValue={currentTodo.text} className={false ? "form__input form-control bd-red" : "form__input form-control"} onChange={updateList} placeholder="Edit ToDo Item" />
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-12">
										<button type="submit" value="Submit" className="btn main-btn text-center mx-2" > <i className="fa fa-plus"></i> </button>
										<button type="reset" className="btn rounded-circle mx-2 border-3 btn-outline-danger mb-2" onClick={() => setIsEditing(false)}> <i className="fa fa-times"></i></button>
									</div>
								</div>
							</form></> : <><form>
								<div className="row justify-content-center">
									<div className="col-lg-7 col-md-7 offset-md-1 col-10 ">
										<div className="pb-4">
											<input type="text" name="todo" value={todo} className={errors ? "form__input form-control bd-red" : "form__input form-control"} onChange={todoList} placeholder="Add ToDo Item" />
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-2">
										<button type="submit" value="Submit" className="btn main-btn text-center" onClick={listItems}> <i className="fa fa-plus"></i> </button>
									</div>
								</div>
							</form></>}
							<div className="row justify-content-center">
								<div className="col-lg-11 offset-md-1 pt-4">

									<ol className='m-0'>
										{items.map((todos) => {
											return <li key={todos.id}>
												<input className="form-check-input" checked={multiDlt.isChecked ? true : false } onChange={togglebtn} type="checkbox" id={todos.id} /> {todos.text}
												<span className='float-end'>
													<i className="fa fa-edit main-color m" onClick={() => {
														updateItem(todos)
													}}></i>
													<i className="fa fa-trash" onClick={() => {
														dltItem(todos.id)
													}}></i></span></li>
										})}
									</ol>
									<div>
										<button type="reset" className="btn multi-dlt rounded-circle border-3 btn-outline-danger mb-2" onClick={()=>multipleDlt(multiDlt)}> <i className="fa fa-trash"></i></button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Index