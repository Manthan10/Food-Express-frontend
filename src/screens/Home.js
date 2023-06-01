import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import Carousel from "../Components/Carousel";

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <div className="m-3">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </>
  );
};

export default Home;
