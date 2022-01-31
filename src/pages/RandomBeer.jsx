import React, { useEffect, useState } from "react";
import axios from "axios";

const RandomBeer = () => {
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then(({ data }) => {
        console.log(data);
        setBeer(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="beerCard">
      <img src={beer.image_url} alt={beer.name} />
      <div className="beerTopCard">
        <div className="left">
          <h3>{beer.name}</h3>
          <p>{beer.tagline}</p>
        </div>
        <div className="right">
          <p>{beer.attenuation_level}</p>
          <p>{beer.first_brewed}</p>
        </div>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
      </div>
    </div>
  );
};

export default RandomBeer;
