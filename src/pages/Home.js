import React from "react";
import { Link } from "react-router-dom";
import Pizza from "../assets/pizza.jpeg";
import '../styles/Home.css'

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${Pizza})` }}>
      <div
        className="headerContainer"
      >
        <h1> Jeager's Pizza </h1>
        <p> Pizza from Wall Maria </p>
        <Link to="/Menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
