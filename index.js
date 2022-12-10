
function changeColor(){
   let bigBoxItem =document.getElementById("bigBoxItem").style.backgroundColor;
   if(bigBoxItem==="red"){
    bigBoxItem =document.getElementById("bigBoxItem").style.backgroundColor="green";
      smallBoxItem =document.getElementById("smallBoxItem").style.backgroundColor="red";
   }else{
    bigBoxItem =document.getElementById("bigBoxItem").style.backgroundColor="red";
    smallBoxItem =document.getElementById("smallBoxItem").style.backgroundColor="green";
   }
}