import React from "react";

const Comment = props => {
  console.log(props);
  return (
    <div className="comment">
      <a className="avatar">
        <img src={props.avatar} />
      </a>
      <div className="content">
        <a className="author">{props.author}</a>
        <div className="metadata">
          <span className="date">{props.time}</span>
        </div>
        <div className="text">{props.post}</div>
      </div>
    </div>
  );
};

export default Comment;
