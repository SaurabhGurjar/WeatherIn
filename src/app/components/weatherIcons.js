import clearDay from "@bybas/weather-icons/production/fill/all/clear-day.svg";
import dustWind from "@bybas/weather-icons/production/fill/all/dust-wind.svg";
import lightRain from "@bybas/weather-icons/production/fill/all/partly-cloudy-day-drizzle.svg";
import partlyCloudy from "@bybas/weather-icons/production/fill/all/partly-cloudy-day.svg";

// UV icons partly-cloudy-day
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
    };

    this.windConditions = {
      dust: dustWind,
      lightrainshower: lightRain,
    };
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
}
