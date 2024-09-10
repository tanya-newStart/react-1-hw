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

  const removeFromWishlist = (name) => {
    setSelectedPlanets((prevSelectedPlanets) =>
      prevSelectedPlanets.filter((planet) => planet.name !== name)
    );
  };

  const onAddWishlistItem = (thumbnail, name) => {
    setSelectedPlanets((prevSelectedPlanets) => {
      if (!prevSelectedPlanets.some((planet) => planet.name === name)) {
        return [...prevSelectedPlanets, { thumbnail, name }];
      }
      return prevSelectedPlanets;
    });
  };

  const handlePlanetAction = (thumbnail, name) => {
    if (selectedPlanets.some((planet) => planet.name === name)) {
      removeFromWishlist(name);
    } else {
      onAddWishlistItem(thumbnail, name);
    }
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
          <AddWishlistItem onAddWishlistItem={onAddWishlistItem} />
          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            {isPlanetSelected && (
              <div className={styles.wishlistList}>
                {selectedPlanets.map((planet) => (
                  <PlanetWishlistItem
                    key={planet.name}
                    name={planet.name}
                    thumbnail={planet.thumbnail}
                    onRemove={() => removeFromWishlist(planet.name)}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
        <section className="card">
          <h2>Possible destinations</h2>
          {planets.map((planet) => (
            <PlanetCard
              key={planet.id}
              name={planet.name}
              description={planet.description}
              thumbnail={planet.thumbnail}
              isSelected={selectedPlanets.some((p) => p.name === planet.name)}
              onAddOrRemovePlanet={() =>
                handlePlanetAction(planet.thumbnail, planet.name)
              }
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Destinations;
