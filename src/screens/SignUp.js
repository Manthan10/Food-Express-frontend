import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  const [creadentials, setCreadentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });

  const writeInput = (e) => {
    setCreadentials({ ...creadentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const res = await fetch("https://localhost:5000/api/createuser", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     name: creadentials.name,
    //     email: creadentials.email,
    //     password: creadentials.password,
    //     location: creadentials.geolocation,
    //   }),
    // });
    // const json = res.json();
    // console.log(json);
    // if (!json.success) {
    //   alert("enter valid credentials");
    // }
    try {
      const res = await axios.post("http://localhost:5000/api/createuser", {
        name: creadentials.name,
        email: creadentials.email,
        password: creadentials.password,
        location: creadentials.geolocation,
      });

      console.log(res.data);
      if (!res.success) {
        alert("enter valid credentials");
      }
      //   setCreadentials(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="container shadow p-5 ml-5 mt-5 bg-body rounded">
        <h1 className="text-center"> Sign Up</h1>

        <form onSubmit={handleSubmit}>
          <div
            className="form-group m-3 text-secondary "
            style={{ fontWeight: "600" }}>
            <label htmlFor="name" className="my-2 ">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              name="name"
              value={creadentials.name}
              onChange={writeInput}
            />
          </div>
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

          <div
            className="form-group m-3 text-secondary "
            style={{ fontWeight: "600" }}>
            <label htmlFor="address" className="my-2 ">
              Location
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Location"
              name="geolocation"
              value={creadentials.geolocation}
              onChange={writeInput}
            />
          </div>

          <button type="submit" className="btn btn-outline-primary m-3">
            Submit
          </button>
          <NavLink to={"/login"} className="m-3 btn btn-outline-danger">
            Already a user, Sign In
          </NavLink>
        </form>
      </div>
    </>
  );
};

export default SignUp;
