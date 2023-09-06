import React, { Fragment, useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FileUpload from "./elements/FileUpload";
import Button from "./elements/Button";
import * as faceapi from "face-api.js";
import Input from "./elements/Input";

const FaceRecognition = () => {
  const [image, setImage] = useState({
    image: "",
    tag: {},
    formData: new FormData(),
  });
  const [file, setFile] = useState();
  const onChange = (e) => {
    const { name } = e.target;
    const value = name === "image" ? e.target.files[0] : e.target.value;
    image.formData.set(name, value);
    if (name === "image") {
      setFile(URL.createObjectURL(e.target.files[0]));
    }
    setImage({ ...image, [name]: value });
  };

  const imgRef = useRef();
  const canvasRef = useRef();

  const [faces, setFaces] = useState([]);

  const takeInput = () => {
    const ctx = canvasRef.current.getContext("2d");
  };

  const handleImage = async () => {
    const detections = await faceapi
      .detectAllFaces(imgRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks();
    console.log(detections, "detection");
    setFaces(detections.map((d) => Object.values(d.detection.box)));
    console.log(faces, "faces");
    canvasRef.current.innerHtml = faceapi.createCanvasFromMedia(imgRef.current);
    faceapi.matchDimensions(canvasRef.current, {
      width: imgRef.current.width,
      height: imgRef.current.height,
    });
    const resized = faceapi.resizeResults(detections, {
      width: imgRef.current.width,
      height: imgRef.current.height,
    });
    faceapi.draw.drawDetections(canvasRef.current, resized);
    faceapi.draw.drawFaceLandmarks(canvasRef.current, resized);
    takeInput();
  };

  useEffect(() => {
    const loadModels = () => {
      Promise.all([
        faceapi.loadTinyFaceDetectorModel("/models"),
        faceapi.loadFaceLandmarkModel("/models"),
        faceapi.loadFaceLandmarkTinyModel("/models"),
        faceapi.loadFaceRecognitionModel("/models"),
      ])
        .then(handleImage)
        .catch((e) => console.log(e, "error"));
    };
    imgRef.current && loadModels();
  }, [file]);

  return (
    <Fragment>
      {/* Navbar */}
      <Navbar title={"Image Gallery"} />

      {/* Face Recognition */}
      <section className="my-5 md:my-14">
        <h2 className="text-center text-xl md:text-2xl text-dark">
          Recognise your and your friends face!
        </h2>
        <div className="mx-3 md:mx-auto md:w-4/5 flex flex-col justify-center items-center my-5 md:8">
          <form>
            <FileUpload name={"image"} id={"image"} onChange={onChange} />
            <div className="my-5 mx-auto flex justify-center">
              <Button type={"submit"} text={"Upload"} arow={false} />
            </div>
          </form>
        </div>
      </section>

      {file && (
        <section className="my-5">
          <h3 className="text-center text-lg md:text-xl text-dark">Preview</h3>
          <div className="mx-3 md:mx-auto md:w-4/5 relative flex flex-col justify-center items-center my-5 md:8">
            <img ref={imgRef} crossOrigin="anonymous" src={file} alt="" className="" width="900px" />
            <canvas
              ref={canvasRef}
              className="absolute top-0"
              width="900px"
              height={imgRef?.current?.height}
            />
            {/* {faces.map((face, i) => (
              <div key={i} className="absolute" style={{left:face[0], top: face[1] + face[3]}}>
                <Input type="text" placeholder="tag (optional)" />
              </div>
            ))} */}
          </div>
        </section>
      )}

      {/* Footer  */}
      <Footer title={"Image Gallery"} />
    </Fragment>
  );
};

export default FaceRecognition;
