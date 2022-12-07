import Component from "./component.js";

export default class Todoheader extends Component{
    template(){
        return`
        <h1>todolist</h1>
        <div>
            <input type="text" class= "appender" />
            <button id = "addBtn">+</button> 
        </div>
        `
    }
}