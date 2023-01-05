import { useEffect ,useState} from "react";
import { GET } from "../../../Api/Axios";

export default function Form(props) {
  const [Appartement,SetAppartement]=useState([])
  useEffect(()=>{
    GET('appartement').then(res=>{
      SetAppartement(res.data)
      console.log(res.data)
    })
  },[])
  return (
    <form className="form-container" onSubmit={props.Submit}>
      <div className="col-md-12">
        <span>Prix</span>
        <input
          type="text"
          name="prix"
          className="form-control"
          placeholder="Nom de Client"
          required
          value={props.prix}
          onChange={props.onChange}
        />
      </div>
      <div className="col-md-12">
        <span>Date</span>
        <input
          type="date"
          name="Date"
          className="form-control"
          placeholder="CIN de Client"
          required
          value={props.Date}
          onChange={props.onChange}
        />
      </div>
      <div className="col-md-12">
        <span>Appartement</span>
      
        <select
          name="appartementid"
          className="form-control text-dark  "
          onChange={props.onChange}
        >
          <option value={props.appartement}>--Please choose an Appartement--</option>
          {Appartement.map((appartement)=>{
            return(
               <option value={appartement._id}>{appartement.numero}</option>
            )
          })}
        </select>
      </div>

      <button
        type="submit"
        data-testid="submit"
        className="text-white bg-dark mt-3 mx-3 px-5 d-flex justify-content-end"
      >
        Save
      </button>
    </form>
  );
}
