import React from "react";

const styles = {
  buttonStyle: {
    paddingLR: "40px",
    paddingTB: "3px",
    marginL: "10px"

  },
  formStyle:{
    marginB: "30px",
    padding: "30px"
  }
};

function SearchForm(props) {
  return (
    <>
    <form style={styles.formStyle} className="search">

        <input 
        type="text"
        value={props.name}
        onChange={ e =>{
          props.setName(e.target.value);
        } }

        />
        
        <button style={styles.buttonStyle} type="submit" onClick={props.handleFormSubmit}>
          Filter
        </button>
      
    </form>
    </>
  );
}

export default SearchForm;
