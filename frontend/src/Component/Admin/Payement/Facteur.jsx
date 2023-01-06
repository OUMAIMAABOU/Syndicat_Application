import {useEffect,useState} from "react";
import ReactToPrint from "react-to-print";
import { Button } from "react-bootstrap";


export default function Facteur(props) {
    const [facteur,Setfact]=useState()
    useEffect(()=>{
        Setfact(props.Facteur)
    //    window.print()
    },[])
  return (
    <>
    
      <div className="card">
        <div className="card-header bg-black"></div>
        <div className="card-body">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <i className="far fa-building text-danger fa-6x float-start"></i>
              </div>
            </div>
        

            <div className="row text-center">
              <h3
                className="text-uppercase text-center mt-3"
                style={{ fontSize: " 40px" }}
              >
                Facture 
              </h3>
            </div>

            <div className="row mx-3">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Description</th>
                    <th scope="col">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Adresse</td>
                    <td>
                      <i className="fas fa-dollar-sign"></i> {facteur.appartementid?.Adresse}
                    </td>
                  </tr>
                  <tr>
                    <td>Numero</td>
                    <td>
                      <i className="fas fa-dollar-sign"></i> {facteur.appartementid?.numero}
                    </td>
                  </tr>
                  <tr>
                    <td>Prix</td>
                    <td>
                      <i className="fas fa-dollar-sign"></i> {facteur.prix}
                    </td>
                  </tr>
                  <tr>
                    <td>Date</td>
                    <td>
                      <i className="fas fa-dollar-sign"></i> {facteur.Date}
                    </td>
                  </tr>
                  <tr>
                    <td>Client</td>
                    <td>
                      <i className="fas fa-dollar-sign"></i> {facteur.appartementid?.client_id?.fullname}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            
            <div className="row mt-2 mb-5">
              <p className="fw-bold">
                Date: <span className="text-muted">{new Date().toLocaleString()}</span>
                
              </p>
              <p className="fw-bold mt-3">Signature: <i className="fas fa-dollar-sign"></i> {props.appartementid?.client_id?.fullname}</p>
            </div>
          </div>
        </div>
        <div className="card-footer bg-black"></div>
      </div>
    </>
  );
}
