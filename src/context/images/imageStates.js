import { useContext, useState } from "react";
import ImageContext from "./imageContext";
import AuthContext from "../auths/authContext";

let test = [
  {
    _id: "64afb7d9eadfe4d0cbe4f926",
    user: "64afb7a5eadfe4d0cbe4f914",
    fileName: "faabfd4880671189dae4bd200",
    url: "http://localhost:5000/api/image/faabfd4880671189dae4bd200",
    size: 81479,
    tag: ["tanoy"],
    date: "1689237465614",
    __v: 0,
  },
  {
    _id: "64afb7f7eadfe4d0cbe4f930",
    user: "64afb7a5eadfe4d0cbe4f914",
    fileName: "faabfd4880671189dae4bd201",
    url: "http://localhost:5000/api/image/faabfd4880671189dae4bd201",
    size: 150035,
    tag: ["tanoy"],
    date: "1689237495786",
    __v: 0,
  },
  {
    _id: "64afb809eadfe4d0cbe4f935",
    user: "64afb7a5eadfe4d0cbe4f914",
    fileName: "faabfd4880671189dae4bd202",
    url: "http://localhost:5000/api/image/faabfd4880671189dae4bd202",
    size: 93764,
    tag: ["nature"],
    date: "1689237513842",
    __v: 0,
  },
];

const baseUrl = "http://localhost:5000/api/image";
const ImageState = (props) => {
  const [images, setImages] = useState(test);
  const { token } = useContext(AuthContext);

  // Upload Image
  const uploadImage = async (formData) => {
    const res = await fetch(`${baseUrl}/upload`, {
      method: "POST",
      headers: {
        "auth-token": token,
      },
      body: formData,
    });
    const data = await res.json();
    if (data.success) {
      let img = {
        _id: data.image._id,
        user: data.image.user,
        fileName: data.image.fileName,
        url: data.image.url,
        size: data.image.size,
        tag: data.image.tag,
        date: data.image.date,
      };
      setImages(images.concat(img));
      return data.success;
    }
  };

  // Get All Images
  const getAllImage = async () => {
    const res = await fetch(`${baseUrl}/images`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    });
    const data = await res.json();
    if (data.success) {
      setImages(data.images);
    }
  };

  const searchImageByTag = async (tag) => {
    const res = await fetch(`${baseUrl}/images/${tag}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    });
    const data = await res.json();
    if (data.success) {
      setImages(data.images);
    }
  };

  // Delete Image
  const deleteImage = async (id) => {
    const newImagesArray = images.filter((value)=>{return value._id!==id});
    setImages(newImagesArray);
    // Api Call
    const res = await fetch(`${baseUrl}/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    });
    const data = await res.json();
  };
  return (
    <ImageContext.Provider
      value={{
        images,
        uploadImage,
        getAllImage,
        searchImageByTag,
        deleteImage,
      }}
    >
      {props.children}
    </ImageContext.Provider>
  );
};

export default ImageState;
