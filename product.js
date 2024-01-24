const mongoose = require("mongoose");
const { Schema } = mongoose;

//db setup...
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
  console.log("database setup successful...");
}

//Schema for products...
const productSchema = new Schema({
  title: {type:String,require:true,unique:true},
  description: String,
  price: {type:Number,min:[0,"min price"],require:true},
  discountPercentage: {type:Number,min:[0,"wrong min price"],max:[50,"wrong max price"]},
  rating: {type:Number,min:[0,"min rating is 0"],max:[5,"max rating is 5"]},    //min rating and max rating having error msg also and we can give this with all..
  brand: {type:String,require:true},
  category: {type:String,require:true},
  thumbnail: {type:String,require:true},
  images: [String],
});

//Model is also a type of schema but to get abstraction we first made schema and then model...or we can directly create model as well.
exports.Product = mongoose.model("Product", productSchema); //this Product is name of our collection.So that other can also have that schema.All CRUD operations happens on our Product variable.
