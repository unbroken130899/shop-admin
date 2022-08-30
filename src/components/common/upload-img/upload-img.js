import { Wrapper } from "./upload-img.e";

function UploadImg({ onChange, url, width, height, contain }) {
  return (
    <Wrapper style={{ width: width, height: height }}>
      <label>
        <input
          type="file"
          accept="image/png, image/jpeg, image/webp"
          onChange={(e) => {
            if (e.target.files[0].size > 1048576) {
              alert("File size is too big. Max size is 1MB");
            } else {
              onChange(e);
            }
          }}
        />
        <figure>
          <img
            style={{ objectFit: contain ? "contain" : "cover" }}
            src={
              url && url.search("http") !== -1
                ? url
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
  );
}

export default UploadImg;
