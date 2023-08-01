const dicbtn = document.querySelector(".dic-btn");
const incbtn = document.querySelector(".inc-btn");
const counter = document.querySelector(".number-a");
dicbtn.addEventListener("click",()=>{
   if(counter.value=0) counter.value-=1;
});
incbtn.addEventListener("click",()=>{
   counter.value= parseInt(counter.value)+1;
});

