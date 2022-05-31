import React, { useState } from "react";
import Info from "./Components/Info";
import Search from "./Components/Search";
import Card from "./Components/Card";
import './App.css';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';


function App() {

  const [res, setRes] = useState({})
  const [shortRes, setShortRes] = useState({})

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="App">

      <div className="main-container">

        <div className="logo">
          Caster.io
        </div>
        <div className="left-container">
          {/* passing setRes as prop to get back the object from the fetch */}
          <Search setRes={setRes} setShortRes={setShortRes} />
        </div>
        {!res.city ? <></> : <div className="right-container">
          <p className="texts1">Today</p>
          <div className="div-info"><Info shortRes={shortRes} /></div>
          <p className="texts">
            Hourly
          </p>
          <div className="card-wrap">
            <div className="card-div">
              <Carousel responsive={responsive} autoPlaySpeed={1000000000} infinite={false}>
                {res.list ? res.list.map((res, index) => {
                  return (
                    <div key={index}>
                      <Card
                        temp={res.main.temp}
                        weather={res.weather.map(x => x.description)}
                        icon={res.weather.map(x => x.icon)}
                        date={res.dt}
                      />
                    </div>
                  )
                }) : <></>}
              </Carousel>
            </div>
          </div>
        </div>}

      </div>
    </div>
  );
}

export default App;
