import axios from "axios"
import { FAILURE, PENDING, SUCCESS } from "./actionTypes"

export const book=(dispatch)=>{
dispatch({type:PENDING})
axios.get("https://lib-a9dj.onrender.com/book/").then((res)=>{
    dispatch({type:SUCCESS, payload: res.data});
    console.log(res.data);
}).catch((err)=>{
    console.log(err.message);
    dispatch({type:FAILURE})

})
}