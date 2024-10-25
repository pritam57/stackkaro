import { DECREASE, INCREASE, } from "./constant";




export const increaseFunc = (value)=>{
    return{
        type:INCREASE,
        value
    }
}

export const decreaseFunc =(value)=>{
    return{
        type:DECREASE,
        value
    }
}