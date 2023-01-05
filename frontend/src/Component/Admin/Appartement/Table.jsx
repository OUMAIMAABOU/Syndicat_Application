import {GET,DELETE} from '../../../Api/Axios'
import { useEffect,useState } from 'react';
export default function Table() {
  const [Appartements,SetAppartement]=useState([])
  useEffect(()=>{
    GET('appartement/showAppartements').then(res=>{
      SetAppartement(res.data)
      console.log(res.data)
    })
  }, [])


  return (
    <>
      <div className="table-wrapper">
        <div className="">
          <a
            className="btn btn-order  btn-lg fs-3 mb-1 mx-4 rounded-3 merriweather"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
           
          </a>
        </div>
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
