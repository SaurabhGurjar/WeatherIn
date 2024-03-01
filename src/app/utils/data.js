import { format } from "date-fns";

export default class WeatherData {
  static key = "15d7fcd35f4b4350975130310240102";

  static isTempInC = true;

  static isDisInKm = true;

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
    try {
      const url = `${WeatherData.preURL}/forecast.json?key=${WeatherData.key}&q=${search}&days=${days}&aqi=yes`;
      const request = new Request(url, { mode: "cors" });
      const promise = await fetch(request);
      return promise;
    } catch (e) {
      return null;
    }
  }

  static async wd(response) {
    try {
      const wdResponse = await response;
      const data = await wdResponse.json();
      return data;
    } catch (e) {
      return null;
    }
  }

  static getTempInC() {
    return WeatherData.isTempInC;
  }

  static getDisInKm() {
    return WeatherData.isDisInKm;
  }

  static setTempInC(bool) {
    WeatherData.isTempInC = bool;
  }

  static setDisInKm(bool) {
    WeatherData.isDisInKm = bool;
  }

  constructor(days, search = "roorkee") {
    if (search.toLowerCase() === "delhi") {
      this.response = WeatherData.fetchWeatherData("delhi-india", days);
    } else {
      this.response = WeatherData.fetchWeatherData(search, days);
    }
    this.data = WeatherData.wd(this.response);
  }

  // Return current visibilty value.
  async currentVisiblity() {
    const data = await this.data;
    if (WeatherData.isDisInKm) return `${data.current.vis_km}km`;
    return `${data.current.vis_miles}miles`;
  }

  // Return current temprature value in °C.
  async currentTemp() {
    const data = await this.data;
    if (WeatherData.isTempInC) return `${data.current.temp_c}°C`;
    return `${data.current.temp_f}°F`;
  }

  // Return today's max temperature
  async todayMaxTemp() {
    const data = await this.data;
    if (WeatherData.isTempInC)
      return `${data.forecast.forecastday[0].day.maxtemp_c}°C`;
    return `${data.forecast.forecastday[0].day.maxtemp_f}°F`;
  }

  // Return hourly data
  async hourlyWeather() {
    const data = await this.data;
    const temps = [];
    const hours = [];
    data.forecast.forecastday[0].hour.forEach((item) => {
      if (WeatherData.isTempInC) {
        temps.push(item.temp_c);
      } else {
        temps.push(item.temp_f);
      }
      hours.push(item.time.split(" ")[1]);
    });
    return [hours, temps];
  }

  // Return current temprature value in °C.
  async currentTempInCelsius() {
    const data = await this.data;
    return `${data.current.temp_c}°C`;
  }

  // Return current temprature value in °F.
  async currentTempInFahrenheit() {
    const data = await this.data;
    return `${data.current.temp_f}°F`;
  }

  // Return weather condition.
  async currentCondition() {
    const data = await this.data;
    // console.log(data);
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

  // Return current visibilty value in miles.
  async currentVisiblityInMiles() {
    const data = await this.data;
    return `${data.current.vis_miles}mi`;
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

  async currentConditionCode() {
    const data = await this.data;
    return data.current.condition.code;
  }

  async conditionCode(day) {
    const data = await this.data;
    return data.forecast.forecastday[day].day.condition.code;
  }

  // Return today's max temperature
  async todayMaxTempInCelsius() {
    const data = await this.data;
    return `${data.forecast.forecastday[0].day.maxtemp_c}°C`;
  }

  // Return hourly data
  async hourlyWeatherInCelsius() {
    const data = await this.data;
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
  async tomorrowTemp() {
    const data = await this.data;
    if (WeatherData.isTempInC)
      return `${data.forecast.forecastday[1].day.maxtemp_c} °C`;
    return `${data.forecast.forecastday[1].day.maxtemp_f}°F`;
  }

  // Return tomorrow weather condition
  async tomorrowCondition() {
    const data = await this.data;
    return data.forecast.forecastday[1].day.condition.text;
  }

  // Return astro data
  async astro() {
    const data = await this.data;
    return data.forecast.forecastday[0].astro;
  }

  async astroIcon() {
    const data = await this.data;
    const astroData = data.forecast.forecastday[0].astro;
    if (Number(data.current.is_day)) {
      return "sun";
    }
    if (!Number(data.current.is_day)) {
      if (Number(astroData.is_moon_up)) {
        return astroData.moon_phase.toLowerCase().split(" ").join("-");
      }
    }
    return "star";
  }

  async dayOrNight() {
    const data = await this.data;
    if (Number(data.current.is_day)) return "Sun";
    if (Number(data.forecast.forecastday[0].astro.is_moon_up)) return "Moon";
    return "Stars";
  }

  async cityName() {
    const data = await this.data;
    return data.location.name;
  }

  async stateName() {
    const data = await this.data;
    return data.location.region;
  }

  async currentUVData() {
    const data = await this.data;
    return data.current.uv;
  }

  // Return today UV data
  async todayUVData() {
    const data = await this.data;
    return data.forecast.forecastday[0].day.uv;
  }

  async uvLevel() {
    const UV = parseInt(await this.currentUVData(), 10);
    if (UV > 2 && UV <= 5) return "Moderate";
    if (UV > 5 && UV <= 7) return "High";
    if (UV > 7 && UV <= 10) return "Very high";
    if (UV >= 11) return "Extreme";
    return "Low";
  }

  async #maxminTemp(day) {
    let d;
    if (day >= 0 && day < 3) {
      d = Number(day);
    } else {
      throw new Error(
        "The value of day should be between and inclusive of 0 and 2.",
      );
    }
    const data = await this.data;
    if (WeatherData.isTempInC) {
      return {
        max: data.forecast.forecastday[d].day.maxtemp_c,
        min: data.forecast.forecastday[d].day.mintemp_c,
      };
    }
    return {
      max: data.forecast.forecastday[d].day.maxtemp_f,
      min: data.forecast.forecastday[d].day.mintemp_f,
    };
  }

  // Return day min temperature
  async dayMaxTemp(day) {
    const tp = await this.#maxminTemp(parseInt(day, 10));
    return tp.max;
  }

  // Return day min temperature
  async dayMinTemp(day) {
    const tp = await this.#maxminTemp(parseInt(day, 10));
    return tp.min;
  }

  // Format date to Month name and day form (February 23).
  async #dateFormatter(d) {
    const day = parseInt(d, 10);
    if (day > 2 && day < 0) {
      throw new Error(
        "The value of day should be between and inclusive of 0 and 2.",
      );
    } else {
      const data = await this.data;
      const [year, month, date] =
        data.forecast.forecastday[day].date.split("-");
      return format(new Date(year, month - 1, date), "MMMM dd");
    }
  }

  async date(day) {
    return this.#dateFormatter(parseInt(day, 10));
  }

  async #dayCondition(d) {
    const day = parseInt(d, 10);
    if (day > 2 && day < 0) {
      throw new Error(
        "The value of day should be between and inclusive of 0 and 2.",
      );
    } else {
      const data = await this.data;
      return data.forecast.forecastday[day].day.condition.text;
    }
  }

  async condition(day) {
    return this.#dayCondition(day);
  }
}
