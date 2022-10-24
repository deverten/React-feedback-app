import React, { useState } from "react";

function CondtionalRender() {
  const [data, setData] = useState(false);

  return <>{data ? <div>Loading data...</div> : <div>Data is here!</div>}</>;
}

export default CondtionalRender;
