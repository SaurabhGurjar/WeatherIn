export default function homePage() {
  return `<div class="main-cw">
        <div id="place-wrapper">
          <span id="place-name">Delhi</span>
          <span id="country">India</span>
        </div>
        <!-- <span id="date">10 Feb 2024</span> -->
        <div id="search-box-wrapper">
        <form id="search-form">
          <input
            type="search"
            id="w-search"
            name="q"
            placeholder="Search city"
            required
          />
          <button class="search-btn" id="sbtn">Search</button>
          </form>
        </div>
      </div>
      <div class="main-cw" id="wc-c">
        <div class="weather-details-card" id="wdc">
          <div class="card-section" id="card-top-section">
            <div class="card-icon" id="wci"></div>
            <div class="card-heading-wrapper">
              <span id="card-place-name">Weather</span>
              <span id="place-description">What's the weather.</span>
            </div>
          </div>
          <div class="card-section" id="card-middle-section">
            <div class="temp-data-wrapper">
              <div>
                <span id="card-temp">10&degC</span>
              </div>
              <span id="low-temp">11&degC</span>
            </div>
            <span id="condition-text">Partly Cloudy</span>
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
            <div class="card-icon"></div>
            <div class="card-heading-wrapper">
              <span id="card-air-quality-text">Air Quality</span>
              <span id="air-qlty-description">Main pollution: PM 2.5</span>
            </div>
          </div>
          <div class="card-section" id="a-card-middle-section">
            <div class="temp-data-wrapper">
              <span id="aqi">390</span>
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
                <div id="quality-bar-fill" style="width: 50%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="main-cw">
        <div id="temp-chart-wrapper">
          <div id="interface-wrapper">
            <span id="text">How's the temprature today?</span>
            <div id="i-button-wrapper">
              <button class="interface-btns"></button>
              <button class="interface-btns"></button>
            </div>
          </div>
          <div id="chart"></div>
        </div>
        <div id="tomorrow-card">
          <div>
            <span>Tomorrow</span>
          </div>
          <div id="tomorrow-card-temp-wrapper">
            <span id="tomorrow-card-temp">20&degC</span>
            <span id="tomorrow-weather">Rainy</span>
          </div>
        </div>
      </div>
    <div class="outer-container" id="info-c"></div>`;
}
