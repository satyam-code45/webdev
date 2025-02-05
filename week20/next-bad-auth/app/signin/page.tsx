"use client";
import axios from "axios";
export default function () {
  return (
    <div>
      Sign in page
      <input type="text"></input>
      <input type="text"></input>
      <button
        onClick={async () => {
          const response = await axios.post(
            "http://localhost:3000/api/signin",
            {
              username: "satyam",
              password: "satyam",
            }
          );
          localStorage.setItem("token", response.data.token);
        }}
      >
        Sign in
      </button>
    </div>
  );
}
