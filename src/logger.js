import { sum } from "./util";
export function log(msg) {
   console.log('msg--->',msg) 
   sum(1,2) // ?? 为什么打包后的文件没有 sum
}
export function nouse(){
  console.log('tree-shaking test');
  
}
