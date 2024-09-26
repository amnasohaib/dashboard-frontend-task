import MainBottom from "@/components/main/main-bottom";
import MainContainer from "@/components/main/main-container";
import MainTop from "@/components/main/main-top";

const Main = () => {
    
  return (
    <div className="main">

    {/* i added some dummy data and some logic in that
        so that if some data from the DB was to be
        added in an actual project, it wouldn't be much of 
        a hassle to change the frontend that much
    */}

      <MainTop />

      <MainContainer />

      <MainBottom />
    </div>
  );
};

export default Main;