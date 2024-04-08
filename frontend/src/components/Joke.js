import React, { useState, useEffect } from "react";
import "./Joke.css";
import axios from "axios";
import cookies from "js-cookies";

const Joke = () => {
  const [joke, setJoke] = useState("");
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const id = cookies.getItem("current");
        const response = await axios.get(
          `http://localhost:8000/api/jokes/${id ? id : 0}`
        );
        setJoke(response.data.content);
      } catch (error) {
        console.error(error);
      }
    };
    fetchJoke();
  }, []);

  const handleVote = async (vote) => {
    try {
      const id = cookies.getItem("current");
      const response = await axios.post(
        `http://localhost:8000/api/jokes/${id ? id : 0}/vote`,
        { vote: vote },
        { withCredentials: true, credentials: "include" }
      );
      setJoke(response.data.content);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="joke-container">
      <p>{joke}</p>
      <div className="vote">
        <button
          className={`button blue-button ${hover ? "hover" : ""} ${
            active ? "active" : ""
          }`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => {
            setHover(false);
            setActive(false);
          }}
          onMouseDown={() => setActive(true)}
          onMouseUp={() => setActive(false)}
          onClick={() => handleVote("like")}
        >
          This is funny!
        </button>
        <button
          className={`button green-button ${hover ? "hover" : ""} ${
            active ? "active" : ""
          }`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => {
            setHover(false);
            setActive(false);
          }}
          onMouseDown={() => setActive(true)}
          onMouseUp={() => setActive(false)}
          onClick={() => handleVote("dislike")}
        >
          This is not funny
        </button>
      </div>
    </div>
  );
};

export default Joke;
