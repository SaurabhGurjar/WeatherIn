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

  static preUrl = "https://api.weatherapi.com/v1";

  static async currentTemp(search) {
    try {
      const url = `${WeatherData.preUrl}/current.json?key=${WeatherData.key}&q=${search}&aqi=yes`;
      const request = new Request(url, { mode: "cors" });
      return await fetch(request);
    } catch (error) {
      throw new Error(error);
    }
  }

  static async wd(response) {
    try {
      const wdResponse = await response;
      const data = await wdResponse.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  constructor(search = "manali") {
    this.search = search;
    this.response = WeatherData.currentTemp(this.search);
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
    return `${Math.round((airQ / 500) * 100)}%`;
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
}
