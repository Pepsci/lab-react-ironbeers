import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllBeers = () => {
  const [beers, setBeer] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then(({ data }) => {
        setBeer(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <h1>All Beers</h1>
      <div className="beerCard">
        {beers.map((beer) => {
          return (
            <div key={beer._id} className="inCardBeer">
              <img src={beer.image_url} alt={beer.name} />
              <div className="incardBeerInfo">
                <h3>{beer.name}</h3>
                <p>{beer.tagline}</p>
                <p>
                  <b>Created by :</b>
                  {beer.contributed_by}
                </p>
                <Link to={`${beer._id}`}>Link</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllBeers;
