function bgcolor(color,className){
  document.body.style.backgroundColor=`${color}`
  const a=document.getElementsByClassName(`${className}`)
  const ele= document.getElementById(`${color}`)
  for (let i = 0; i < a.length; i++) {
    a[i].style.fontWeight = "normal";
    a[i].style.fontSize = "12px";
    a[i].style.borderColor="black"

  }

  
  if (ele) {
    ele.style.fontWeight = "bold";
    ele.style.fontSize="14px"
    ele.style.alignItems = "center";
    ele.style.justifyContent = "center"
    ele.style.borderColor="white"
    
  }
 
}

