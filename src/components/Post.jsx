import React from "react";
// import { useParams } from "react-router-dom";
import { Navigate, useNavigate, Routes, Route } from "react-router-dom";

function Post() {
  const navigate = useNavigate();

  //   const params = useParams();
  const status = 200;

  const onClick = () => {
    navigate("/about");
  };

  if (status === 404) {
    return <Navigate to="/notfound" />;
  }
  return (
    <div>
      {/* <h1>Post {params.id}</h1>
      <p>Name {params.name}</p> */}
      <div>Post</div>
      <button onClick={onClick}>Click</button>
      <Routes>
        <Route path='/show' element={<h1>Show me</h1>}></Route>
      </Routes>
    </div>
  );
}

export default Post;


