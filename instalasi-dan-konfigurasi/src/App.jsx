/* eslint-disable react/prop-types */
import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <>
      <Header />

      <button onClick={handleClick}>Likes ({likes})</button>
      <hr />
    </>
  );
}

export default App;
