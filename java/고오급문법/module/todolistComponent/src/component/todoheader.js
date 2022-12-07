import Component from "./component.js";

export default class TodoHeader extends Component{
    // h1 인풋버튼
    template(){
        return`
        <h1>TodoList</h1>
        <div>
            <input type="text" class="appender" />
            <button id="addBtn">+</button>
        </div>
        `
    }
    setEvent(){
        console.log(this.props)
        const {addTodoList} = this.props;
        document.querySelector("#addBtn").addEventListener("click",()=>{
            // this.setState({inputtext:document.querySelector(".appender").value})
            addTodoList(document.querySelector(".appender").value)
        })
    }
}