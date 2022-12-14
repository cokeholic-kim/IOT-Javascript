import Component from "./component.js";


export default class TodoLists extends Component{
    template(){
        const {lists} = this.props;
        return`
        <ul>
            ${lists.map(li=>`<li>${li.content}</li>`).join("")}
        </ul>
        `
    }
}