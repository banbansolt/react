import React from "react";
import UserInfo from "./UserInfo";
import './Comment.css'

const users = [
    {
        name: "장원영",
        comment: "초긍정마인드, 럭키비키",
        avatarUrl: "https://cdn.pixabay.com/photo/2025/08/28/11/47/user-9801872_1280.png"
    },
    {
        name: "안유진",
        comment: "모두가 잘 좋아한다.~~",
        avatarUrl: "https://cdn.pixabay.com/photo/2025/08/28/11/47/user-9801872_1280.png"
    },
    {
        name: "가을~~",
        comment: "아이브의 신곡이 나왔어요.",
        avatarUrl: "https://cdn.pixabay.com/photo/2025/08/28/11/47/user-9801872_1280.png"
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