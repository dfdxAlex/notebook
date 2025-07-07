function therm800EN()
{
    return `<div class="card" style="max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #dee2e6;">
  <div class="card-body">
    <h5 class="card-title" style="font-weight: bold;">EBECO EB-Therm 800 Timer Settings</h5>
    
    <h6 class="card-subtitle mb-2 text-muted">Control:</h6>
    <ul class="list-group list-group-flush" style="margin-bottom: 15px;">
      <li class="list-group-item" style="border: 0; padding-left: 0;">
        <strong>Side arrows</strong> — buttons for navigating the menu or changing data.
      </li>
      <li class="list-group-item" style="border: 0; padding-left: 0;">
        <strong>Middle button</strong> selects the active menu item or confirms the value.
      </li>
    </ul>
    
    <h6 class="card-subtitle mb-2 text-muted">Settings View Mode</h6>
    <p class="card-text" style="margin-bottom: 15px;">
      This is simple scrolling with arrows when the device starts or exits the settings menu.
    </p>
    
    <p class="card-text" style="margin-bottom: 15px;">
      The timer works with two sensors. If only one sensor is used, the second one should be disabled in the settings.
    </p>
    
    <h6 class="card-subtitle mb-2 text-muted">Entering the Settings Menu:</h6>
    <ul class="list-group list-group-flush" style="margin-bottom: 15px;">
      <li class="list-group-item" style="border: 0; padding-left: 0;">
        Press the middle button until <code>"main menu"</code> appears.
      </li>
    </ul>
    
    <h6 class="card-subtitle mb-2 text-muted">Some Menu Options:</h6>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" style="border: 0; padding-left: 0;">
        <strong>Exit</strong> — exit the menu.
      </li>
      <li class="list-group-item" style="border: 0; padding-left: 0;">
        <strong>TEMP</strong> — enter the temperature settings menu.
        <ul>
          <li>Set Temp — use arrows to set the temperature the thermostat should maintain.</li>
        </ul>
      </li>
      <li class="list-group-item" style="border: 0; padding-left: 0;">
        <strong>System-Sensor</strong> — set the sensor combination. For example, with one sensor, select <code>A-Room, B-off</code>.
      </li>
    </ul>
    
    <p class="card-text" style="margin-top: 15px;">
      The system applies changes when exiting the edited menu.
    </p>
  </div>
</div>`;
}