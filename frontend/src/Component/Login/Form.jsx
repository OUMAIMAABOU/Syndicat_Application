import { POST } from "../../Api/Axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UseContext";

export default function Form() {
  const [Data, SetData] = useState({});
  const navig = useNavigate();
  const [Error, SetError] = useState();
  const { setValue } = useContext(UserContext);
  const handleChange = (e) => {
    SetData({
      ...Data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      POST("auth/login", Data).then((res) => {
        if (res.status == 200) {
          localStorage.setItem("token", res.data.token);
          setValue(res.data.username);
          navig("/appartement");
        } else {
          SetError("invalide data");
        }
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {Error && (
        <div class="alert alert-danger" role="alert">
          {Error}
        </div>
      )}
      <h3>Sign In</h3>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Enter email"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Enter password"
          onChange={handleChange}
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
      </p>
    </form>
  );
}
