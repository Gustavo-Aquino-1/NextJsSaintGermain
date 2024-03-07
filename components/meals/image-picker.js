'use client'

import { useRef } from 'react'
import classes from './image-picker.module.css'
import { useState } from 'react'
import Image from 'next/image'

export default function ImagePicker({ label, name }) {
  const imageInputRef = useRef()
  const [pickedImage, setPickedImage] = useState()

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (!file) setPickedImage(null)
    else {
      const fileReader = new FileReader()
      fileReader.onload = () => {
        setPickedImage(fileReader.result)
      }
      fileReader.readAsDataURL(file)
    }
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {pickedImage ? (
            <Image src={pickedImage} alt='selected image' fill />
          ) : (
            <p>No Image picked</p>
          )}
        </div>
        <input
          className={classes.input}
          type='file'
          id={name}
          accept='image/png, 
        image/jpeg'
          name={name}
          ref={imageInputRef}
          onChange={handleImageChange}
          required
        />
        <button
          onClick={() => imageInputRef.current.click()} // the current gives the access for the element and object
          // onClick={() => document.querySelector(`#${name}`).click()} => other way
          type='button'
          className={classes.button}
        >
          Pick an Image
        </button>
      </div>
    </div>
  )
}
