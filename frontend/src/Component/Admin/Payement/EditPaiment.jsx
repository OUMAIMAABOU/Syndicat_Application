import React, { useState, useEffect } from "react";
import { PUT } from "../../../Api/Axios";
import Model from "../ModelEdit";
import Form from "./Form";

export default function EditPaiment(props) {
  const [Paiment, SetPaiment] = useState([]);
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
        window.location.reload(false);
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Model>
        <Form onChange={handleChange} Submit={handleSubmit} Date={Paiment.Date} appartement={Paiment.appartementid} />
      </Model>
    </>
  );
}
