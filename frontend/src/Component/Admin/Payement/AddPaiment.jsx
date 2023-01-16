import Model from "../Model";
import Form from "./Form";
import { useState } from "react";
import { POST } from "../../../Api/Axios";
export default function AddPaiment() {
  const [Data, SetData] = useState({});
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
      POST("paiment", Data).then((res) => {
        if ((res.status = 200)) {
          SetSuccess(res.data);
          window.location.reload(false);
        } else SetError(res.data);
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
      {Success && (<div className="alert alert-success" role="alert"> {Success} </div> )}
        {Error && (<div className="alert alert-danger" role="alert">{Error} </div>)}
        <Form onChange={handleChange} Submit={handleSubmit} />
      </Model>
    </>
  );
}
