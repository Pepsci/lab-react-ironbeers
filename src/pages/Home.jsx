import React from "react";
import { NavLink } from "react-router-dom";
import beers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";

const Home = () => {
  return (
    <div>
      <nav className="navBar-Home">
        <ul>
          <li>
            <NavLink to="/all-beer">
              <img src={beers} alt="" />
              <div>
                <h3>All Beers</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae, labore voluptates a esse tempora incidunt numquam
                  temporibus, laboriosam magni, earum velit. Labore facere eius
                  laborum magnam voluptate officiis iste odit!
                </p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/random-beer">
              <img src={randomBeer} alt="" />
              <h3>Random Beer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
                labore voluptates a esse tempora incidunt numquam temporibus,
                laboriosam magni, earum velit. Labore facere eius laborum magnam
                voluptate officiis iste odit!
              </p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-beer">
              <img src="/new-beer.png" alt="" /> <h3>New Beer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti possimus quis tempore nulla sint necessitatibus in,
                quas perferendis temporibus quos quaerat explicabo sunt ratione
                nam dolore odit ea adipisci minima?
              </p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
