import styles from "./RoverPhoto.module.css";
const RoverPhoto = ({ src, date, roverName }) => {
  return (
    <div className={styles.photocontainer}>
      <img className={styles.roverImage} src={src} alt="" />
      <div className={styles.photodetails}>
        <p>{roverName}</p>
        <p>Date: {date}</p>
      </div>
    </div>
  );
};

export default RoverPhoto;
