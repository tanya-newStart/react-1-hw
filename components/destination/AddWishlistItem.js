"use client";

import { useEffect, useState } from "react";
import styles from "./destination.module.css";

const planetThumbnails = {
  europa: "/destination/image-europa.png",
  mars: "/destination/image-mars.png",
  moon: "/destination/image-moon.png",
  titan: "/destination/image-titan.png",
  mercury: "/destination/image-mercury.png",
};

export const AddWishlistItem = ({ onAddWishlistItem }) => {
  const [name, setName] = useState("europa");
  const [thumbnail, setThumbnail] = useState("/destination/image-europa.png");

  useEffect(() => {
    const lowerCaseName = name.toLowerCase();
    if (planetThumbnails[lowerCaseName]) {
      setThumbnail(planetThumbnails[lowerCaseName]);
    }
  }, [name]);

  const onThumbnailChange = (e) => {
    const selectedThumbnail = e.target.value;
    setThumbnail(selectedThumbnail);

    const planetName = Object.keys(planetThumbnails).find(
      (key) => planetThumbnails[key] === selectedThumbnail
    );

    if (planetName) {
      setName(planetName);
    }
  };
  const onAddItemPressed = () => {
    if (name.trim()) {
      onAddWishlistItem(thumbnail, name);
      setName("");
    }
  };

  return (
    <div className={styles.addWishlistItem}>
      <p>Add custom planet to wishlist</p>
      <label htmlFor="customWishlist">Wishlist item name</label>
      <input
        id="customWishlist"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="customWishlistThumbnail">Wishlist item thumbnail</label>
      <select
        id="customWishlistThumbnail"
        value={thumbnail}
        onChange={onThumbnailChange}
      >
        {Object.entries(planetThumbnails).map(([planet, url]) => (
          <option key={planet} value={url}>
            {planet.toUpperCase()}
          </option>
        ))}
      </select>
      {/* <img src={thumbnail} alt="" /> */}
      <button onClick={onAddItemPressed}>ADD CUSTOM</button>
    </div>
  );
};
