import React, { useState ,useEffect} from 'react';
// import SearchList from './SearchList';

function Search({ items,setFilter,setStatus }) {
  const [searchField, setSearchField] = useState("");
//   const [searchShow, setSearchShow] = useState(false); 

  const filteredTodos = items.filter(
    todo => {
      return (
        todo
        .text
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  useEffect(()=>{
    setFilter(filteredTodos);
  },[searchField]);

  const handleChange = e => {
    setSearchField(e.target.value);
    if(e.target.value===""){
        const search = "searchShow";
        setStatus((p) => { return { ...p, [search]: false } });
    }
    else {
        const search = "searchShow";
        setStatus((p) => { return { ...p, [search]: true } });
    }
  
  };

//   function searchList() {
//     if (status.searchShow) {
//       return (
//           <SearchList filteredTodos={filteredTodos} />
//       );
//     }
//   }

  return (
      <>

     
        <input 
          className="form-control"
          type = "search" 
          placeholder = "Search People" 
          onChange = {handleChange}
          width="50%"
        />
     
      {/* {searchList()} */}
      </>
  );
}
export default Search;