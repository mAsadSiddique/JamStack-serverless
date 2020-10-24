import { Link, navigate } from "gatsby";
import React from "react";



export default function Home() {
  return (
    <div>
      Hello world!
      <br />
      <Link to="/about">About</Link>
      <br />
      <button onClick={() => {
        navigate("/about")
      }}>Go to About Page</button>
    </div>

  )
}
