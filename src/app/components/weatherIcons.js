import clearDay from "@bybas/weather-icons/production/fill/all/clear-day.svg";
import dustWind from "@bybas/weather-icons/production/fill/all/dust-wind.svg";
import lightRain from "@bybas/weather-icons/production/fill/all/partly-cloudy-day-drizzle.svg";
import partlyCloudy from "@bybas/weather-icons/production/fill/all/partly-cloudy-day.svg";
import patchyRain from "@bybas/weather-icons/production/fill/all/drizzle.svg";
import overcast from "@bybas/weather-icons/production/fill/all/overcast.svg";
import moderateRain from "@bybas/weather-icons/production/fill/all/partly-cloudy-day-rain.svg";
import snow from "@bybas/weather-icons/production/fill/all/snow.svg";
import sleet from "@bybas/weather-icons/production/fill/all/sleet.svg";
import mist from "@bybas/weather-icons/production/fill/all/mist.svg";
import rain from "@bybas/weather-icons/production/fill/all/rain.svg";
import hail from "@bybas/weather-icons/production/fill/all/hail.svg";
import thunderstormsSnow from "@bybas/weather-icons/production/fill/all/thunderstorms-snow.svg";
import thunderstormsRain from "@bybas/weather-icons/production/fill/all/thunderstorms-rain.svg";
import fog from "@bybas/weather-icons/production/fill/all/fog.svg";
import cloudy from "@bybas/weather-icons/production/fill/all/cloudy.svg";

// UV icons partly-cloudy-day-rain
import uv0 from "@bybas/weather-icons/production/fill/all/uv-index.svg";
import uv1 from "@bybas/weather-icons/production/fill/all/uv-index-1.svg";
import uv2 from "@bybas/weather-icons/production/fill/all/uv-index-2.svg";
import uv3 from "@bybas/weather-icons/production/fill/all/uv-index-3.svg";
import uv4 from "@bybas/weather-icons/production/fill/all/uv-index-4.svg";
import uv5 from "@bybas/weather-icons/production/fill/all/uv-index-5.svg";
import uv6 from "@bybas/weather-icons/production/fill/all/uv-index-6.svg";
import uv7 from "@bybas/weather-icons/production/fill/all/uv-index-7.svg";
import uv8 from "@bybas/weather-icons/production/fill/all/uv-index-8.svg";
import uv9 from "@bybas/weather-icons/production/fill/all/uv-index-9.svg";
import uv10 from "@bybas/weather-icons/production/fill/all/uv-index-10.svg";
import uv11 from "@bybas/weather-icons/production/fill/all/uv-index-11.svg";

// Moon phases Icon
import moonNew from "@bybas/weather-icons/production/fill/all/moon-new.svg";
import waxingCrescent from "@bybas/weather-icons/production/fill/all/moon-waxing-crescent.svg";
import firstQuarter from "@bybas/weather-icons/production/fill/all/moon-first-quarter.svg";
import waxingGibbous from "@bybas/weather-icons/production/fill/all/moon-waxing-gibbous.svg";
import full from "@bybas/weather-icons/production/fill/all/moon-full.svg";
import waningGibbous from "@bybas/weather-icons/production/fill/all/moon-waning-gibbous.svg";
import lastQuarter from "@bybas/weather-icons/production/fill/all/moon-last-quarter.svg";
import waningCrescent from "@bybas/weather-icons/production/fill/all/moon-waning-crescent.svg";

// Star icon
import staricon from "@bybas/weather-icons/production/fill/all/star.svg";

export default class Icons {
  constructor() {
    this.UVIcons = {
      0: uv0,
      1: uv1,
      2: uv2,
      3: uv3,
      4: uv4,
      5: uv5,
      6: uv6,
      7: uv7,
      8: uv8,
      9: uv9,
      10: uv10,
      11: uv11,
    };

    this.weatherConditions = {
      1000: clearDay,
      1003: partlyCloudy,
      1006: cloudy,
      1009: overcast,
      1063: patchyRain,
      1183: lightRain,
      1189: moderateRain,
      1030: mist, // Mist

      // Snow
      1066: snow, // Patchy snow possible
      1114: snow, // Blowing snow
      1210: snow, // Patchy light snow
      1213: snow, // Light snow
      1216: snow, // Patchy moderate snow
      1219: snow, // Moderate snow
      1222: snow, // Patchy heavy snow
      1225: snow, // Heavy snow
      1255: snow, // Light snow showers
      1258: snow, // Moderate or heavy snow showers

      // Sleet
      1069: sleet, // Patchy sleet possible
      1072: sleet, // Patchy freezing drizzle possible
      1168: sleet, // Freezing drizzle
      1171: sleet, // Heavy freezing drizzle
      1198: sleet, // Light freezing rain
      1201: sleet, // Moderate or heavy freezing rain
      1204: sleet, // Light sleet
      1207: sleet, // Moderate or heavy sleet
      1249: sleet, // Light sleet showers
      1252: sleet, // Moderate or heavy sleet showers

      // Thunderstorms rain
      1087: thunderstormsRain, // Thundery outbreaks possible
      1273: thunderstormsRain, // Patchy light rain with thunder
      1276: thunderstormsRain, // Moderate or heavy rain with thunder

      // Thunderstorms snow
      1117: thunderstormsSnow, // Blizzard
      1279: thunderstormsSnow, // Patchy light snow with thunder
      1282: thunderstormsSnow, // Moderate or heavy snow with thunder

      // Fog
      1135: fog, // Fog
      1147: fog, // Freezing fog

      // Rain
      1180: rain, // Patchy light rain:
      1186: rain, // Moderate rain at times
      1192: rain, // Heavy rain at times
      1195: rain, // Heavy rain
      1240: rain, // Light rain shower
      1243: rain, // Moderate or heavy rain shower
      1246: rain, // Torrential rain shower

      // Hail
      1237: hail, // Ice pellets
      1261: hail, // Light showers of ice pellets
      1264: hail, // Moderate or heavy showers of ice pellets
    };

    this.windConditions = {
      dust: dustWind,
    };

    this.moonPhases = {
      new: moonNew,
      "waxing-crescent": waxingCrescent,
      "first-quarter": firstQuarter,
      "waxing-gibbous": waxingGibbous,
      full: full,
      "waning-gibbous": waningGibbous,
      "last-quarter": lastQuarter,
      "waning-crescent": waningCrescent,
    };

    this.sun = clearDay;
    this.star = staricon;
  }

  get UV() {
    return this.UVIcons;
  }

  get conditions() {
    return this.weatherConditions;
  }

  get wind() {
    return this.windConditions;
  }

  get moonPhase() {
    return this.moonPhases;
  }

  get sunIcon() {
    return this.sun;
  }

  get starIcon() {
    return this.star;
  }
}
