import { model } from "mongoose";
import { ProductSchema } from "../schemas/product-schema.js";
import {timeZone} from '../../services/timeZone.js';
const Product = model("products", ProductSchema);

export class ProductModel {
  async findByName(name) {
    const product = await Product.findOne({ name });
    return product;
  }
  async findById(id) {
    const product = await Product.findOne({ productId : id });
    return product;
  }

  async create(productInfo) {
    const num = await Product.find()
    const productId= (num === [])? 1 : num.length+1; 

    const time = timeZone();
    const timeInfo = {'createdTime':time,'updatedTime':time};
    const info = {productId, ...productInfo , ...timeInfo};
    const createdNewProduct = await Product.create(info);
    return createdNewProduct;
  }
  async findAll() {
    const products = await Product.find().populate("categoryId");
    return products;
  }
 

  async update({ productId, update }) {
    const filter = { _id: productId };
    const option = { returnOriginal: false };
    const time = timeZone();
    const updateInfo = {...update, updatedTime:time}
    const updatedProduct = await Product.findOneAndUpdate(filter, updateInfo, option);
    console.log(updatedProduct);
    return updatedProduct;
  }

  async deleteOne(product){
    const deleteproduct=await Product.deleteOne({name: product.name});
    return deleteproduct;
  }
}

const productModel = new ProductModel();

export { productModel };
