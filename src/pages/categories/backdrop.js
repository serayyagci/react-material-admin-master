import './modal.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
function DeleteBackdrop(props){
    function cancelHandler(){
        props.onCancel();
    }
    function confirmHandler(){
        props.onConfirm();
    }
    

    const [categoryInput, setcategoryInput] = useState('')
    const [subcategoryInput, setsubcategoryInput] = useState('')
 
    const inputCategoryHandler = (event) => {
        setcategoryInput(event.target.value);
    }
    const inputSubcategoryHandler = (event) => {
        setsubcategoryInput(event.target.value);
    }
    function SubmitHandler(event){
    event.preventDefault();
    
    useEffect(() => {
        const payload = {
            category: {categoryInput},
            subcategory: {subcategoryInput}
        };
        axios.post('http://localhost:5000/save', payload)
        .then(()=>{
            console.log('Data has gone to the server great')
        })
        .catch(()=>{
            console.log('Internal server error')
        })
            
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
    }
    return(
        
        <div className="backdrop"  >
         <div className='modal'>
             <form onSubmit={SubmitHandler}>
      <div className="form-input">
          <input
          type="text"
          name="category"
          placeholder="Enter category name"
          value={categoryInput}
          onChange={inputCategoryHandler}></input>
      </div>
      <div className="form-input">
          <input
          type="text"
          name="subcategory"
          placeholder="Enter subcategory name"
          value={subcategoryInput}
          onChange={inputSubcategoryHandler}></input>
      </div></form>
      <button className='btn btn--alt' onClick={cancelHandler}>Cancel</button>
      <button className='btn' onClick={confirmHandler}>Submit</button>
    </div>
    </div>
    )
  }
  
  export default DeleteBackdrop;