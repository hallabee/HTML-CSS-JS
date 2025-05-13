// const item = document.querySelector("#wrap article");
// console.log(item);

// 요소 모두 선택하기
// const items = document.querySelectorAll("#wrap article");
// console.log(item);

// 요소 모두 선택하기(반복문)
// const items = document.querySelectorAll("#wrap article");

// for(let item of items){
//     console.log(item);
// }

// 요소 모두 선택하기(반복문2)
const items = document.querySelectorAll("#wrap article");

for(let i=0; i<items.length; i++){
    console.log(items[i]);
}