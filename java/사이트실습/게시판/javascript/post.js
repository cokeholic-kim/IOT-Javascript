fetch("data/data.json")
.then(response => response.json())
.then(data => {
    console.log(data.booklist)
    displayli(data.booklist)
    listfilter(data.booklist)
})
// 클릭하는 년도에 따라 필터링 해주는 함수
function listfilter(booklist){
    document.querySelector(".btns").addEventListener("click",function(event){
        const{key,value} = event.target.dataset
        console.log(key,value)
        let filtered = booklist.filter(list=> list[key] == value)
        displayli(filtered)
    })
}

// json 자료를 li태그로 만들어서 뿌려주는 함수
function displayli(booklist){
    let str="";
    str = booklist.map(list=>{
       return `<li class="post">
       <p>${list.writer}</p>
       <p>${list.title}</p>
       <p>${list.year}</p>
       </li>` 
    }).join("")
    console.log(booklist)
    document.querySelector(".posts").innerHTML = str;
}