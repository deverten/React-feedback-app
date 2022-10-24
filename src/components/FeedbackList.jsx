// import { useState, useContext } from "react";
// import FeedbackItem from "./FeedbackItem";
// import { motion, AnimatePresence } from "framer-motion";
// import FeedbackContext from "./context/FeedbackContext";

// function FeedbackList({ handleDelete }) {
//   const { feedback } = useContext(FeedbackContext);
//   console.log("feedback from feedbacklist", feedback);
//   if (!feedback || feedback.length === 0) {
//     return <h1>No data</h1>;
//   }
//   return (
//     // <FeedbackContext.Consumer>
//     //   {value=>
//     <div className="feedback-list">
//       <AnimatePresence>
//         {feedback.map((item) => (
//           <motion.div
//             key={item.id}
//             inital={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <FeedbackItem
//               key={item.id}
//               item={item}
//               handleDelete={handleDelete}
//             />
//           </motion.div>
//         ))}
//       </AnimatePresence>
//     </div>
//     //   }
//     // </FeedbackContext.Consumer>
//   );
// }

// export default FeedbackList;

import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
// import Spinner from './shared/Spinner'
import FeedbackContext from './context/FeedbackContext'

// NOTE: added layout prop for nicer animation
// https://www.framer.com/docs/animation/#layout-animations

function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext)

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback Yet</p>
  }

  return  (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )

  // return (
  //   <div className='feedback-list'>
  //     {feedback.map((item) => (
  //       <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
  //     ))}
  //   </div>
  // )
}

export default FeedbackList

