import React, { useState, useEffect } from "react";
import { PUT } from "../../../Api/Axios";
import Model from "../ModelEdit";
import Form from "./Form";

export default function EditAppartement(props) {
  const [Appartement, SetAppartement] = useState([]);
  useEffect(() => {
    SetAppartement(props.editeAppartement);
  }, [props.editeAppartement]);

  const handleChange = (e) => {
    SetAppartement({
      ...Appartement,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      PUT(`appartement/${Appartement._id}`, Appartement).then((res) => {
        window.location.reload(false);
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Model>
        <Form onChange={handleChange} Submit={handleSubmit} Adresse={Appartement.Adresse} numero={Appartement.numero} prix={Appartement.prix} loue={Appartement.loue} client={Appartement.client_id} surface={Appartement.surface}/>
      </Model>
    </>
  );
}
