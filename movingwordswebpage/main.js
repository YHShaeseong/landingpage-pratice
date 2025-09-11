let target = document.querySelector("#dynamic");



function randomString(){     /* 여러 개의 문장 중에서 하나 고르기 */
  let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to Javascript", "Learn to Python", "Learn to Ruby ", "Born to be happy", "When Earth collapse I'm going to plant an appletree"];
let selectString = stringArr[Math.floor(Math.random()* stringArr.length) ];

/* random() 은 0~1까지..  math.floor는 남은 자릿수 버리기.  */
let selectStringArr = selectString.split("");
/* 이거하면  [a,p,p,l,e] 처럼 한 글자씩 쪼개짐 ㅇㅇ*/

return selectStringArr; 
}
  
// 타이핑 리셋 
function resetTyping(){
  target.textContent = "";
  /* target 위에서 정의함.. 깜빡이는 커서창 공백으로 표현 */ 
  dynamic(randomString());

}


// 한글자씩 텍스트 출력 함수 
function dynamic(randomArr) {
  if(randomArr.length >0) {
    target.textContent += randomArr.shift();   /* 한 글자씩 content에 옮기기 a,p,p,l,e 원래 있던 randomarr에서 옮겨진 만큼 사라짐.. */
    setTimeout(function(){
      dynamic(randomArr);
    },80);
  } else {
    setTimeout(resetTyping, 1000); 
    /* randomarr에서 글자를 다 옮겼다는 뜻. 그러면 글자를 다 썻으니까 초기화 ㄱㄱ */ 
  }
}

dynamic(randomString());





//커서 깜빡임 효과..
function blink () {
  target.classList.toggle("active");
}
setInterval(blink, 500);