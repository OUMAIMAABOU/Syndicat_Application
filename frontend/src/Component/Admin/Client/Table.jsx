import {GET,DELETE} from '../../../Api/Axios'
import { useEffect,useState } from 'react';
import AddClient from './AddClient';
import EditClient from './EditClient';
export default function Table() {
  const [Client,SetClient]=useState([])
  const [Edite,SetEdite]=useState({})
  const [Success,SetSuccess]=useState()
  const [Error,SetError]=useState()
  useEffect(()=>{
    GET('client/show_client').then(res=>{
      SetClient(res.data)
      console.log(res.data)
    })
  }, [])

  const deleteFunction = (id,e) => {
    e.preventDefault();
    DELETE(`client/delete_client/${id}`)
      .then((res) => {
          if(res.status==200) SetSuccess(res.data)
          else SetError(res.data)
        window.location.reload(false);
      })
      .catch((e) => console.log(e));
  };
  return (
    <>
      <div className="table-wrapper">
        <div className="">
          <a
            className="btn btn-order btn-outline-dark btn-lg fs-3 mb-1 mx-4 rounded-3 merriweather"
            data-bs-toggle="modal"
            data-bs-target="#AddModel"
          >
           +
          </a>
        </div>
        {Success && <div className="alert alert-success" role="alert">{Success}</div>}
        {Error && <div className="alert alert-danger" role="alert">{Error}</div>}
        <div className="table-responsive">
          <table
            className="table table-striped table align-middle"
            striped="true" bordered="true" hover="true"
          >
            <thead>
              <tr className="bg-dark merriweather " style={{ height: " 53px" }}>
                <th style={{ color: "#90f5d7" }}>Full Name </th>
                <th style={{ color: "#90f5d7" }}>CIN </th>
                <th style={{ color: "#90f5d7" }}>Téléphone</th>
                <th style={{ color: "#90f5d7" }}>Operation</th>
              </tr>
            </thead>
            <tbody className="fw-bold">
            {Client.map((client,key)=>{
              return(
              <tr key={key}>
                <td>{client.fullname}</td>
                <td>{client.CIN}</td>
                <td>{client.tele}</td>
                <td className="d-flex align-items-start">
                  <button
                    className="btn btn-outline-info btn-lg ms-2"
                    data-bs-toggle="modal"
                    data-bs-target="#editModal"
                    onClick={()=>SetEdite(client)}
                  >
                    <img src="https://img.icons8.com/fluency/20/000000/edit-user-female.png" />
                  </button>

                  <button
                    className="btn btn-outline-danger btn-lg ms-2"
                    data-toggle="modal"
                    onClick={(e) => deleteFunction(client._id,e)}
                  >
                    <img src="https://img.icons8.com/color/20/000000/delete-forever.png" />
                  </button>
                </td>
              </tr>
               )
            })}
            </tbody>
          </table>
        </div>
        <EditClient editeClient={Edite}/>

      </div>
      <AddClient />
    </>
  );
}
