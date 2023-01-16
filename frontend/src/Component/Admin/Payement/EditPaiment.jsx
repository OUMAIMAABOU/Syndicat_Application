import React, { useState, useEffect } from "react";
import { PUT } from "../../../Api/Axios";
import Model from "../ModelEdit";
import Form from "./Form";

export default function EditPaiment(props) {
  const [Paiment, SetPaiment] = useState([]);
  const [Error, SetError] = useState();
  const [Success, SetSuccess] = useState();
  useEffect(() => {
    SetPaiment(props.editePaiment);
    console.log(props.editePaiment);
  }, [props.editePaiment]);

  const handleChange = (e) => {
    SetPaiment({
      ...Paiment,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      PUT(`paiment/${Paiment._id}`, Paiment).then((res) => {
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
  }
  return (
    <>
      <Model>
       {Success && (<div className="alert alert-success" role="alert"> {Success} </div> )}
        {Error && (<div className="alert alert-danger" role="alert">{Error} </div>)}
        <Form onChange={handleChange} Submit={handleSubmit} Date={Paiment.Date} appartement={Paiment.appartementid} />
      </Model>
    </>
  );
}
