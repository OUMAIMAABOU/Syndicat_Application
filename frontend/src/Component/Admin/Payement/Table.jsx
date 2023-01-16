import { GET } from "../../../Api/Axios";
import { useEffect, useState, useRef } from "react";
import AddPaiment from "./AddPaiment";
import EditPaiment from "./EditPaiment";
import Facteur from "./Facteur";
import PrintComponents from "react-print-components";

export default function Table() {
  const componentRef = useRef();
  const [Payements, SetPayement] = useState([]);
  const [Factures, SetFacture] = useState([]);
  const [Success, SetSuccess] = useState();
  const [Error, SetError] = useState();
  const [Edite, SetEdite] = useState([]);

  useEffect(() => {
    GET("paiment").then((res) => {
      SetPayement(res.data);
    });
  }, []);

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
        {Success && (
          <div class="alert alert-success" role="alert">
            {Success}
          </div>
        )}
        {Error && (
          <div class="alert alert-danger" role="alert">
            {Error}
          </div>
        )}
        <div className="table-responsive">
          <table
            className="table table-striped table align-middle"
            striped="true"
            bordered="true"
            hover="true"
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
              {Payements.map((payement, key) => {
                return (
                  <tr key={key}>
                    <td>{payement.appartementid?.Adresse}</td>
                    <td>{payement.appartementid?.prix}</td>
                    <td>{payement.Date}</td>
                    <td> {payement.appartementid?.client_id?.fullname}</td>
                    <td className="d-flex align-items-start">
                      <button
                        className="btn btn-outline-info btn-lg ms-2"
                        data-bs-toggle="modal"
                        data-bs-target="#editModal"
                        onClick={() => SetEdite(payement)}
                      >
                        <img src="https://img.icons8.com/fluency/20/000000/edit-user-female.png" />
                      </button>

                      <button
                        onClick={() => SetFacture(payement)}
                        className="border-0"
                      >
                        <PrintComponents
                          trigger={
                            <button className="btn btn-outline-success btn-lg ms-2">
                              <img
                                src="https://files.fm/thumb_show.php?i=gmfwgaz8t"
                                width={15}
                              />
                            </button>
                          }
                          // content={() => componentRef.current}
                        >
                          <Facteur Facteur={Factures} />
                        </PrintComponents>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <AddPaiment />
      <EditPaiment editePaiment={Edite} />
    </>
  );
}
