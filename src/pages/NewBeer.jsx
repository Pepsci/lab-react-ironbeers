import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewBeer = () => {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirstBrewed] = useState("");
  const [brewers_tips, setBrewersTips] = useState("");
  const [attenuation_level, setAttenuationLevel] = useState("");
  const [contributed_by, setContributedBy] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    };

    axios
      .post(" https://ih-beers-api2.herokuapp.com/beers/new", data)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
        setError("There was an error, please try again");
      });
  };

  return (
    <div>
      {error !== "" && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="tagline">Tagline</label>
        <input
          type="text"
          name="tagline"
          id="tagline"
          value={tagline}
          onChange={(e) => setTagline(e.target.value)}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="first_brewed">First Brewed</label>
        <input
          type="text"
          name="first_brewed"
          id="first_brewed"
          value={first_brewed}
          onChange={(e) => setFirstBrewed(e.target.value)}
        />
        <label htmlFor="brewers_tips">Brewers Tips</label>
        <input
          type="text"
          name="brewers_tips"
          id="brewers_tips"
          value={brewers_tips}
          onChange={(e) => setBrewersTips(e.target.value)}
        />
        <label htmlFor="attenuation_level">Attenuation Level</label>
        <input
          type="number"
          name="attenuation_level"
          id="attenuation_level"
          value={attenuation_level}
          onChange={(e) => setAttenuationLevel(e.target.value)}
        />
        <label htmlFor="contributed_by">Contributed By</label>
        <input
          type="text"
          name="contributed_by"
          id="contributed_by"
          value={contributed_by}
          onChange={(e) => setContributedBy(e.target.value)}
        />
        <button>Add a Beer</button>
      </form>
    </div>
  );
};

export default NewBeer;
