export default class WeatherData {
  static key = "15d7fcd35f4b4350975130310240102";

  static windDir = {
    W: "West Wind",
    S: "South Wind",
    N: "North Wind",
    E: "East Wind",
    SW: "South-west Wind",
    SE: "South-east Wind",
    NE: "North-east Wind",
    WNW: "West-northwest Wind",
    NW: "Northwest Wind",
    NNW: "North-northwest Wind",
    WSW: "West-southwest Wind",
    ENE: "East-northeast Wind",
    NNE: "North-northeast Wind",
    SSE: "South-southeast Wind",
    ESE: "East-southeast Wind",
    SSW: "South-southwest Wind",
  };

  static preURL = "https://api.weatherapi.com/v1";

  static async fetchWeatherData(search, days) {
    const url = `${WeatherData.preURL}/forecast.json?key=${WeatherData.key}&q=${search}&days=${days}&aqi=yes`;
    const request = new Request(url, { mode: "cors" });
    const promise = await fetch(request);
    return promise;
  }

  static async wd(response) {
    const wdResponse = await response;
    const data = await wdResponse.json();
    return data;
  }

  constructor(search = "roorkee") {
    if (search === " " || search === "") {
      this.search = "roorkee";
    } else {
      this.search = search;
    }
    this.response = WeatherData.fetchWeatherData(this.search, 2);
    this.data = WeatherData.wd(this.response);
  }

  // Return current temprature value in °C.
  async currentTempInCelsius() {
    const data = await this.data;
    return `${data.current.temp_c}°C`;
  }

  // Return weather condition.
  async currentCondition() {
    const data = await this.data;
    return data.current.condition.text;
  }

  // Return current pressure value in mb(millibar).
  async currentPressureInmb() {
    const data = await this.data;
    return `${data.current.pressure_mb}mb`;
  }

  // Return current visibilty value in km.
  async currentVisiblityInKm() {
    const data = await this.data;
    return `${data.current.vis_km}km`;
  }

  async currentHumidity() {
    const data = await this.data;
    return `${data.current.humidity}%`;
  }

  async currentAirQuality() {
    const data = await this.data;
    return data.current.air_quality.pm2_5;
  }

  // Returns AQI data value in percentage
  async airQualityIndicator() {
    const airQ = await this.currentAirQuality();
    return `${Math.round((airQ / 300) * 100)}%`;
  }

  // Return wind direction data
  async currentWindDirection() {
    const data = await this.data;
    const currentWindDir = data.current.wind_dir.toUpperCase();
    if (currentWindDir in WeatherData.windDir) {
      return WeatherData.windDir[currentWindDir];
    }
    return currentWindDir;
  }

  // Return today's max temperature
  async todayMaxTempInCelsius() {
    const data = await this.data;
    return `${data.forecast.forecastday[0].day.maxtemp_c}°C`;
  }

  // Return hourly data
  async hourlyWeatherInCelsius() {
    const data = await this.data;
    console.log(data.forecast.forecastday[0].hour);
    const temps = [];
    const hours = [];
    data.forecast.forecastday[0].hour.forEach((item) => {
      temps.push(item.temp_c);
      hours.push(item.time.split(" ")[1]);
    });
    return [hours, temps];
  }

  // Return city name
  async city() {
    const data = await this.data;
    return data.location.name;
  }

  // Return country name
  async country() {
    const data = await this.data;
    return data.location.country;
  }

  // Return tomorrow max temperature
  async tomorrowTempInCelsius () {
    const data = await this.data;
    return `${data.forecast.forecastday[1].day.maxtemp_c}°C`;
  }

  // Return tomorrow weather condition
  async tomorrowCondition() {
    const data = await this.data;
    return data.forecast.forecastday[1].day.condition.text;
  }
}
