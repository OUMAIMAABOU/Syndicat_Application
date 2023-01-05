import { useEffect ,useState} from "react";
import { GET } from "../../../Api/Axios";


export default function Form(props) {
  const [Client,SetClient]=useState([])
  useEffect(()=>{
    GET('client').then(res=>{
      SetClient(res.data)
      console.log(res.data)
    })
  },[])
  return (

    <form className="form-container" onSubmit={props.Submit}>
  
        <div className="col-md-12">
          <span>Adresse</span>
          <input
            type="text"
            name="Adresse"
            className="form-control"
            required
            value={props.Adresse}
            onChange={props.onChange}
          />
        </div>
        <div className="col-md-12">
          <span>Numero</span>
          <input
            type="text"
            name="numero"
            className="form-control"
            required
            value={props.numero}
            onChange={props.onChange}
          />
        </div>
        <div className="col-md-12">
          <span>surface</span>
          <input
            type="text"
            name="surface"
            className="form-control"
            required
            value={props.surface}
            onChange={props.onChange}
          />
        </div>
        <div className="col-md-12">
          <span>Prix</span>
          <input
            type="text"
            name="prix"
            className="form-control"
            required
            value={props.prix}
            onChange={props.onChange}
          />
        </div>
        <div className="col-md-12">
        <span>Loue</span>
        <select
          name="loue"
          className="form-control text-dark  "
          onChange={props.onChange}
        >
          <option value={props.loue}>--Please choose--</option>
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
      </div>
        <div className="col-md-12">
        <span>Client</span>
      
        <select
          name="client_id"
          className="form-control text-dark  "
          onChange={props.onChange}
        >
          <option value={props.client}>--Please choose an Appartement--</option>
          {Client.map((client)=>{
            return(
               <option value={client._id}>{client.fullname}</option>
            )
          })}
        </select>
      </div>

      <button
            type="submit"
            data-testid="submit"
            className="text-white bg-dark mt-3 mx-3 px-5 d-flex justify-content-end"
          >Save</button>
    </form>
  );
}
