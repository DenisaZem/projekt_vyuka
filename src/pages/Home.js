import "./Home.css";

const Home = () => {
  return (
    <div className="screen">
     <div className="home">
      <div className="mainBanner">
        <div className="wallpaper">
          <h1>Úvod</h1>
        </div>
      </div>
      <div className="containerBanner">
        <div className="quote">
          <p>
            “Education is the passport to the future, 
            for tomorrow belongs to those who prepare 
            for it today.” —Malcolm X
          </p>
        </div>
      </div>
        <div className="home-container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis earum
            ex sit nemo ipsam asperiores, repellendus modi impedit quasi ratione.
            Vel quo doloribus beatae commodi consectetur iste corporis eius porro?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
            inventore consequuntur cupiditate quis, quasi laborum modi aperiam
            dolores delectus explicabo deserunt repellat, sunt exercitationem quas
            dolorum voluptas quam dicta totam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
