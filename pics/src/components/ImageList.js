import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";
import neonlights from "../assests/images/black_brick.jpg";


const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return (
    <div style={{  backgroundColor: "black" }}>
      <div className="image-list">{images}</div>
    </div>
  );
};

export default ImageList;
