import React, { useState, useMemo } from 'react'
import Addtodos from './Addtodos';
import Pagination from './pagination'
import Search from './Search';
import TodoList from './TodoList';
let PageSize = 5;

const Index = () => {
    const [todo, setTodo] = useState("");
    const [items, setItems] = useState([]);
    const [filterSearch, setFilter] = useState([]);
    const [currentTodo, setCurrentTodo] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [multiDlt, setMultiDlt] = useState([]);
    const [status, setStatus] = useState({
        isEditing: false,
        searchShow: false,
        errors: false
    });

    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    const pageFilter = filterSearch.slice(firstPageIndex, lastPageIndex);

    // const paginate=(number)=>setCurrentPage(number);

    const todoList = (e) => {
        setTodo(e.target.value)
    }

    const listItems = (e) => {
        e.preventDefault();
        const hasData = items.filter(
            todos => {
                return (
                    todos
                        .text
                        .toLowerCase()
                        .includes(todo.toLowerCase())
                );
            })
        if (todo !== "" && hasData.length <= 0) {
            const err = "errors";
            setStatus((p) => { return { ...p, [err]: false } });
            setItems([...items, { id: items.length + 1, text: todo.trim(), complete: false }
            ]);
            setTodo("");
        } else {
            const err = "errors";
            setStatus((p) => {
                return {
                    ...p,
                    [err]: true
                }
            });
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
        const hasData = items.filter(
            todos => {
                return (
                    todos
                        .text
                        .toLowerCase()
                        .includes(currentTodo.text.toLowerCase())
                );
            })
        if (currentTodo !== "" && hasData.length <= 0) {
            const updatedItem = items.map((todo) => {
                return todo.id === id ? updatedTodo : todo;
            });
            setStatus(false);
            setItems(updatedItem);
        } else {
            const err = "errors";
            setStatus((p) => {
                return {
                    ...p,
                    [err]: true
                }
            });
        }
    }

    const dltItem = (id) => {
        const removeItem = items.filter((todo) => {
            return todo.id !== id;
        });
        setItems(removeItem);
    }

    const updateItem = (todo) => {
        const edit = "isEditing";
        setStatus((p) => { return { ...p, [edit]: true } });
        setCurrentTodo({ ...todo });
    }

    const multipleDlt = (multiDlt) => {
        var updateMyVal = [];
        for (var key in multiDlt) {
            if (multiDlt.hasOwnProperty(key)) {
                var obj = multiDlt[key];
                for (var prop in obj) {
                    if (obj.hasOwnProperty(prop)) {
                        updateMyVal.push(obj[prop])
                        var newArray = items.filter(item => !updateMyVal.includes(item.id))
                        setItems(newArray);
                        setMultiDlt("")
                    }
                }
            }
        }
    }

    const checkboxBtn = (item) => () => {
        setMultiDlt((state) => ({
            ...state,
            [item.id]: state[item.id]
                ? null
                : {
                    id: item.id,
                }
        }));
    };

    const complited = (id) => {
        let mapped = items.map(task => {
            return task.id === id ? { ...task, complete: !items.complete } : { ...task };
        });
        setItems(mapped);
    }

    return (
        <>
            <div className="container">
                <div className="row main-content w-75">
                    <div className="col-12 pt-2">
                        <div className='main-bg m-3 mt-4 rounded p-3 shadow'>
                            <span className='fs-2'>ToDo App</span>
                            <div className='float-end'>
                                <Search
                                    items={items}
                                    setStatus={setStatus}
                                    status={status}
                                    setFilter={setFilter}
                                />
                            </div>
                        </div>

                        <div className="container p-md-5 pt-4">

                            <Addtodos
                                todo={todo}
                                status={status}
                                currentTodo={currentTodo}
                                todoList={todoList}
                                listItems={listItems}
                                setStatus={setStatus}
                                updateItems={updateItems}
                                updateList={updateList}
                            />

                            <TodoList
                                todos={items}
                                checkboxBtn={checkboxBtn}
                                updateItem={updateItem}
                                status={status}
                                dltItem={dltItem}
                                multipleDlt={multipleDlt}
                                complited={complited}
                                multiDlt={multiDlt}
                                filter={pageFilter}
                            />
                            {status.searchShow ?
                                <Pagination
                                setCurrentPage={setCurrentPage}
                                    currentPage={currentPage}
                                    totalPage={filterSearch.length}
                                    pageItemSize={PageSize}
                                    // onPageChange={page => setCurrentPage(page)}
                                /> : ""}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index
