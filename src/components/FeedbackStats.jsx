import React, {useContext} from 'react'
import FeedbackContext from './context/FeedbackContext';

function FeedbackStats() {
    const {feedback} = useContext(FeedbackContext)
     let average = feedback.reduce((acc,curr)=> {
        return acc+curr.rating 
     }, 0) / feedback.length;
     average = average.toFixed(1).replace(/[.,]0$/,'')

  return (
    <div className="feedback-stats">
    <div>{feedback.length} Reviews</div>
    <div>Average Rating: {isNaN(average) ? 0 : average}</div>
    </div>
  )
}

export default FeedbackStats