import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <img alt="none" src={props.image} className="card-img" onClick={() => {
        props.scoreTracking();
        props.lastTracking(props.id)
      }
      } />
    </div>
  );
}

export default FriendCard;
