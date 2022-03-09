import { useState } from "react";
import { sendImage } from "../../services/uploadService";

const Upload = () => {
  const [pathImage, setPathImage] = useState(
    "http://localhost:5000/static/test.png"
  );
  const [file, setFile] = useState();

  const handleSendImage = (e) => {
    e.preventDefault();
    sendImage("test-img", file);
  };

  const handleChange = (e) => {
    const { files } = e.target;
    if (files && files.length > 0) {
      const file = files[0];
      setFile(file);

      if (file.type.includes("image")) {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function load() {
          const { result } = reader;
          setPathImage(result);
        };
      }
    }
  };

  return (
    <form>
      <div>
        <input type="file" placeholder="file" onChange={handleChange} />
        <img src={pathImage} alt="image" />
        <button type="submit" onClick={handleSendImage}>
          Send Image
        </button>
      </div>
    </form>
  );
};

export default Upload;
