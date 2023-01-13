import { useEffect, forwardRef,useState} from 'react';

const Facteur = forwardRef(( props, ref ) => {
  const [factures,setFacture]=useState([])
  useEffect(()=>{
    setFacture(props.Facteur)
    console.log(factures)
  },[props.Facteur])
  return (
 
    <div className="card" ref={ref}>
    <div className="card-header bg-black"></div>
    <div className="card-body">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <i className="far fa-building text-danger fa-6x float-start"></i>
          </div>
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
                  <i className="fas fa-dollar-sign"></i>{" "}
                  {factures.appartementid?.Adresse}
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
                  {props.Facteur.prix}
                </td>
              </tr>
              <tr>
                <td>Date</td>
                <td>
                  <i className="fas fa-dollar-sign"></i>{" "}
                  {props.Facteur.Date}
                </td>
              </tr>
              <tr>
                <td>Client</td>
                <td>
                  <i className="fas fa-dollar-sign"></i>{" "}
                  {/* {props.Facteur.appartementid?.client_id?.fullname} */}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="row mt-2 mb-5">
          <p className="fw-bold">
            Date:{" "}
            <span className="text-muted">
              {new Date().toLocaleString()}
            </span>
          </p>
          <p className="fw-bold mt-3">
            Signature: <i className="fas fa-dollar-sign"></i>{" "}
            {props.appartementid?.client_id?.fullname}
          </p>
        </div>
      </div>
    </div>
    <div className="card-footer bg-black"></div>

  </div>
)});

export default Facteur;

// export default function Facteur(props,ref) {
  // const facteur=useRef()
  // useEffect(() => {
    // console.log(props.Facteur);
  //   //  window.print()

  // }, [props.Facteur]);
  // const printReceipt=()=> {
  //   window.print();
  // }
  // return (
  //   <>
     
  
  //     <div 
  //       className="modal fade "
  //       id="modalFacture"
  //       tabIndex="-1"
  //       role="dialog"
  //       aria-labelledby="exampleModalLabel"
  //       aria-hidden="true"
  //     >
  //       <div className="modal-dialog" role="document">
  //         <div className="modal-content">
  //           <div className="modal-header">
              
  //             <button
  //               type="button"
  //               className="close"
  //               data-dismiss="modal"
  //               aria-label="Close"
  //             >
  //               <span aria-hidden="true">&times;</span>
  //             </button>
  //           </div>
  //           <div className="modal-body">

   
  //  hi

  //             <div className="card" ref={facteur}>
  //               <div className="card-header bg-black"></div>
  //               <div className="card-body">
  //                 <div className="container">
  //                   <div className="row">
  //                     <div className="col-xl-12">
  //                       <i className="far fa-building text-danger fa-6x float-start"></i>
  //                     </div>
  //                   </div>


  //                   <div className="row mx-3">
  //                     <table className="table">
  //                       <thead>
  //                         <tr>
  //                           <th scope="col">Description</th>
  //                           <th scope="col">Amount</th>
  //                         </tr>
  //                       </thead>
  //                       <tbody>
  //                         <tr>
  //                           <td>Adresse</td>
  //                           <td>
  //                             <i className="fas fa-dollar-sign"></i>{" "}
  //                             {props.Facteur.appartementid?.Adresse}
  //                           </td>
  //                         </tr>
  //                         <tr>
  //                           <td>Numero</td>
  //                           <td>
  //                             <i className="fas fa-dollar-sign"></i>{" "}
  //                             {props.Facteur.appartementid?.numero}
  //                           </td>
  //                         </tr>
  //                         <tr>
  //                           <td>Prix</td>
  //                           <td>
  //                             <i className="fas fa-dollar-sign"></i>{" "}
  //                             {props.Facteur.prix}
  //                           </td>
  //                         </tr>
  //                         <tr>
  //                           <td>Date</td>
  //                           <td>
  //                             <i className="fas fa-dollar-sign"></i>{" "}
  //                             {props.Facteur.Date}
  //                           </td>
  //                         </tr>
  //                         <tr>
  //                           <td>Client</td>
  //                           <td>
  //                             <i className="fas fa-dollar-sign"></i>{" "}
  //                             {/* {props.Facteur.appartementid?.client_id?.fullname} */}
  //                           </td>
  //                         </tr>
  //                       </tbody>
  //                     </table>
  //                   </div>

  //                   <div className="row mt-2 mb-5">
  //                     <p className="fw-bold">
  //                       Date:{" "}
  //                       <span className="text-muted">
  //                         {new Date().toLocaleString()}
  //                       </span>
  //                     </p>
  //                     <p className="fw-bold mt-3">
  //                       Signature: <i className="fas fa-dollar-sign"></i>{" "}
  //                       {props.appartementid?.client_id?.fullname}
  //                     </p>
  //                   </div>
  //                 </div>
  //               </div>
  //               <div className="card-footer bg-black"></div>

  //               {/* <Button onClick={()=>printReceipt()}>Print</Button> */}
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );
// }
