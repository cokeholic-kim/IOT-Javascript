import Component from "./component/component.js"
import Todoheader from "./component/todoheader.js"

export default class App extends Component{
    setup(){
        this.state={
            inputText:"",
            todoLists:[
                {
                    no:1,
                    content:"할일1",
                    isDone:false
                },
                {
                    no:2,
                    content:"할일1",
                    isDone:false
                },
                {
                    no:3,
                    content:"할일1",
                    isDone:false
                },
                {
                    no:4,
                    content:"할일1",
                    isDone:false
                }
            ]
        }
    }
    template(){
        return`
        <div id="inserttodo"></div>
        <div id="listtodo"></div>
        `
    }
    mounted(){
        const inserttodo = document.querySelector("#inserttodo")
        const listtodo = document.querySelector("#listtodo")

        new Todoheader(inserttodo)
    }
    addTodoList(content){
        const{todoLists} = this.state
        console.log(todoLists);
        this.setstate({
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