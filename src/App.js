// import Header from "./components/Header";
// import { v4 as uuidv4 } from "uuid";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   NavLink,
// } from "react-router-dom";
// import { useState } from "react";
// import FeedbackData from "./components/data/Feedbackdata";
// import FeedbackList from "./components/FeedbackList";
// import FeedbackStats from "./components/FeedbackStats";
// import Feedbackform from "./components/Feedbackform";
// // import CondtionalRender from "./components/Counter";
// import AboutPage from "./pages/AboutPage";
// import AboutLink from "./components/AboutLink";
// import Post from "./components/Post";
// import FeedbackProvider from "./components/context/FeedbackContext";

// export default function App() {
//   const [feedback, setFeedBack] = useState(FeedbackData);

//   const deleteFeedback = (id) => {
//     if (window.confirm("Are you sure you want to delete?")) {
//       setFeedBack(feedback.filter((item) => item.id !== id));
//     }
//   };

//   const addFeedback = (newFeedback) => {
//     newFeedback.id = uuidv4();
//     console.log(newFeedback);
//     setFeedBack([newFeedback, ...feedback]);
//   };

//   return (
//     <FeedbackProvider>
//       <Router>
//         <Header />
//         <div className="container">
//           <Routes>
//             <Route
//               exact
//               path="/"
//               element={
//                 <>
//                   <Feedbackform addFeedback={addFeedback} />
//                   <FeedbackStats feedback={feedback} />
//                   {/* <Card reverse={true}>This card works</Card> */}
//                   <FeedbackList handleDelete={deleteFeedback} />
//                 </>
//               }
//             ></Route>
//             <Route path="/about" element={<AboutPage />} />
//             {/* <Route path="/post/:id/:name" element={<Post />} />
//              */}
//             <Route path="/post/*" element={<Post />} />
//           </Routes>
//           {/* <Card>
//           <NavLink to='/' activeClassName='active'>Home</NavLink>
//           <NavLink to='/about' activeClassName='active'>About</NavLink>
//         </Card> */}
//           <AboutLink />
//         </div>
//       </Router>
//     </FeedbackProvider>
//   );
// }

// React throws error of needing one parent element because a
//a return doesnt return multiple statements in a function


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/Feedbackform'
import AboutLink from './components/AboutLink'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './components/context/FeedbackContext'

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path='/about' element={<AboutPage />} />
          </Routes>

          <AboutLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
