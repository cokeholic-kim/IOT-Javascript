fetch("data/data.json")
.then(response => response.json())
.then(data => {
    console.log(data)
    displayItems(data.items)
    setEventItems(data.items)
}) // data.items 배열로나온다 그냥 data로 접근하면 data 객체가 나옴

// 이벤트 설정하기
function setEventItems(items){
    const btns = document.querySelector(".buttonDiv");
    btns.addEventListener("click",function(event){
        const {key,value} = event.target.dataset  //구조분해 할당
        console.log(key,value)
        let filtered = items.filter(item => item[key] === value) //아이템을 받아서 아이템의 key가 type,color value가 클릭한것과 일치하는 자료만 필터링
        displayItems(filtered); // 필터링한 배열을 보여주는 함수에 넣어줌 
    })
}


// 화면나타내기
function displayItems(items){
    const ul = document.querySelector(".items");
    let str = "";
    str = items.map(item =>{ // 그냥 data 객체로접금하면 items.items.map 으로 배열에 접근,,map() 은 배열요소을 받아서 다른형태로 저장해줌
        return `<li class="item">
            <img src ="${item.image}">
            <span>${item.gender} ,${item.size}</span> 
        </li>`; /*요따구로 저장됨-->[<li class="item"><img src="imgs/blue_p.png" alt=""><span>남성 라지</span></li>],[ <li class="item"><img src="imgs/blue_p.png" alt=""><span>남성 라지</span></li>],[ <li class="item"><img src="imgs/blue_p.png" alt=""><span>남성 라지</span></li>]*/
    }).join("") //조인 으로 스트링타입으로 바꿔줘야함 조인 배열들 조인 조인조인 조인조인조인
    ul.innerHTML = str;
}
// document.querySelector(".buttonDiv").addEventListener("click",function(event){
//     console.log(event.target.dataset)
// })
// function matStudy(){
//     let Student = [
//         {name:"green",score:70},
//         {name:"blue",score:80},
//         {name:"yellow",score:90}
//     ]
//     let stu2 = Student.map(stu=>{
//         return stu.score
//     })
//     console.log(stu2)
// }
// matStudy()

    /* 
<li class="item">
                <img src="imgs/blue_p.png" alt="">
                <span>남성 라지</span>
            </li>
*/