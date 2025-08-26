// import React from "react";
// import ReactDOM from "react-dom/client";

function Mybutton(props){
    const [isClicked, setIsClicked] = React.useState(false);

    return React.createElement('button',{onClick:() => setIsClicked(true)}, isClicked ? 'Clicked' : 'Click Here!')
}

const domcontainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domcontainer);
root.render(React.createElement(Mybutton))