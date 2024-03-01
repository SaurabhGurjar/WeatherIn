export default function settingsPage() {
  return `<div class="page-title-wrapper">
            <p class="page-title" id="settings-page-title">Settings</p>
  </div>
  <div class="temp-settings-container">
            <div class="text-btn-wrapper">
              <p>Choose Temperature Scale</p>
              <div class="btn-wrapper">
                <button id="cel-btn" class="tbtn">Celisus</button>
                <button id="fah-btn" class="tbtn">Fahrenheit</button>
              </div>
            </div>
            <div class="text-btn-wrapper">
              <p>Choose Distance Measurement</p>
              <div class="btn-wrapper">
                <button id="km-btn" class="dbtn">Kilometer</button>
                <button id="mi-btn" class="dbtn">Miles</button>
              </div>
          </div>`;
}
