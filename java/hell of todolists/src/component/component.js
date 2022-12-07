export default class Component{
    props;
    target;
    state;
    constructor(target,props){
        this.target = target;
        this.props = props;
        this.setup();
        this.render();
        this.setEvent();//요소를 innerhtml에 넣어준후에 이벤트추가
    }
    render(){
        this.target.innerHTML = this.template();
        this.mounted()
    }
    setstate(newstate){
        this.state = {...this.state , ...newstate}
        this.render();   // state를 새로 만들어준뒤 다시 reder함수로 그려준다
    }
    setup(){}
    template(){ return "";} 
    mounted(){}
    setEvent(){}
}