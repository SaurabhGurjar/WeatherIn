export default class Sun {
  // This method convert the AM / PM time the 24 hour time
  static convertTime(time) {
    const [ntime, ap] = time.split(" ");
    let [hours, mins] = ntime.split(":").map((num) => parseInt(num, 10));
    if (ap.toLowerCase() === "pm" && hours !== 12) {
      hours += 12;
    } else if (ap.toLowerCase() === "am" && hours === 12) {
      hours = 0;
    }
    return `${hours}:${mins}`;
  }

  static converterTimeIntoMin(time) {
    const [hours, mins] = time.split(":").map((num) => parseInt(num, 10));
    return Number(hours) * 60 + Number(mins);
  }

  static currentTimeInMinutes(currentTime) {
    return Sun.converterTimeIntoMin(currentTime);
  }

  static angelPerMin(rise, set) {
    const min =
      Sun.converterTimeIntoMin(Sun.convertTime(set)) -
      Sun.converterTimeIntoMin(Sun.convertTime(rise));
    // console.log(min);
    const angle = 180 / min;
    return angle;
  }

  static currentAngle(rise, set, currentTime) {
    const riseTimeInMin = Sun.converterTimeIntoMin(Sun.convertTime(rise));
    // console.log(riseTimeInMin);
    return (
      (Sun.currentTimeInMinutes(currentTime) - riseTimeInMin) *
      Sun.angelPerMin(rise, set)
    );
  }

  static calSunPos(angle, distance) {
    const dst = parseInt(distance, 10);
    const ang = angle >= 180 || angle < 0 ? 270 : Number(angle);
    const redian = ang * (Math.PI / 180);
    const x = Math.cos(redian) * dst + 150;
    const y = 140 - Math.sin(redian) * dst;
    return { x, y };
  }

  constructor(canvasId, sunriseTime, sunsetTime, width, arcRadius, time) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.rise = sunriseTime;
    this.set = sunsetTime;
    this.canvas.width = width;
    this.canvas.height = 200;
    this.canvasWidth = this.canvas.width;
    this.canvasHeight = this.canvas.height;
    this.childCanvas = document.createElement("canvas");
    this.childCtx = this.childCanvas.getContext("2d");
    this.childCanvas.width = width;
    this.distance = arcRadius;
    this.currentTime = time;
  }

  drawSun() {
    const angle = Sun.currentAngle(this.rise, this.set, this.currentTime);
    const coordinates = Sun.calSunPos(angle, this.distance);
    const sun = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="44px" height="44px">
      <defs>
       <linearGradient id="a" x1="26.75" x2="37.25" y1="22.91" y2="41.09" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#fbbf24"></stop><stop offset=".45" stop-color="#fbbf24"></stop>
        <stop offset="1" stop-color="#f59e0b"></stop>
       </linearGradient>
     </defs>
      <circle cx="32" cy="32" r="10.5" fill="url(#a)" stroke="#f8af18" stroke-miterlimit="10" stroke-width=".5"></circle>
      <path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"
        d="M32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21">
        <animateTransform attributeName="transform" dur="45s" repeatCount="indefinite" type="rotate" values="0 32 32; 360 32 32"></animateTransform>
      </path>
    </svg>`;

    // Draw last update time
    this.ctx.beginPath();
    this.ctx.globalAlpha = 0.5;

    this.ctx.fillStyle = "black";
    this.ctx.font = "10px Helvetica";
    this.ctx.fillText(this.currentTime, coordinates.x + 40, coordinates.y);
    this.ctx.fill();

    // Draw sun icon to represent sun position
    this.ctx.beginPath();
    this.ctx.globalAlpha = 1;
    const img = new Image();
    img.onload = () => {
      this.ctx.drawImage(img, coordinates.x, coordinates.y - 15);
    };
    img.src = `data:image/svg+xml;base64, ${btoa(sun)}`;
  }

  refreshPerMin() {
    setInterval(this.drawSun(), 60000);
  }
}

export function drawSunPath(sunriseTime, sunsetTime) {
  const canvas = document.getElementById("sun-canvas");
  const ctx = canvas.getContext("2d");
  const canvasWidth = canvas.width;

  // Draw a sun path
  ctx.beginPath();
  ctx.globalAlpha = 0.3;
  ctx.setLineDash([2, 5]); // Make arc dotted.
  ctx.arc(150, 140, 100, Math.PI, 0);
  ctx.stroke();
  // Reset line to normal (i.e they are not dotted)
  ctx.setLineDash([]);

  // Draw a line
  ctx.beginPath();
  ctx.globalAlpha = 1;
  ctx.strokeStyle = "#e67402";
  ctx.lineCap = "round";
  ctx.moveTo(0, 140);
  ctx.lineTo(canvasWidth, 140);
  ctx.stroke();

  // Draw point on line to represent sunrise
  ctx.beginPath();
  ctx.fillStyle = "#000000";
  ctx.arc(250, 140, 3, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();

  // Draw point on line to represent sunset
  ctx.beginPath();
  ctx.fillStyle = "#ff8100";
  ctx.arc(50, 140, 3, 0, 2 * Math.PI);
  ctx.fill();

  // Draw text of sunset
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.font = "900 10px Helvetica";
  ctx.fillText("Sunset", 35, 162);
  ctx.fill();

  // Draw text of sunrise
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.font = "900 10px Helvetica";
  ctx.fillText("Sunrise", 235, 162);
  ctx.fill();

  // Draw time of sunset
  ctx.beginPath();
  ctx.globalAlpha = 0.5;
  ctx.fillStyle = "black";
  ctx.font = "10px Helvetica";
  ctx.fillText(sunsetTime, 35, 183);
  ctx.fill();

  // Draw time of sunrise
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.font = "10px Helvetica";
  ctx.fillText(sunriseTime, 235, 183);
  ctx.fill();
}
