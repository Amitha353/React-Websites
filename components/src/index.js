import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <br />
      <ApprovalCard>
        <CommentDetail
          author="Anna"
          timeAgo="Today at 12:00PM"
          content="Fun day!!!"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Bobby"
          timeAgo="Yesterday ay 5:00AM"
          content="College began"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Cathy"
          timeAgo="Today at 4:00PM"
          content="There is light at the end of the tunnel"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Dand"
          timeAgo="Yesterday at 2:20PM"
          content="God helps those who help themselves"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
          <h4>Warning!</h4>
          Are you sure you want to do this?
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
