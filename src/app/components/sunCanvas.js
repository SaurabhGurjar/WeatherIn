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
    const x = Math.cos(redian) * dst + 160;
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

    // Draw point on line to represent sun position
    this.ctx.beginPath();
    this.ctx.globalAlpha = 1;

    this.ctx.fillStyle = "#ff8100";
    this.ctx.arc(coordinates.x, coordinates.y, 10, 0, 2 * Math.PI);
    this.ctx.fill();
    // this.ctx.drawImage(this.childCanvas, 10, 10);

    // Draw last update time
    this.ctx.beginPath();
    this.ctx.globalAlpha = 0.8;

    this.ctx.fillStyle = "black";
    this.ctx.font = "10px Helvetica";
    this.ctx.fillText(this.currentTime, coordinates.x + 16, coordinates.y);
    this.ctx.fill();
  }

  refreshPerMin() {
    setInterval(this.drawSun(), 60000);
  }
}

export function drawSunPath(sunriseTime, sunsetTime) {
  const canvas = document.getElementById("sun-canvas");
  const ctx = canvas.getContext("2d");
  const canvasWidth = canvas.width;

  // Draw a semi-circle
  ctx.beginPath();
  ctx.setLineDash([2, 4]); // Make arc dotted.
  ctx.arc(160, 140, 100, Math.PI, 0);
  ctx.stroke();

  // Reset line to normal (i.e they are not dotted)
  ctx.setLineDash([]);

  // Draw a line
  ctx.beginPath();
  ctx.strokeStyle = "#e67402";
  ctx.lineCap = "round";
  ctx.moveTo(0, 140);
  ctx.lineTo(canvasWidth, 140);
  ctx.stroke();

  // Draw point on line to represent sunrise
  ctx.beginPath();
  ctx.fillStyle = "#000000";
  ctx.arc(260, 140, 3, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();

  // Draw point on line to represent sunset
  ctx.beginPath();
  ctx.fillStyle = "#ff8100";
  ctx.arc(60, 140, 3, 0, 2 * Math.PI);
  ctx.fill();

  // Draw text of sunset
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.font = "900 10px Helvetica";
  ctx.fillText("Sunset", 45, 162);
  ctx.fill();

  // Draw text of sunrise
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.font = "900 10px Helvetica";
  ctx.fillText("Sunrise", 245, 162);
  ctx.fill();

  // Draw time of sunset
  ctx.beginPath();
  ctx.globalAlpha = 0.5;
  ctx.fillStyle = "black";
  ctx.font = "10px Helvetica";
  ctx.fillText(sunsetTime, 45, 183);
  ctx.fill();

  // Draw time of sunrise
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.font = "10px Helvetica";
  ctx.fillText(sunriseTime, 245, 183);
  ctx.fill();
}
