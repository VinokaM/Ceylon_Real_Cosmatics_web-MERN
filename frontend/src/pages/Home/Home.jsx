import React from 'react';
import TopBar from "./TopBar";
import MainCon from "./MainCon"
import "./home.css";


const HomeScreen = () => {
  return (
    <React.Fragment>
      {/* Heading section */}
      <section>
        <div className="top-bar">
          <TopBar />
        </div>
      </section>

      <section className='menu'>
        <div>
          <MainCon />
        </div>
      </section>

    </React.Fragment>
  );
};

export default HomeScreen;
