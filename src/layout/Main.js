import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Main = (props) => {
  console.log(props);
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

export default Main;
