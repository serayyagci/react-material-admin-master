import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from "./src/components/routes/categoryRoute.js"
import Category from './src/models/categoryModel.js'
import SomeModel from './src/models/testModel.js'

const app = express();
// register view engine

app.use(cors());
app.use(express.json());


const dbURI = '';
mongoose.connect(dbURI, {
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true,
}).then((result) => app.listen(5000))
.catch((err) => console.log(err));

//mangoose and mango sandbox routes

app.get("/read", async (req,res) =>{
  Category.find({}, (err, result) =>{
    if (err) {
      res.send(err)
    }
    res.send(result)
  })
})



app.post("/insert", async (req,res) =>{
  const category = req.body.category
  const subcategory = req.body.subcategory

  const newCategory = new Category({"category": "abc", "subcategory": "djsklf"});

  try {
    console.log(newCategory)
    await newCategory.save();
    res.send('inserted data');
   } catch (err) {
    console.log(err);
}
  }
)

app.delete("/delete/:id", async (req,res) =>{
const id = req.params.id
await Category.findByIdAndRemove(id).exec();
res.send("deleted")
})

app.put("/update", async (req,res) =>{
  const newCategoryName = req.body.newCategoryName
  const id = req.body.id;
  console.log(id,newCategoryName);

  try {
  await Category.findById(id, (err, updatedCategory) =>{
      updatedCategory.category = newCategoryName;
      updatedCategory.save();
      res.send("update");
    })
  }catch (err) {
  console.log(err);
  }
})


app.use("/", router)
