import React, { useState } from "react";
import useDebounce from "../../hooks/useDebounce";

export default function Debounce() {
  const [show, setShow] = useState(false);
  const [response,setResponse] = useState(null);

  async function sendData() {
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const res = await posts.json();
    setResponse(res);
  }

  const deBounceFn = useDebounce(sendData);

  function data() {
    setShow((show) => !show);
  }
  return (
    <>
      <input type="text" onChange={deBounceFn}></input>
      <button onClick={data}>Send</button>
      {show && response && <div>{response.title}</div>}
    </>
  );
}
