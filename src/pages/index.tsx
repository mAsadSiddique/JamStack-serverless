import { Link, navigate } from "gatsby";
import React from "react";
import Header from './Components/Header';
import Layout from "./Components/Layout";
import Button from '@material-ui/core/Button'

export default function Home() {
  return (
    <Layout HeaderTitle="Home">

      <Header
        title="Home"
      />
      <br />
      <Link to="/about">About</Link>
      <br />
      {/* <button onClick={() => {
        navigate("/about")
      }}>Go to About Page</button> */}
      <Button variant="contained" color="primary"
        onClick={() => navigate("/about")}>
        GO TO About Page
      </Button>


    </Layout>


  )
}
