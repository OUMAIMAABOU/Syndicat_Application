export default function Facteur(props) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="container">
          <h1 className="text-center mb-3">Facture</h1>
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
                    <i className="fas fa-dollar-sign"></i>{" "}
                    {props.Facteur.appartementid?.Adresse}
                  </td>
                </tr>
                <tr>
                  <td>Numero</td>
                  <td>
                    <i className="fas fa-dollar-sign"></i>{" "}
                    {props.Facteur.appartementid?.numero}
                  </td>
                </tr>
                <tr>
                  <td>Prix</td>
                  <td>
                    <i className="fas fa-dollar-sign"></i>{" "}
                    {props.Facteur.appartementid?.prix}
                  </td>
                </tr>
                <tr>
                  <td>Date</td>
                  <td>
                    <i className="fas fa-dollar-sign"></i> {props.Facteur.Date}
                  </td>
                </tr>
                <tr>
                  <td>Client</td>
                  <td>
                    <i className="fas fa-dollar-sign"></i>{" "}
                    {props.Facteur.appartementid?.client_id?.fullname}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="row mt-2 mb-5">
            <p className="fw-bold">
              Date:{" "}
              <span className="text-muted">{new Date().toLocaleString()}</span>
            </p>
            <p className="fw-bold mt-3">
              Signature: <i className="fas fa-dollar-sign"></i>{" "}
              {props.Facteur.appartementid?.client_id?.fullname}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
