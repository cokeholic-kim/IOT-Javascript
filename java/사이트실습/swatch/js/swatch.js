let winH = window.innerHeight;
// document.querySelector("#menu").addEventListener("click",function(event){
//     event.preventDefault();
//     console.log(event.target.innerHTML)
//     let target = event.target.innerHTML;
//     // 한섹션에 969
//     if(target==="Shiny Addict"){
//         window.scrollTo({top:winH*3,behavior:"smooth"})  
//     }
//     if(target==="Time on Board"){
//         window.scrollTo({top:winH*2,behavior:"smooth"})  
//     }
//     if(target==="Be Colorful"){
//         window.scrollTo({top:winH,behavior:"smooth"})
//     }
//     if(target==="Full Blossom"){
//         window.scrollTo({top:0,behavior:"smooth"})
//     }
// })

// 이게 훨배 좋네
const lis = document.querySelectorAll("#menu li");
const Sections = document.querySelectorAll("section");
lis.forEach((arr,index)=>arr.addEventListener("click",function(event){
    event.preventDefault();
    window.scrollTo({top:index*winH,behavior:"smooth"});
    // 스크롤값이 0~1winh까지면 첫번째li에 클래스on
    // 스크롤값이 1*winh 같거나 크면서 ~2*winh 보다 작을때 두번째 li클래스 on
    // 
}))
// scroll이벤트 발생
lis[0].classList.add("on")
document.addEventListener("scroll",function(){
    //스크롤값
    let sct = document.documentElement.scrollTop;
    console.log(sct)
    
    if(sct>=0 && sct<1*winH){
        lis.forEach(arr=>arr.classList.remove("on"))
        lis[0].classList.add("on")
    }
    if(sct>=1*winH && sct<2*winH){
        lis.forEach(arr=>arr.classList.remove("on"))
        lis[1].classList.add("on")
    }
    if(sct>=2*winH && sct<3*winH){
        lis.forEach(arr=>arr.classList.remove("on"))
        lis[2].classList.add("on")
    }
    if(sct>=3*winH && sct<4*winH){
        lis.forEach(arr=>arr.classList.remove("on"))
        lis[3].classList.add("on")
    }
})

//꽃잎 마우스 무브
Sections[0].addEventListener("mousemove",function(event){
    let x = event.pageX
    let y = event.pageY
    document.querySelector(".img11").style.right = `${20+(x/30)}px`
    document.querySelector(".img12").style.right = -`${20-(x/30)}px`
    document.querySelector(".img13").style.right = `${20+(x/30)}px`
})

Sections[1].addEventListener("mousemove",function(event){
    let x = event.pageX
    let y = event.pageY
    document.querySelector(".img21").style.right = `${20+(x/30)}px`
    document.querySelector(".img22").style.right = -`${20-(x/30)}px`
})
Sections[2].addEventListener("mousemove",function(event){
    let x = event.pageX
    let y = event.pageY
    document.querySelector(".img31").style.right = `${20+(x/30)}px`
    document.querySelector(".img32").style.right = -`${20-(x/30)}px`
    document.querySelector(".img33").style.right = `${20-(x/30)}px`
})
Sections[3].addEventListener("mousemove",function(event){
    let x = event.pageX
    let y = event.pageY
    document.querySelector(".img41").style.right = `${20+(x/30)}px`
    document.querySelector(".img42").style.right = -`${20-(x/30)}px`
})


