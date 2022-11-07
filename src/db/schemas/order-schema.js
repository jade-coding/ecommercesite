import { Schema } from "mongoose";

const OrderSchema = new Schema(
  {
    userId:{
        type : Schema.Types.ObjectId,
        ref : "users"
    },
    buying_product:{
        type : [Schema.Types.Mixed],
        required:true,
    },
    address:{
        type:String,
        required:true
    },
    status:{
        type:String, 
        required:true, 
        default: '주문 중'
    },
    totalPrice:{
        type:Number,
        default:0,
    }
  },
  {
    collection: "orders",
    timestamps: true,
  }
);

export { OrderSchema };