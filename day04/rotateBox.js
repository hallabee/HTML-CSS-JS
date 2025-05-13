const btnLeft = document.querySelector(".btnLeft");
const btnRight = document.querySelector(".btnRight");
const box = document.querySelector("#box");
const deg=45; //회전 할 각도
let num = 0; //증가시킬 값

//btnLeft 클릭시
btnLeft.addEventListener("click", e=> {
    e.preventDefault();
    num--;
    //45도 각도에 감소된 num값을 deg값과 곱해서 rotate 구문에 삽입
    box.style.transform = `rotate(${num*deg}deg)`
    console.log(num);
    
})

//btnRight 클릭시
btnRight.addEventListener("click", e=> {
    e.preventDefault();
    num++;
    //45도 각도에 증가된 num값을 deg값과 곱해서 rotate 구문에 삽입
    box.style.transform = `rotate(${num*deg}deg)`
    console.log(num);
})