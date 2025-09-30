import React from "react";

class Toggle extends React.Component{
    constructor(props) {
        super(props);

        this.state = {isToggleOn: true}

        this.handleClick = this.handleClick.bind(this);
    }
handleClick(){
        this.setState((prevState) => ({
            isToggleOn: !prevState
    }))
}

render() {
        return(
            <div align="center" style={{margin: 200}}>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? "On" : "Off"}
                </button>
            </div>

        );
    }
}
export default Toggle;