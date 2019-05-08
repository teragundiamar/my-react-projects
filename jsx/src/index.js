// import React and ReactDom libraries
import React from "react";
import ReactDom from "react-dom";
import faker from "faker";
import Comment from "./comments";
import ApprovalCard from "./approvalCard";

// create a react component
const App = () => {
  return (
    <div className="ui comments">
      <h3 className="ui dividing header">Comments</h3>
      <ApprovalCard>
        <Comment
          author={`${faker.name.firstName()} ${faker.name.lastName()}`}
          time="some time a go"
          post={faker.lorem.sentence()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <Comment
          author={`${faker.name.firstName()} ${faker.name.lastName()}`}
          time="some time a go"
          post={faker.lorem.sentence()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <Comment
          author={`${faker.name.firstName()} ${faker.name.lastName()}`}
          time="some time a go"
          post={faker.lorem.sentence()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

// take the react component and show it on the screen
ReactDom.render(<App />, document.querySelector("#root"));
