// #app에 div를 2개 만들어줌

import Component from "./component/component.js";
import TodoHeader from "./component/todoheader.js";
import TodoLists from "./component/TodoLists.js";

/*
이렇게 만들어 줄꺼임 
<div id = "app">
    <div id = "insertTodo"></div>
    <div id = "insertTodo"></div>
</div>
*/
export default class App extends Component{
    setup(){
        console.log("setup"); //componet setup의 초기화값을 오버라이딩 해줌
        this.state = { //state값 세팅
            inputText: "",
            todoLists: [
                    {
                    no:1,
                    content:`할일1`,
                    isDone:false
                    },
                    {
                    no:2,
                    content:`할일1`,
                    isDone:false
                    },
                    {
                    no:3,
                    content:`할일1`,
                    isDone:false
                    },
                    {
                    no:4,
                    content:`할일1`,
                    isDone:false
                    }
        
            ]
        }
    }
    template(){
        return`
        <div id = "insertTodo"></div>
        <div id = "listTodo"></div>
        `;
    }
    mounted(){
        const {addTodoList} = this; //객체 구조분해할당
        const todoheader = document.querySelector("#insertTodo");
        const todolists = document.querySelector("#listTodo")

        new TodoHeader(todoheader,{addTodoList: addTodoList.bind(this)}) //props로 app의객체를 넘겨줌 bind로 this가 app을 지정하도록 세팅
        new TodoLists(todolists,{lists: this.state.todoLists}); //lists에 todolists 배열을 넘겨줌 props에 담김
    }
    addTodoList(content){
        const{todoLists} = this.state;
        console.log(todoLists);
        this.setState({
            todoLists:[
                ...todoLists,
                {
                    no:4,
                    content: content,
                    isDone:false
                }
            ]
        })
    }
}
