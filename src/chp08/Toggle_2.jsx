import React from "react";

class Toggle_2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        // 생성자에서 this 키워드를 사용하기 위해 binding을 해주어야 함
        this.handleClick = this.handleClick.bind(this);
    }

    // Event Handler 함수 정의
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <div align="center" style={{ margin: 200 }}>
                <button onClick={this.handleClick}>
                    Bind 생성 {this.state.isToggleOn ? "On" : "Off"}
                </button>
            </div>
        );
    }
}

export default Toggle_2;
