function therm800UA()
{
    return `<div class="card" style="max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #dee2e6;">
  <div class="card-body">
    <h5 class="card-title" style="font-weight: bold;">Налаштування таймера EBECO EB-Therm 800</h5>
    
    <h6 class="card-subtitle mb-2 text-muted">Управління:</h6>
    <ul class="list-group list-group-flush" style="margin-bottom: 15px;">
      <li class="list-group-item" style="border: 0; padding-left: 0;">
        <strong>Бокові стрілки</strong> — кнопки для гортання меню або зміни даних.
      </li>
      <li class="list-group-item" style="border: 0; padding-left: 0;">
        <strong>Середня кнопка</strong> обирає активний пункт меню або підтверджує значення.
      </li>
    </ul>
    
    <h6 class="card-subtitle mb-2 text-muted">Режим перегляду налаштувань</h6>
    <p class="card-text" style="margin-bottom: 15px;">
      Це просте гортання стрілками при запуску пристрою або виході з меню налаштувань.
    </p>
    
    <p class="card-text" style="margin-bottom: 15px;">
      Таймер працює з двома датчиками. Якщо використовується лише один датчик, другий слід відключити в налаштуваннях.
    </p>
    
    <h6 class="card-subtitle mb-2 text-muted">Вхід в меню налаштувань:</h6>
    <ul class="list-group list-group-flush" style="margin-bottom: 15px;">
      <li class="list-group-item" style="border: 0; padding-left: 0;">
        Натискайте середню кнопку, поки не з'явиться <code>"main menu"</code>.
      </li>
    </ul>
    
    <h6 class="card-subtitle mb-2 text-muted">Деякі пункти меню:</h6>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" style="border: 0; padding-left: 0;">
        <strong>Exit</strong> — вихід з меню.
      </li>
      <li class="list-group-item" style="border: 0; padding-left: 0;">
        <strong>TEMP</strong> — вхід в меню налаштування температури.
        <ul>
          <li>Set Temp — стрілками задайте температуру, яку термометр має підтримувати.</li>
        </ul>
      </li>
      <li class="list-group-item" style="border: 0; padding-left: 0;">
        <strong>System-Sensor</strong> — налаштування комбінації датчиків. Наприклад, при використанні одного датчика оберіть варіант, де <code>A-Room, B-off</code>.
      </li>
    </ul>
    
    <p class="card-text" style="margin-top: 15px;">
      Система застосовує зміни при виході з редагованого меню.
    </p>
  </div>
</div>
`;
}