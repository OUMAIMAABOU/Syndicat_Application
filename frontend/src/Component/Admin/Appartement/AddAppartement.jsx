import Model from "../Model";
import Form from "./Form";
import { useState } from "react";
import { POST } from "../../../Api/Axios";
export default function AddAppartement() {
  const [Data, SetData] = useState([]);
  const [Error, SetError] = useState();
  const [Success, SetSuccess] = useState();
  const handleChange = (e) => {
    SetData({
      ...Data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      POST("appartement", Data).then((res) => {
          if ((res.status = 200)) {
          SetSuccess(res.data);
          window.location.reload(false);
        } else if(res.status = 400) SetError(res.data.message);
      }).catch((e)=>{
        SetError(e.response.data)
      })
    } catch (e) {
      SetError(e.response.data)
    }
  };
  return (
    <>
      <Model>
      {Error && <div className="alert alert-danger" role="alert">{Error}</div>}
      {Success && <div className="alert alert-success" role="alert">{Success}</div>}
        <Form onChange={handleChange} Submit={handleSubmit} />
      </Model>
    </>
  );
}
