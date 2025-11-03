import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App'; // App은 이제 사용하지 않으므로 주석 처리하거나 지워도 됩니다.
import reportWebVitals from './reportWebVitals';
import Library from './chp03/Library.jsx'; // 👈 1. Library.jsx 파일에서 Library 컴포넌트 가져오기
import './chp03/book.css';
import ConfirmDialogs from "./chp04/ConfirmDialogs";
import ConfirmDialog from "./chp04/ConfirmDialog";
import './chp04/ConfirmDialog.css'
import Clock from "./chp04/Clock";
import './chp04/Clock.css'
import BookList from "./chp05/exam02/BookList";
import CommentList from "./chp05/CommentList";
import Notification from "./chp06/Notification";
import Counter from './chp07/exam01/Counter'
import Accomdate from "./chp07/Accomdate";
import Toggle_2 from "./chp08/Toggle_2";
import ToggleFunction from "./chp08/ToggleFunction";
import MyButton_Argument from "./chp08/MyButton_Argument";
import InputTest from "./chp08/InputTest";
import LoginControl from "./chp09/ex2/LoginControl";
import MainPageWarning from "./chp09/ex3/MainPageWarning.css";
import LandingPage from "./chp09/closing_ex/LandingPage";
import Button from "./chp04/Button";
import './chp04/Button.css'
import Avatar from "./chp05/exam01/Avatar";
import Comment from "./chp05/Comment";
import Book from "./chp05/exam02/Book";
import NotificationList from "./chp06/NotificationList";
import ConfirmButtonFunction from "./chp08/ConfirmButtonFunction";
import Toggle from "./chp08/Toggle";
import AttendanceCard from "./chp10/ex3/AttendanceCard";
import Attendance from "./chp10/ex4/Attendance";
import AppNumberList from "./chp10/ex1/AppNumberList";
import StudentAttendance from "./chp10/ex2/StudentAttendance";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Attendance/>
    </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
