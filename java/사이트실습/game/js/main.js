const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const bgimg = new Image();
const field = new Image();
const char = new Image();
bgimg.src = "./img/bgchris.jpg"
field.src = "./img/summon.png"
char.src = "./img/pngegg.png"



// 맵 배경화면
bgimg.addEventListener("load",function(){
    ctx.drawImage(bgimg,0,0,canvas.width,canvas.height)
    let x = 50
})
// 맵 필드 // 캐릭터가 올라갈 위치
field.addEventListener("load",function(){
    let x = 250
    let y = 250
    for(let i =0;i<5;i++){
        ctx.drawImage(field,50+(x*i),20,200,200)
        ctx.drawImage(field,50+(x*i),700,200,200)
    }
    for(let j=0;j<2;j++){
        ctx.drawImage(field,50,250+(y*j),200,200)
        ctx.drawImage(field,1050,250+(y*j),200,200)
    }
})
// 캐릭터 표시
const User={
    Player:"username", //나중에 로그인화면만들어서 입력받을예정
    level:1,
    hp:100,
    sp:50,
    point:0,
    draw(){
        ctx.drawImage(char,50,700,200,200)
    }
}
char.addEventListener("load",User.draw)

//주사위 수에 따라 캐릭터 위치 이동 애니메이션
//주사위를 클릭하면 실행
function moveanimation(){
    
}