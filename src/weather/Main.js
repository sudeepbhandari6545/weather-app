import React from 'react'
import './Main.css'

const Main = () => {
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search"
            autoFocus
            id="Search"
            className="searchTerm"
          />
          <button className="searchButton" type="button">
            Search
          </button>
        </div>
      </div>
      {/* our main weather card */}
      <article className="widget">
        <div className="weatherIcon">
          <i className={'wi wi-day-sunny'}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>25.56&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">Sunny</div>
            <div className="place">Kathmandu,Nepal</div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>
        {/* last part */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={'wi wi-sunset'}></i>
              </p>
              <p className="extra-info-leftside">
                19:19 pm <br />
                Sunset
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

export default Main
