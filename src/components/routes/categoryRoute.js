import express from 'express';
import Category from '../../models/categoryModel.js'
import expressAsyncHandler from 'express-async-handler'


const router = express.Router();
router.route("/create").post((req,res)=>{
    const category = req.body.category;
    const subcategory = req.body.subcategory;
    const newCategory = new Category({
        category,
        subcategory
    });
    newCategory.save();

});

router.route("/categories").get((req,res)=>{
    Category.find()
    .then(foundCategories => res.json(foundCategories))
})

router.put(
    '/:id',
    expressAsyncHandler(async (req, res) => {
      const categoryId = req.params.id;
      const category = await Category.findById(categoryId);
      if (category) {
        category.category = req.body.category;
        category.subcategory = req.body.subcategory;
        const updatedCategory = await category.save();
        res.send({ message: 'Category Updated', category: updatedCategory });
      } else {
        res.status(404).send({ message: 'category Not Found' });
      }
    })
  );

 // Delete category
router.route('http://localhost:5000/categories/60e6fe5563d59539143c8db0').delete((req, res, next) => {
    Category.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  })
  
  


export default router;