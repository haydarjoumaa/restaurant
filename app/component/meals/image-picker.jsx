"use client";
import React, { useRef, useState } from "react";

import classes from "./image-picker.module.css";
import Image from "next/image";

function ImagePicker({ label, name }) {
  const imageInputRef = useRef(null);
  const [pickImage, setPickImage] = useState();
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setPickImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = (url) => {
      setPickImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };
  const clickHandler = () => {
    imageInputRef.current.click();
  };
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickImage && <p>No Image picked yet</p>}
          {pickImage && (
            <Image fill src={pickImage} alt="the image selected by the user" />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInputRef}
          onChange={handleImageChange}
          required
        />
        <button className={classes.button} type="button" onClick={clickHandler}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}

export default ImagePicker;
