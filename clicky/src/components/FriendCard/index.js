import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
        <img alt="none" src={props.image}  className="card-img"/>
        {/* <span onClick={() => props.removeFriend(props.id)} className="remove"> 𝘅</span> */}
    </div>
  );
}

export default FriendCard;
