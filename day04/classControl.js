const wrap = document.querySelector("#wrap");
const box  = wrap.querySelector("article");

// wrap.addEventListener("click", () => { 
//     box.style.backgroundColor = "hotpink";
// });

// wrap.addEventListener("click", ()=>{
//     wrap.classList.add("on");
// })

// wrap.addEventListener("click", ()=>{
//     let isOn = wrap.classList.contains("on");
//     console.log(isOn);
//     if(isOn){
//         wrap.classList.remove("on");
//     }else{
//         wrap.classList.add("on");
//     }
// });

//삼항 연산자
// (isOn) ? wrap.classList.remove("on") : wrap.classList.add("on");

wrap.addEventListener("click", ()=>{
    let isOn = wrap.classList.contains("on");
    console.log(isOn);
    wrap.classList.toggle("on");
})