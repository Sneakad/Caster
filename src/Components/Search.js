import React, { useState } from 'react'
import '../Style/search.css'
import axios from 'axios'
import searchicon from "../Assets/search-13-48.png"



function Search({ setRes, setShortRes }) {

    const [search, setSearch] = useState("")


    const API_KEY = process.env.REACT_APP_API_KEY



    const getdata = () => {
        if (search === "") {
            return;
        }
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=${API_KEY}&units=metric`)
            .then((response) => {
                setRes(response.data)//passing the data object to app.js
                console.log(response.data)
            }).catch((error) => {
                alert("error in fetching")
                console.log(search)
            })

        // short 
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}&units=metric`)
            .then((response) => {
                setShortRes(response.data)//passing the data object to app.js
                console.log(response.data)
            }).catch((error) => {
                alert("error in fetching")
                console.log(search)
            })
    }


    return (
        <div className='search-cont'>
            <div className='search-head'>
                <h1>The Only Weather Forecast You Need</h1>
            </div>
            <div className="input-container">
                <input className="search-box" type="text" placeholder='Enter Location'
                    onChange={(e) => { setSearch(e.target.value) }} />
                <img src={searchicon} className="img-icon" onClick={() => { getdata() }} alt=""></img>
            </div>
        </div>
    )
}

export default Search