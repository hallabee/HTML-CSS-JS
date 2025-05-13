const ver = navigator.userAgent;
console.log(ver);

const isIE = /AppleWebKit/i.test(ver);
console.log(isIE);

if(isIE){
    alert("크롬 브라우저로 접속하셨습니다. \n 다른 브라우저로 접속해 주세요")
}