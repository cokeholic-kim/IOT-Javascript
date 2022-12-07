export default class Component{
    // 필드
    target;
    state;
    // 생성자
    constructor(target){
        this.target = target; //target 은 #app
        this.setup(); //스테이트값 초기화
        this.render(); //
    }
    // 메소드
    setup(){}
    //화면구현 리턴
    template(){ return "";}
    setEvent(){}
    render(){
        this.target.innerHTML = this.template(); // 화면에 나타내기
        this.setEvent(); // dom 요소 이벤트연결
    }
    setState(newstate){
        this.state = {...this.state , ...newstate }
        // 화면그리기 호출
        this.render()
    }
}