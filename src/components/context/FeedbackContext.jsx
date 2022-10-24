import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    { id: 1, text: "This is Feedback item 1", rating: 10 },
    { id: 2, text: "This is Feedback item 2", rating: 9 },
    { id: 3, text: "This is Feedback item 3", rating: 7 },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  //Delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //Add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  //Edit feedback
  const editFeedback = (item) => {
    // feedback.map((item)=> { if (item.id == id ){
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

   //update feedback data
   const updateFeedback= (id, updatedItem)=> {
    setFeedback(feedback.map((item)=> {
      return item.id === id ? {...item, ...updatedItem} : item
    }))
  }

  return (
    <FeedbackContext.Provider value={{ feedback, deleteFeedback, addFeedback, editFeedback, feedbackEdit, updateFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

//creating the Feedback provider simply means creating a React function that calls the provider method on the CreateContext.
