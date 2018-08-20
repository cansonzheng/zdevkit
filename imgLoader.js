/*
参数说明
src [string] 图片地址
error [fn] 失败回调
finish [fn] 完成回调
*/
export default o=>{
  if(!o.src) return;
  let image = new Image();
  image.src = o.src;
  
  if(image.complete){
    o.finish(o.src);
    return;
  }
  image.onerror = () => {
    if(o.error) o.error();
  }
  image.onload = () => {
    if(o.finish) o.finish(o.src);
  }
}