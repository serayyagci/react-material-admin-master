import mongoose from 'mongoose';




const categorySchema= new mongoose.Schema({
    "category": {
        Type: String,
    },
    "subcategory": {
        Type:String,
    }

})

const Category = mongoose.model('Category', categorySchema);
export default Category;