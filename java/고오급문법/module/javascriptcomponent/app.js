import Component from "./component.js";
export default class App extends Component{
    setup(){
        this.state = {students:["stu1","stu2","stu3","stu4"] } //스테이트값 초기화
    }
    template(){
        const{students} = this.state;
        return`
        <ul>
            ${students.map(stu=>`<li>${stu}</li>`).join("")}
        </ul>
        <button id="add">추가</button>
        `;
    }
    setEvent(){
        const {students} = this.state;
        this.target.querySelector("#add")
        .addEventListener("click",()=>{
            this.setState({students:[ ...students, `stu${students.length + 1}`]})
        })
    }
}
