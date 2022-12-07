export default class Component {
    target;
    props;
    state;
    constructor(target,props){
        this.target = target;
        this.props = props;
        this.setup();
        this.render();
        this.setEvent();
    }
    render(){
        this.target.innerHTML = this.template();
        this.mounted()
    }
    setState(newstate){
        this.state = {...this.state , ...newstate} //원래의 state와 newstate를 합쳐서 state에 넣어줌
        this.render(); //state가 바꺄서 다시 렌더
    }    
    setup(){}
    template(){return "";}
    mounted(){}
    setEvent(){}
}