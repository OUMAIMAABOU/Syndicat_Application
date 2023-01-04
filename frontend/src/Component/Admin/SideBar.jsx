import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <>
      <div className="d-flex justify-content-between border-bottom ">
        <div className="d-flex m-3 " id="dashboard">
          <div className="bg" id="sidebar-dashboard">
            <div className=" redressed fw-bolder m-2 dark-text fs-5 fw-bold border-start border-3 px-2">
              <h1 className="text-light">
                <span style={{ color: "#90f5d7" }}>Syndi</span>cat
              </h1>
            </div>

            <div className="text-center " />
            <hr className=""></hr>
           
            <a
              href="#"
              className="list-group-item mx-5 border-0  merriweather bg-transparent mt-5"
              style={{ color: "#90f5d7" }}
            >
              <span style={{ color: "#90f5d7" }}>
                <i className="fas fa-home"></i>
                <span>Profil</span>
              </span>
            </a>
            <Link
              to="/Projet"
              className="list-group-item  mx-5 border-0 merriweather bg-transparent mt-5 "
            >
              <span style={{ color: "white" }}>
                <i className="far fa-bookmark"></i> Appartement
              </span>
            </Link>

            <Link
              to="/Competence"
              className="list-group-item mx-5 merriweather border-0 bg-transparent rounded-3 mt-5"
            >
              <span style={{ color: "white" }}>
                <i className="fas fa-graduation-cap"></i>Paiment
              </span>
            </Link>
            <Link
              to="/Experience"
              className="list-group-item mx-5 merriweather border-0 bg-transparent rounded-3 mt-5"
            >
              <span style={{ color: "white" }}>
                <i className="fas fa-graduation-cap"></i>Client
              </span>
            </Link>

            <a
              href="#"
              className="list-group-item mx-5 merriweather border-0 bg-transparent rounded-3 mt-5"
            >
              <span style={{ color: "white" }}>
                <i className="fas fa-graduation-cap"></i>
              </span>
            </a>

            <a
              href="#"
              className="list-group-item mx-5 border-0 merriweather bg-transparent mt-5 mb-5"
            >
              <span style={{ color: "white" }}>
                <i className="fas fa-sliders-h"></i>
              </span>
            </a>
            <form>
              <button
                type="submit"
                name="logout"
                className="list-group-item mx-5 border-0 merriweather bg-transparent  mt-5 mb-5 "
              >
                <span style={{ color: "white" }}>
                  <i className="fas fa-sign-out-alt">Logout </i>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
