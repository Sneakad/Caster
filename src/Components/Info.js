import React from 'react'
import '../Style/info.css'



function Info({ shortRes }) {




    console.log(shortRes)
    return (
        <div>
            <div className="info-container">
                <div className="info-container-sub-left">
                    <div className="temp">
                        <h1>{(shortRes?.main?.temp) ? shortRes?.main?.temp : "Temperature:"}°C</h1>
                    </div>
                    <div className="city">
                        {/* using ternary operator */}
                        <p>{(shortRes?.name) ? shortRes?.name : "City:"}</p>
                    </div>
                    <div className="desc">
                        <p>{(shortRes?.weather[0]?.description) ? shortRes?.weather[0]?.description : ""}</p>
                    </div>
                </div>
                <div className="info-container-sub-right">
                    <div className="feel">
                        <p>Real Feel : {(shortRes?.main?.feels_like) ? shortRes?.main?.feels_like : ""}°C</p>
                    </div>
                    <div className="humidity">
                        <p>Wind Speed : {(shortRes?.wind?.speed) ? shortRes?.wind?.speed : ""}m/s</p>
                    </div>
                    <div className="uv-index">
                        <p>Minimum Temperature : {(shortRes?.main?.temp_min) ? shortRes?.main?.temp_min : ""}°C</p>
                    </div>
                    <div className="cloud-cover">
                        <p>Maximum Temperature : {(shortRes?.main?.temp_max) ? shortRes?.main?.temp_max : ""}°C</p>
                    </div>
                    <div className="visibility">
                        <p>Visibility : {(shortRes?.visibility) ? shortRes?.visibility : ""}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info