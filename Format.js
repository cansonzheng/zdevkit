// 格式化

// 金额格式
export const Money=s=>{
  if(isNaN(s)) return '';
  s=s.toString();
  s=s.replace(/^(\d*)$/,"$1.");  
  s=(s+"00").replace(/(\d*\.\d\d)\d*/,"$1");  
  s=s.replace(".",",");  
  let re=/(\d)(\d{3},)/;  
  while(re.test(s)){  
    s=s.replace(re,"$1,$2");  
  }  
  s=s.replace(/,(\d\d)$/,".$1");  
  return s.replace(/^\./,"0.");
}