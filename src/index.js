import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App'; // App은 이제 사용하지 않으므로 주석 처리하거나 지워도 됩니다.
import reportWebVitals from './reportWebVitals';
import Library from './chp03/Library.jsx'; // 👈 1. Library.jsx 파일에서 Library 컴포넌트 가져오기
import './chp03/book.css';
import ConfirmDialogs from "./chp04/ConfirmDialogs";
import ConfirmDialog from "./chp04/ConfirmDialog";


import Reservation from "./chp11/ex3/Reservation";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <ConfirmBoilVerVedict/>
    </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
