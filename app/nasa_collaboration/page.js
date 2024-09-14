"use client";

import React, { useState, useEffect } from "react";
import RoverPhoto from "@/components/nasa_collaboration/RoverPhoto";
import styles from "./page.module.css";

const API_KEY = "hOAFl6qsV6ipmn62jBxxfQrFhbmuW9JMiVzuh4RA";

const NASA_URLs = {
  astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
  marsRoverPhoto: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`,
};

export const NasaCollaboration = () => {
  const [dailyImg, setDailyImg] = useState({});
  const [roverPhoto, setRoverPhoto] = useState({});

  const [readMore, setReadMore] = useState(false);

  useEffect(() => {
    const fetchRoverPhotos = async () => {
      const roverPhotoResponse = await fetch(NASA_URLs.marsRoverPhoto).then(
        (response) => response.json()
      );
      setRoverPhoto(roverPhotoResponse);
    };

    fetchRoverPhotos();
  }, []);

  useEffect(() => {
    const fetchDailyImg = async () => {
      const dailyImgResponse = await fetch(NASA_URLs.astronomyPicOfTheDay).then(
        (response) => response.json()
      );
      setDailyImg(dailyImgResponse);
    };

    fetchDailyImg();
  }, []);

  const explanation = dailyImg.explanation;
  const attribution = "Portal Universe: Random APOD Generator";

  const mainText = explanation?.includes(attribution)
    ? explanation.replace(attribution, "")
    : explanation;

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Collaboration with NASA</h1>
        <section className="card">
          <h2>Astronomy Picture of the day</h2>
          <h3 className={styles.imgTitle}>{dailyImg.title}</h3>
          <img
            src={dailyImg.url}
            className={styles.nasaPicOfTheDayImg}
            alt=""
          />
          <p className={styles.imgDescription}>
            {readMore ? mainText : `${(mainText || "").substring(0, 300)}...`}
            <button
              type="button"
              className={styles.btnText}
              onClick={() => setReadMore(!readMore)}
            >
              {!readMore ? "Read more" : "Show less"}
            </button>
          </p>
          <span className={styles.attribution}>{attribution}</span>
        </section>
        <section className="card">
          <h2>Rover Photos</h2>
          {roverPhoto?.photos?.length ? (
            <div className={styles.gallerycontainer}>
              {roverPhoto.photos.map((photo, index) => (
                <RoverPhoto
                  key={`rover-${index}`}
                  src={photo.img_src}
                  date={photo.earth_date}
                  roverName={photo.rover.name}
                />
              ))}
            </div>
          ) : (
            <p>Loading rover photos...</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default NasaCollaboration;
