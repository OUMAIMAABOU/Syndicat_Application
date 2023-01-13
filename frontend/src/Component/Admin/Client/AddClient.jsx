import Model from "../Model";
import Form from "./Form";
import { useState } from "react";
import { POST } from "../../../Api/Axios";
export default function AddClient() {
  const [Data, SetData] = useState({});
  const handleChange = (e) => {
    SetData({
      ...Data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      POST("client", Data).then((res) => {
        window.location.reload(false);
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Model>
        <Form onChange={handleChange} Submit={handleSubmit} />
      </Model>
    </>
  );
}
