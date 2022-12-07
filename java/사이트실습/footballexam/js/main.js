let arts = document.querySelectorAll("article")
// 스크롤이벤트
document.addEventListener("scroll",function(){
    let sct = document.documentElement.scrollTop;
    arts.forEach((arr,index)=>{
        let zoomNum = (index*-5000)+sct // 원래있던값에서 스크롤값을 더해줌
        arr.style.transform = `translateZ( ${zoomNum}px)`
        if(sct >1000 +(4000*index)){
            arr.classList.add(`on`)            
            arts.forEach((arr,index2)=>{
                if(index !== index2){
                    arr.classList.remove("on")
                }
            })
        }
    })
    //0번째 아티클은 sct값이 1000보다커지면 클래스on
    //1번째 아티클은 sct값이 5000보다 커지면 클래스 on
    //2 9000
    //3 13000
    //4 17000
})
// li를 클릭하면
//0번째 li 0
//1번째 5000
//2 10000 ...
const lis = document.querySelectorAll(".leftnav li");
lis.forEach((li,index)=>{
    li.addEventListener("click",function(event){
        event.preventDefault();
        window.scrollTo({top:index*5000,behavior:"smooth"});
    })
})