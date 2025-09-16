import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "방신 실",
        comment: "우승을 축하드립니다",
        url: "https://avatar.iran.liara.run/public/19",
    },
    {
        name: "홍정민",
        comment: "건강한 모습으로 만나요",
        url: "https://avatar.iran.liara.run/public/20",
    },
    {
        name: "박성현",
        comment: "오랜만에 멋진 모습 좋았습니다",
        url: "https://avatar.iran.liara.run/public/21",
    },
];
function CommentList(){
    return(
        <div>
            {
                comments.map((comment) => {
                    return(
                      <Comment name={comment.name} comment={comment.comment}/>
                        );
                    }
                )
            }
        </div>
    );
}
export default CommentList