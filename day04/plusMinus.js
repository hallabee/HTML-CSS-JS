const btnPlus = document.querySelector(".btnPlus");
const btnMinus = document.querySelector(".btnMinus");
let num = 0;

// plus 버튼 클릭시
btnPlus.addEventListener("click", e=>{
    e.preventDefault();
    num++;
    console.log(num);
})

// minus 버튼 클리시
btnMinus.addEventListener("click", e=>{
    e.preventDefault();
    num--;
    console.log(num);
    
})