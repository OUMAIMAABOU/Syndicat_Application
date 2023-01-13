import React, { useState, useEffect } from "react";
import { PUT } from "../../../Api/Axios";
import Model from "../ModelEdit";
import Form from "./Form";

export default function EditClient(props) {
  const [Client, SetClient] = useState([]);
  useEffect(() => {
    SetClient(props.editeClient);
  }, [props.editeClient]);

  const handleChange = (e) => {
    SetClient({
      ...Client,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      PUT(`client/${Client._id}`, Client).then((res) => {
        window.location.reload(false);
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Model>
        <Form onChange={handleChange} Submit={handleSubmit} fullname={Client.fullname} CIN={Client.CIN} tele={Client.tele} />
      </Model>
    </>
  );
}
