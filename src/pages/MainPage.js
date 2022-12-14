import React from "react";
import Nav from "./nav";
import "../App.css";

const MainPage = () => {
  return (
    <div className="parent">
      <div className="logout-div">
        <a href="#" id="logo">
          {" "}
          Utility App
        </a>
        
        <button className="logout" class="btn btn-outline-secondary">
          <a href="/"> Logout</a>
        </button>
      </div>
      <div className="App">
        <button type="button" class="btn btn-outline-primary">
          <a href="./Home">News</a>
        </button>
        <button type="button" class="btn btn-outline-primary">
          <a href="./Weather">Weather</a>
        </button>
       
        <button type="button" class="btn btn-outline-primary">
          <a href="./Jobs">Jobs Portal</a>
        </button>
        
        <button type="button" class="btn btn-outline-primary">
          <a href="./Youtube">Watch</a>
        </button>
        <button type="button" class="btn btn-outline-primary">
          <a href="https://im-rahul-raj.github.io/chatbot/">Talk to a BOT</a>
        </button>

        <button type="button" class="btn btn-outline-primary">
          <a href="https://chat-sh.herokuapp.com/">Chat in Private</a>
        </button>

        

        
      
      </div>
      <div class="rotating">
          <div className="insideRotate"></div>
        </div>

        <footer>Copyright Rahul & Team&copy; 2022</footer>
      
      
    </div>
  );
};
export default MainPage;
