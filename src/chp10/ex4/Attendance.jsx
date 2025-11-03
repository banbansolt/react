import React from "react";
import './Attendance.css';
import img1 from './imgs/1.jpg'
import img2 from './imgs/2.jpg'
import img3 from './imgs/3.jpg'
import img4 from './imgs/4.jpg'
import img5 from './imgs/5.jpg'
import img6 from './imgs/6.jpg'
import img7 from './imgs/7.jpg'

const moneys = [
    {id: 1, name:"한국", grade:2, major:"￦(원)", avatar: img1},
    {id: 2, name:"미국", grade:1, major:"$(달러)", avatar: img2},
    {id: 3, name:"유럽", grade:2, major:"€(유로)", avatar: img3},
    {id: 4, name:"중국", grade:2, major:"Y(위안)", avatar: img4},
    {id: 5, name:"일본", grade:1, major:"￥(엔)", avatar: img5},
    {id: 6, name:"영국", grade:2, major:"£(파운드)", avatar: img6},
    {id: 7, name:"터키", grade:2, major:"₺(리라)", avatar: img7},
];
function Attendance() {
    return(
        <div className="attendance-container">
            <h2 className={"attendance-title"}>여러나라 돈 </h2>
            <div className={"card-container"}>
                {
                    moneys.map((money) => (
                            <div className={"student-card"} key={money.id}>
                                <img src={money.avatar} alt={money.name} className={"student-avatar"}/>
                                <div className={"money-info"}>
                                    <h3>{money.name}</h3>
                                    <p>{money.name} - {money.major}</p>
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    );
}
export default Attendance;