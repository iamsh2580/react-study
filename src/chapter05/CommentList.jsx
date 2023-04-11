import React from "react";
import Comment from "./Comment";

const comments=[
    {
        name:"홍길동",
        comment:"안녕하세요,길동입니다."
    },
    {
        name:"유관순",
        comment:"나는야 유관순"
    }
];

function CommentList(props){
    return(
        <div>
            {comments.map((comment) => {
                return(
                    <Comment name={comment.name} comment={comment.comment}/>
                );
            })}
        </div>
    );
}

export default CommentList;