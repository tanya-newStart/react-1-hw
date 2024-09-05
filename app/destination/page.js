"use client";

import { useState } from "react";

import styles from "@/components/destination/destination.module.css";
import { AddWishlistItem } from "@/components/destination/AddWishlistItem";
import { PlanetWishlistItem } from "@/components/destination/PlanetWishlistItem";
import PlanetCard from "@/components/destination/PlanetCard";
import { planets } from "@/components/destination/data.js";

export const Destinations = () => {
  const [selectedPlanets, setSelectedPlanets] = useState([]);

  let isPlanetSelected = selectedPlanets.length > 0;
  let numberOfPlanets = selectedPlanets.length;

  const onAddOrRemovePlanet = (name) => {
    setSelectedPlanets((prevSelectedPlanets) => {
      const isAlreadySelected = prevSelectedPlanets.includes(name);

      if (isAlreadySelected) {
        return prevSelectedPlanets.filter((planetName) => planetName !== name);
      } else {
        return [...prevSelectedPlanets, name];
      }
    });
  };

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>
          {!isPlanetSelected ? (
            <p>No planets in wishlist :(</p>
          ) : (
            <p>
              You have {numberOfPlanets} planet
              {numberOfPlanets !== 1 ? "s" : ""} in your wishlist
            </p>
          )}

          <b>List coming soon after lesson 3!</b>

          {/* STOP! - this is for week 3!*/}
          {/* TASK - React 1 week 3 */}
          {/* Import the AddWishlistItem react component */}
          {/* <AddWishlistItem /> */}
          {/* TASK - React 1 week 3 */}
          {/* Convert the list, so it is using selectedPlanets.map() to display the items  */}
          {/* Implement the "REMOVE" function */}
          {/* uncomment the following code snippet: */}
          {/* 
          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            <PlanetWishlistItem 
              name="europa"
              onRemove={() => removeFromWishlist('europa')}
              thumbnail="/destination/image-europa.png"
            />
            <PlanetWishlistItem 
              name="europa"
              onRemove={() => removeFromWishlist('europa')}
              thumbnail="/destination/image-europa.png"
            />
          </div> */}
        </section>
        <section className="card">
          <h2>Possible destinations</h2>
          {planets.map((planet) => (
            <PlanetCard
              key={planet.id}
              name={planet.name}
              description={planet.description}
              thumbnail={planet.thumbnail}
              isSelected={selectedPlanets.includes(planet.name)}
              onAddOrRemovePlanet={onAddOrRemovePlanet}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Destinations;
