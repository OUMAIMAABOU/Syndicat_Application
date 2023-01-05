import {GET,DELETE} from '../../../Api/Axios'
import { useEffect,useState } from 'react';
export default function Table() {
  const [Payements,SetPayement]=useState([])
  const [Success,SetSuccess]=useState()
  const [Error,SetError]=useState()

  useEffect(()=>{
    GET('paiment/show_paiment').then(res=>{
      SetPayement(res.data)
      console.log(res.data)
    })
  }, [])

  // paiment/update_paiment  paiment/create_paiment    paiment/show_paiment 
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
        {Success && <div class="alert alert-success" role="alert">{Success}</div>}
        {Error && <div class="alert alert-danger" role="alert">{Error}</div>}
        <div className="table-responsive">
          <table
            className="table table-striped table align-middle"
            striped="true" bordered="true" hover="true"
          >
            <thead>
              <tr className="bg-dark merriweather " style={{ height: " 53px" }}>
                <th style={{ color: "#90f5d7" }}>Appartement </th>
                <th style={{ color: "#90f5d7" }}>Prix </th>
                <th style={{ color: "#90f5d7" }}>Date</th>
                <th style={{ color: "#90f5d7" }}>Client</th>               
      
                <th style={{ color: "#90f5d7" }}>Operation</th>
              </tr>
            </thead>
            <tbody className="fw-bold">
            {Payements.map((payement,key)=>{
              return(
              <tr key={key}>
                {/* <td>{payement.appartementid?.Adresse} &&(<>{payement.appartementid.Adresse}</>)</td> */}
                <td>{payement.appartementid?.Adresse}</td>
                <td>{payement.prix}</td>
                <td>{payement.Date}</td>
               <td> {payement.appartementid?.client_id?.fullname}</td>
                

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
