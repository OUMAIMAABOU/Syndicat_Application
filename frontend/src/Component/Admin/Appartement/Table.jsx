import {GET,DELETE} from '../../../Api/Axios'
import { useEffect,useState } from 'react';
export default function Table() {
  const [Appartements,SetAppartement]=useState([])
  const [Success,SetSuccess]=useState()
  const [Error,SetError]=useState()
  useEffect(()=>{
    GET('appartement').then(res=>{
      SetAppartement(res.data)
      console.log(res.data)
    })
  }, [])

  const deleteFunction = (id,e) => {
    e.preventDefault();
    DELETE(`appartement/${id}`)
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
        {Success && <div class="alert alert-success" role="alert">{Success}</div>}
        {Error && <div class="alert alert-danger" role="alert">{Error}</div>}
        <div className="table-responsive">
          <table
            className="table table-striped table align-middle"
            striped="true" bordered="true" hover="true"
          >
            <thead>
              <tr className="bg-dark merriweather " style={{ height: " 53px" }}>
                <th style={{ color: "#90f5d7" }}>Adresse </th>
                <th style={{ color: "#90f5d7" }}>Numero </th>
                <th style={{ color: "#90f5d7" }}>Surface</th>
                <th style={{ color: "#90f5d7" }}>Prix</th>               
                <th style={{ color: "#90f5d7" }}>Loue</th>
                <th style={{ color: "#90f5d7" }}>Client</th>
                <th style={{ color: "#90f5d7" }}>Operation</th>
              </tr>
            </thead>
            <tbody className="fw-bold">
            {Appartements.map((appartement,key)=>{
              return(
              <tr key={key}>
                <td>{appartement.Adresse}</td>
                <td>{appartement.numero}</td>
                <td>{appartement.surface}</td>
                <td>{appartement.prix}</td>
                <td>{appartement.loue}</td>
               <td> {appartement.client_id?.fullname && (<>{appartement.client_id.fullname}</>)}</td>
                

                <td className="d-flex align-items-start">
                  <button
                    className="btn btn-outline-info btn-lg ms-2"
                    data-bs-toggle="modal"
                    data-bs-target="#editModal"
                  >
                    <img src="https://img.icons8.com/fluency/20/000000/edit-user-female.png" />
                  </button>

                  <button
                    className="btn btn-outline-danger btn-lg ms-2"
                    data-toggle="modal"
                    onClick={(e) => deleteFunction(appartement._id,e)}
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
      </div>
    </>
  );
}
