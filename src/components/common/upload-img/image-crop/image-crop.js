import React, { PureComponent } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { Wrapper, CropContainer } from "./image-crop-e";
import axios from "axios";
import Button from "../../button/button";

class ImageCrop extends PureComponent {
  state = {
    blobFile: "",
    src: null,
    crop: {
      unit: "px",
      // aspect: this.props.cropWidth / this.props.cropHeight,
    },
    croppedImage: null,
  };

  componentDidMount() {
    if (this.props.src) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }

  onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        this.setState({ src: reader.result })
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  onImageLoaded = (image) => {
    this.imageRef = image;
  };

  onCropComplete = (crop) => {
    this.makeClientCrop(crop);
  };

  onCropChange = (crop, percentCrop) => {
    this.setState({ crop });
  };

  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        crop,
        "newFile.jpeg"
      );
      this.setState({ croppedImageUrl });
    }
  }

  getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          console.error("Canvas is empty");
          return;
        }
        blob.name = fileName;
        window.URL.revokeObjectURL(this.fileUrl);
        this.fileUrl = window.URL.createObjectURL(blob);
        const newImage = new File([blob], blob.name, {
          type: blob.type,
        });
        let fd = new FormData();
        fd.append("file", newImage);
        this.setState((st) => {
          // count is incremented +1 time
          // based on its previous value
          return (st.blobFile = fd);
        });

        resolve(this.fileUrl);
      }, "image/jpeg");
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://beeto.in1.uz/api/upload-file", this.state.blobFile)
      .then((res) => {
        this.setState({ currentImage: res.data.data.path });
      })
      .catch((err) => {});
  };

  // To save file
  onFileSave() {
    const { blobFile } = this.state;
    const newImage = new File([blobFile], blobFile.name, {
      type: blobFile.type,
    });
    let fd = new FormData();
    fd.append(newImage.name, newImage);
  }

  render() {
    const {
      crop,
      croppedImageUrl,
      src,
      currentImage = this.props.url,
    } = this.state;

    return (
      <>
        <Wrapper style={{ width: this.props.width, height: this.props.height }}>
          <label>
            <input
              type="file"
              accept="image/png, image/jpeg, image/webp"
              onChange={this.onSelectFile}
            />
            <figure>
              <img
                src={
                  currentImage && currentImage.search("http") !== -1
                    ? currentImage
                    : "https://cdn.dribbble.com/users/4841378/screenshots/13953372/media/15649e4994d5627f09da52ce79913ae8.png?compress=1&resize=640x480&vertical=top"
                }
                className="personal-avatar"
                alt="avatar"
              />
              <figcaption>
                <i className="fa-light fa-camera" />
              </figcaption>
            </figure>
          </label>
          <label>
            <input
              type="file"
              accept="image/png, image/jpeg, image/webp"
              onChange={this.onSelectFile}
            />
            <figure>
              <img
                src={
                  currentImage && currentImage.search("http") !== -1
                    ? currentImage
                    : "https://cdn.dribbble.com/users/4841378/screenshots/13953372/media/15649e4994d5627f09da52ce79913ae8.png?compress=1&resize=640x480&vertical=top"
                }
                className="personal-avatar"
                alt="avatar"
              />
              <figcaption>
                <i className="fa-light fa-camera" />
              </figcaption>
            </figure>
          </label>
        </Wrapper>
        {src && (
          <CropContainer>
            <ReactCrop
              src={src}
              crop={crop}
              ruleOfThirds
              onImageLoaded={this.onImageLoaded}
              onComplete={this.onCropComplete}
              onChange={this.onCropChange}
              maxHeight={750}
              maxWidth={1500}
            />
            {croppedImageUrl && (
              <img
                alt="Crop"
                style={{ maxWidth: "100%" }}
                src={croppedImageUrl}
              />
            )}
            <Button
              onClick={() => {
                this.props.onChange(this.state.blobFile);
                this.setState({ src: null });
              }}
              color="primary"
              text="Crop"
            />
          </CropContainer>
        )}
      </>
    );
  }
}

export default ImageCrop;
