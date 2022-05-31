import React from 'react'
import "../Style/card.css"
import moment from 'moment'

function Card({ temp, weather, icon, date }) {

    console.log((moment.unix(date)).format())
    var str = (moment.unix(date).format());
    const datee = new Date(str);
    const newdate = datee.toLocaleString()
    console.log(datee.toLocaleString());

    return (
        <div className='box-cont'>
            <div className='boxdivider'>
                <div className='box-1'>
                    <h1>{temp}°C</h1>
                </div>
                <div className='box-2'>
                    {weather}
                </div>
                <div className='box-3'>
                    {newdate}
                </div>
            </div>
            <div className="boxdivider2">
                <div className='icon-box'>
                    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" className='img-card' />
                </div>
            </div>

        </div>
    )
}

export default Card