import React from "react";
import UserInfo from "./UserInfo";
import "./Comment.css"

const users =[
    {
        name:"장원영",
        comment:"초긍정마인드,럭키비키",
        avatarUrl:"https://cdn.pixabay.com/photo/2013/03/12/17/54/hurricane-92968_640.jpg"

    },
    {
        name:"안유진",
        comment:"모두가 잘 좋아한다",
        avatarUrl:"https://cdn.pixabay.com/photo/2021/10/12/17/41/abstract-6704211_640.jpg"

    },
    {
        name:"가을",
        comment:"아이브의 신곡이 나왔어요",
        avatarUrl:"https://cdn.pixabay.com/photo/2025/08/28/11/47/user-9801864_1280.png"

    }
];

function Comment(props) {
    const currentDate = new Date();
    return(
        <div>
            {
                users.map((user) => {
                    return(
                        <div className="comment">
                            <UserInfo user={user}/>
                            <div className="comment-text">
                                {user.comment}
                            </div>
                            <div className="comment-date">
                                {currentDate.toDateString()}
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Comment;