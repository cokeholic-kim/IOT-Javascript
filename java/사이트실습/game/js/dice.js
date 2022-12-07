const img = document.createElement("img")
let Dicenum = 0;
function dicegame(){
    Dicenum=Math.floor(Math.random() * 6)+1
    switch (Dicenum){
        case 1:
        img.src= "./img/dice/dice1.png"
        break
        case 2:
        img.src= "./img/dice/dice2.png"
        break
        case 3:
        img.src= "./img/dice/dice3.png"
        break
        case 4:
        img.src= "./img/dice/dice4.png"
        break
        case 5:
        img.src= "./img/dice/dice5.png"
        break
        case 6:
        img.src= "./img/dice/dice6.png"
        break
        default:
            console.log("1부터 5까지의 숫자가 아닙니다.");
    }
    document.querySelector("#dice").style.border = "none"
    document.querySelector("#dice").appendChild(img)
}
document.querySelector("#dice").addEventListener("click",dicegame)

