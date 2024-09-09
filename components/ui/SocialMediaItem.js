const SocialMediaItem = ({ url, title, icon }) => {
  return (
    <li>
      <a href={url} target="_blank" rel="noreferrer">
        <img src={icon}></img> {title}
      </a>
    </li>
  );
};

export default SocialMediaItem;
