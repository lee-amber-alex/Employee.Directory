import React from "react";


function SearchForm(props) {
  return (
    <>
    <form className="search">

        <input 
        type="text"
        value={props.name}
        onChange={ e =>{
          props.setName(e.target.value);
        } }

        />
        
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Filter
        </button>
      
    </form>
    </>
  );
}

export default SearchForm;
