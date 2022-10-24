import React, { useState, useContext } from "react";
import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackContext from "./context/FeedbackContext";

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  // const handleClick = ()=> {
  //     setRating ((prev)=> {
  //         return prev+1;
  //     })
  // }

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <div className="close">
        <FaTimes color="purple" onClick={() => deleteFeedback(item.id)} />
      </div>
      <div className="edit">
        <FaEdit color="purple" onClick={()=> editFeedback(item)} />
      </div>
      <div className="text-display">{item.text}</div>
      {/* <button onClick={handleClick}>Click me</button> */}
    </Card>
  );
}

export default FeedbackItem;
