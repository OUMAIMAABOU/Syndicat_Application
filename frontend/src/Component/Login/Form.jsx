import {POST} from '../../Api/Axios'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Form() {
  const [Data, SetData] = useState({});
  const navig = useNavigate();

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
        if(res.data) {
          localStorage.setItem("token", response.data.token);
          navig("/appartement");
      }
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign In</h3>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          name='email'
          className="form-control"
          placeholder="Enter email"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          name='password'
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
