import Background from "../components/Background";
import Background2 from "../components/Background2";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Lorem from "../components/Lorem";
import Offer from "../components/Offer";
import OurTeam from "../components/OurTeam";
import Services from "../components/Services";

const AdminView = (props) => {
  return (
    <>
      <Header />
      <Background /> 
       <Offer /> 
       <Gallery /> 
      <Services /> 
      <Background2 /> 
       <OurTeam /> 
       <Lorem />
    </>
  );
};

export default AdminView;
