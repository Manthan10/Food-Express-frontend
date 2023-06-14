import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const [creadentials, setCreadentials] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  const writeInput = (e) => {
    setCreadentials({ ...creadentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/loginUser", {
        email: creadentials.email,
        password: creadentials.password,
      });
      console.log(res);
      if (!res.data.success) {
        alert("Enter valid credentials");
      } else {
        localStorage.setItem("authToken", res.data.authToken);
        console.log(localStorage.getItem("authToken"));
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      alert("invalid User");
    }
  };

  return (
    <>
      <div className="container shadow p-5 ml-5 mt-5 bg-body rounded">
        <h1 className="text-center">Log In</h1>

        <form onSubmit={handleSubmit}>
          <div
            className="form-group m-3 text-secondary "
            style={{ fontWeight: "600" }}>
            <label htmlFor="email" className="my-2 ">
              E-Mail
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter E-Mail Address"
              name="email"
              value={creadentials.email}
              onChange={writeInput}
            />
          </div>
          <div
            className="form-group m-3 text-secondary "
            style={{ fontWeight: "600" }}>
            <label htmlFor="password" className="my-2 ">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              name="password"
              value={creadentials.password}
              onChange={writeInput}
            />
          </div>

          <button type="submit" className="btn btn-outline-primary m-3">
            LogIn
          </button>
          <NavLink to={"/signup"} className="m-3 btn btn-outline-danger">
            New User? Sign Up
          </NavLink>
        </form>
      </div>
    </>
  );
};

export default Login;
