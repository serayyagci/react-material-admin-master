import React, {useState} from "react";
import axios from 'axios';


function CreateCategory(){



  
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");


  const addTheCategory = () =>{
    console.log(category, subcategory)
    axios.post("http://localhost:5000/insert", {category:category,subcategory:subcategory})
  }
  return <div className="container">
    <h1>Create Category Page</h1>
    
      <div >
        <input onChange={(event) =>{
          setCategory(event.target.value);
        }}  type="text">
        </input>
      </div>
      <div >
      <input onChange={(event) =>{
          setSubcategory(event.target.value);
        }}   type="text">
      </input ></div>
      <button onClick={addTheCategory} className="btn btn-lg btn-info">
Add Category
      </button>

  </div>
}

export default CreateCategory;