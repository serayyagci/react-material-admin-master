import React, {useEffect, useState} from "react";
import './categorypage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function CategoriesPage(){



const [newCategoryName, setNewCategoryName] = useState("")
  const [categories, setCategories] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:5000/read').then((response) =>{
        setCategories(response.data)
      })
    }, [])
  
        const deleteCategory = (id) =>{
          axios.delete(`http://localhost:5000/delete/${id}`)
        }
    const updateCategory = (id) =>{
 
      axios.put("http://localhost:5000/update", {id: id, newCategoryName: newCategoryName}
      )
    }
    return (
    
    
    <div className="container" key="div2">
        <h1>Categories page</h1>
        <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>CATEGORY</th>
                <th>SUBCATEGORY</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((cat,key) => (
                <tr key={cat._id}>
                  <td>{cat._id}</td>
                  <td>{cat.category}</td>
                  <td>{cat.subcategory}</td>
                  <td>
                    <input type="text" placeholder="Enter category name" onChange={(event) =>{
                      setNewCategoryName(event.target.value)
                    }}></input>
                  <button
                      type="button"
                      className="small"
                     onClick={() => updateCategory(cat._id)}
                    >
                      Update
                    </button>
                    <button
                      type="button"
                      className="small"
                      onClick={() => deleteCategory(cat._id)}>
                        
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        

    </div>)
}export default CategoriesPage;
