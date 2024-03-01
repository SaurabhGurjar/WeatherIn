import { icons } from "../utils/fetchDataTo";

export default function homePage() {
  return `
  <div class="main-cw">
        <div id="place-wrapper">
          <span id="place-name">Roorkee</span>
          <span id="country">India</span>
        </div>
        <div id="search-box-wrapper">
        <form id="search-form">
          <input
            type="search"
            id="w-search"
            name="q"
            placeholder="Search city"
            required
          />
          <button type="submit" class="search-btn" id="sbtn">Search</button>
          </form>
        </div>
      </div>
      <div class="main-cw" id="wc-c">
        <div class="weather-details-card" id="wdc">
          <div class="card-section" id="card-top-section">
            <div class="card-icon" id="wci">
            ${icons.conditions[1000]};
            </div>
            <div class="card-heading-wrapper">
              <span id="card-place-name">Weather</span>
              <span id="place-description">What's the weather.</span>
            </div>
          </div>
          <div class="card-section" id="card-middle-section">
            <div class="temp-data-wrapper">
              <div>
                <span id="card-temp">16.6&degC</span>
              </div>
              <span id="max-temp">23.8&degC</span>
            </div>
            <span id="condition-text">Clear</span>
          </div>
          <div class="card-section" id="card-bottom-section">
            <div class="card-pr-vis-hu-wrapper" id="card-pressure">
              <span class="pvh-heading">Pressure</span>
              <span class="pvh-data" id="data-pressure">800mb</span>
            </div>
            <div class="card-pr-vis-hu-wrapper" id="card-visbility">
              <span class="pvh-heading">Visibility</span>
              <span class="pvh-data" id="data-visibilty">4.3km</span>
            </div>
            <div class="card-pr-vis-hu-wrapper" id="card-humidity">
              <span class="pvh-heading">Humidity</span>
              <span class="pvh-data" id="data-humidity">87%</span>
            </div>
          </div>
        </div>
        <div class="weather-details-card" id="adc">
          <div class="card-section" id="a-card-top-section">
            <div class="card-icon" id="aqi-icon">${icons.wind.dust}</div>
            <div class="card-heading-wrapper">
              <span id="card-air-quality-text">Air Quality</span>
              <span id="air-qlty-description">Main pollution: PM 2.5</span>
            </div>
          </div>
          <div class="card-section" id="a-card-middle-section">
            <div class="temp-data-wrapper">
              <span id="aqi">50</span>
              <span id="aqi-tag">AQI</span>
            </div>
            <span id="wind-direction">West Wind</span>
          </div>
          <div class="card-section" id="a-card-bottom-section">
            <div class="quality-indicator-container">
              <div class="quality-text-wrapper">
                <span>Good</span>
                <span>Unhealthy</span>
                <span>Hazardous</span>
              </div>
              <div class="quality-indicator-bar" id="quality-bar">
                <div id="quality-bar-fill"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="main-cw" id="hourly-today-temp-wrapper">
        <div id="temp-chart-wrapper">
          <h1 id="text">How's the temprature today?</h1>
        </div>
        <div id="tomorrow-card">
          <div id="tomoorow-card-header">
            <h4>Tomorrow</h4>
          </div>
          <div class="tomorrow-card-icon-text-wrapper">
            <div
            id="tomorrow-weather-card-icon">
           </div>
           <p id="tomorrow-weather">Cloudy</p>
           <div id="tomorrow-card-temp-wrapper">
              <p id="tomorrow-card-temp">26&degC</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>`;
}
