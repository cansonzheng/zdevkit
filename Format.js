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

// 科学计数法转数字
export const Enum=r=>{
  let str = r.toString().split('e-');
  if (str.length < 2) return r.toString();
  r = '0.';
  for (let i = 1; i < Number(str[1]); i++) r += '0';
  return r + str[0].replace('.', '');
}

// 比特币金额
export const BitAmount=n=>{
  if(n==''||isNaN(n)) return '0';
  n=Enum(n).split('.');
  if(n.length>1){
    if (n[1].length > 8) n[1]=n[1].substring(0,8);
    return n[0]+'.'+n[1];
  }else{
    return n[0]
  }
}