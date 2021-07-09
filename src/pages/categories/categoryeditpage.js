import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct, updateProduct } from '../actions/productActions';

export default function CategoryEditScreen(props) {
  const categoryId = props.match.params.id;
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');

  const categoryDetails = useSelector((state) => state.categoryDetails);
  const { loading, error } = categoryDetails;

  const categoryUpdate = useSelector((state) => state.categoryUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = categoryUpdate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      props.history.push('/categories');
    }
    if (!category || category._id !== categoryId || successUpdate) {
      dispatch(detailsProduct(categoryId));
    } else {
      setCategory(category.category);
      setSubcategory(category.subcategory);
    }
  }, [category, dispatch, categoryId, successUpdate, props.history]);
  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: dispatch update product
    dispatch(
      updateProduct({
        _id: categoryId,
        category,
        subcategory
      })
    );
  };



  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Edit Category {categoryId}</h1>
        </div>
          <>
            <div>
              <label htmlFor="category">Category</label>
              <input
                id="category"
                type="text"
                placeholder="Enter category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="subcategory">Subcategory</label>
              <input
                id="subcategory"
                type="text"
                placeholder="Enter subcategories"
                value={subcategory}
                onChange={(e) => setSubcategory(e.target.value)}
              ></input>
            </div>
          
        
         
          
            <div>
              <label></label>
              <button className="primary" type="submit">
                Update
              </button>
            </div>
          </>
        )
      </form>
    </div>
  );
}
