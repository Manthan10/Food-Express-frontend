import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [search, setSearch] = useState("");

  const loadData = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/foodData");

      setFoodItem(res.data[0]);
      setFoodCat(res.data[1]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Navbar />
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        style={{ objectFit: "contain !important" }}
        data-bs-ride="carousel">
        <div className="carousel-inner" id="carousel">
          <div
            className="carousel-caption"
            style={{
              zIndex: "10",
              filter: "brightness(80%)",
              bottom: "4rem",
            }}>
            <div className="d-flex justify-content-center">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="carousel-item active">
            <img
              src="https://source.unsplash.com/random/300×300?burger"
              className="d-block w-100"
              style={{ filter: "brightness(30%)" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/300×300?pastry"
              className="d-block w-100"
              style={{ filter: "brightness(30%)" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/300×300?barbeque"
              className="d-block w-100"
              style={{ filter: "brightness(30%)" }}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev">
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next">
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container">
        {foodCat !== []
          ? foodCat.map((currelm) => {
              return (
                <div className="row mb-3">
                  <div key={currelm._id} className="fs-3 m-3">
                    {currelm.CategoryName}
                  </div>
                  <hr />
                  {foodItem !== [] ? (
                    foodItem
                      .filter(
                        (item) =>
                          item.CategoryName === currelm.CategoryName &&
                          item.name.toLowerCase().includes(search.toLowerCase())
                      )
                      .map((filterItems) => {
                        return (
                          <>
                            <div
                              key={filterItems._id}
                              className="col-12 col-md-6 col-lg-3"
                              style={{ height: "34rem" }}>
                              <Card
                                foodItem={filterItems}
                                options={filterItems.options[0]}
                                foodDes={filterItems.description}
                              />
                            </div>
                          </>
                        );
                      })
                  ) : (
                    <>
                      <div>No Such data found</div>
                    </>
                  )}
                </div>
              );
            })
          : ""}
      </div>
      <Footer />
    </>
  );
};

export default Home;
