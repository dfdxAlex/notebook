function therm800RU()
{
    return `<div class="card" style="max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #dee2e6;">
  <div class="card-body">
    <h5 class="card-title" style="font-weight: bold;">Настройка таймера EBECO EB-Therm 800</h5>
    
    <h6 class="card-subtitle mb-2 text-muted">Управление:</h6>
    <ul class="list-group list-group-flush" style="margin-bottom: 15px;">
      <li class="list-group-item" style="border: 0; padding-left: 0;">
        <strong>Боковые стрелки</strong> — кнопки для листания меню или изменения данных.
      </li>
      <li class="list-group-item" style="border: 0; padding-left: 0;">
        <strong>Средняя кнопка</strong> выбирает активный пункт меню или подтверждает значение.
      </li>
    </ul>
    
    <h6 class="card-subtitle mb-2 text-muted">Режим просмотра настроек</h6>
    <p class="card-text" style="margin-bottom: 15px;">
      Это простое листание стрелками при запуске устройства или выходе из меню настроек.
    </p>
    
    <p class="card-text" style="margin-bottom: 15px;">
      Таймер работает с двумя датчиками. Если используется только один датчик, второй следует отключить в настройках.
    </p>
    
    <h6 class="card-subtitle mb-2 text-muted">Вход в меню настроек:</h6>
    <ul class="list-group list-group-flush" style="margin-bottom: 15px;">
      <li class="list-group-item" style="border: 0; padding-left: 0;">
        Нажимайте среднюю кнопку, пока не появится <code>"main menu"</code>.
      </li>
    </ul>
    
    <h6 class="card-subtitle mb-2 text-muted">Некоторые пункты меню:</h6>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" style="border: 0; padding-left: 0;">
        <strong>Exit</strong> — выход из меню.
      </li>
      <li class="list-group-item" style="border: 0; padding-left: 0;">
        <strong>TEMP</strong> — вход в меню настройки температуры.
        <ul>
          <li>Set Temp — стрелками задайте температуру, которую термометр должен поддерживать.</li>
        </ul>
      </li>
      <li class="list-group-item" style="border: 0; padding-left: 0;">
        <strong>System-Sensor</strong> — настройка комбинации датчиков. Например, при использовании одного датчика выберите вариант, где <code>A-Room, B-off</code>.
      </li>
    </ul>
    
    <p class="card-text" style="margin-top: 15px;">
      Система применяет изменения при выходе из редактируемого меню.
    </p>
  </div>
</div>
`;
}