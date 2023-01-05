
export default function Form(props) {
  
  return (

    <form className="form-container" onSubmit={props.Submit}>
  
        <div className="col-md-12">
          <span>Nom</span>
          <input
            type="text"
            name="fullname"
            className="form-control"
            placeholder="Nom de Client"
            required
            value={props.fullname}
            onChange={props.onChange}
          />
        </div>
        <div className="col-md-12">
          <span>CIN</span>
          <input
            type="text"
            name="CIN"
            className="form-control"
            placeholder="CIN de Client"
            required
            value={props.CIN}
            onChange={props.onChange}
          />
        </div>
        <div className="col-md-12">
          <span>Téléphone</span>
          <input
            type="text"
            name="tele"
            className="form-control"
            placeholder="Nom de Client"
            required
            value={props.tele}
            onChange={props.onChange}
          />
        </div>

      <button
            type="submit"
            data-testid="submit"
            className="text-white bg-dark mt-3 mx-3 px-5 d-flex justify-content-end"
          >Save</button>
    </form>
  );
}
