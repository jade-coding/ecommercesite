import { Router } from "express";
import is from "@sindresorhus/is";
// 폴더에서 import하면, 자동으로 폴더의 index.js에서 가져옴
//import { loginRequired } from "../middlewares";
//import { userService } from "../services";
import { orderService } from "../services/index.js";

//상품 관련 라우터
const orderRouter = Router();


orderRouter.get("/:consumer_id", async (req,res,next)=>{
    try{
        const consumer_id=req.params.consumer_id;

        const order=await orderService.getOrders(consumer_id);
        //console.log(products);
        res.status(200).json(order);
    }catch(err){
        next(err);
    }
})

orderRouter.post("/",async(req,res,next)=>{
    try {
        // req (request)의 body 에서 데이터 가져오기
        // 추가해볼 데이터
        const { user_Id,basket }=req.body;
        //console.log(userId,basket);
        // 위 데이터를 유저 db에 추가하기
        const newOrder = await orderService.addOrder({
            user_Id,
            basket
        });
    
        // 추가된 유저의 db 데이터를 프론트에 다시 보내줌
        // 물론 프론트에서 안 쓸 수도 있지만, 편의상 일단 보내 줌
        res.status(201).json(newOrder);
      } catch (error) {
        next(error);
      }
})

orderRouter.patch(
    "/:consumerId",
    async function (req, res, next) {
      try {
        // params로부터 id를 가져옴
        const consumerId = req.params.consumerId;
        // body data 로부터 업데이트할 사용자 정보를 추출함.
        const {orderId,address,status}=req.body;
 
        // 위 데이터가 undefined가 아니라면, 즉, 프론트에서 업데이트를 위해
        // 보내주었다면, 업데이트용 객체에 삽입함.
        const toUpdate = {
          ...(address && { address }),
          ...(status && { status }),
        };
        console.log(toUpdate);
        // 사용자 정보를 업데이트함.
        const updatedOrderInfo = await orderService.setOrder(
            consumerId,
            orderId,
            toUpdate,
        );
  
        // 업데이트 이후의 유저 데이터를 프론트에 보내 줌
        res.status(200).json(updatedOrderInfo);
      } catch (error) {
        next(error);
      }
    },
  );

  orderRouter.delete("/:consumerId",async (req,res,next)=>{
    // 삭제할 상품 이름
    try{
      const consumerId = req.params.consumerId;
      // body data 로부터 업데이트할 사용자 정보를 추출함.
      const {orderId}=req.body;
      const deleteorder=await orderService.deleteOrder(consumerId,orderId);
      res.status(201).json(deleteorder);
    }catch(err){
        next(err);
    }
  });
export { orderRouter };