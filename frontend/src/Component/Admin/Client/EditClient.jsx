import React, { useState, useEffect } from "react";
import { PUT } from "../../../Api/Axios";
import Model from "../ModelEdit";
import Form from "./Form";

export default function EditClient(props) {
  const [Client, SetClient] = useState([]);
  const [Error, SetError] = useState();
  const [Success, SetSuccess] = useState();

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
        <Form
          onChange={handleChange}
          Submit={handleSubmit}
          fullname={Client.fullname}
          CIN={Client.CIN}
          tele={Client.tele}
        />
      </Model>
    </>
  );
}
