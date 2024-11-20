// объект хранит данные для справочника. 
// информация хранится в свойствах.
// имя свойства - это ключ для запрашиваемой информации
// если нужно чтобы ключей было несколько, то разделить их с помощью
// подчёркивания
// Если нужен перевод, то нужно его добавить в класс TranslateBD
// После каждой точки программа сама ставит <br>
const dataSheetBD = {};

dataSheetBD.m10 = 'Гайка металлическая с резьбой М10 затягивается моментом в 50 ньютон.';
dataSheetBD.m12 = 'Гайка металлическая с резьбой М12 затягивается моментом в 70 ньютон.';
dataSheetBD.mod_bus_rs485_485 = '<h4>Цвета подключения проводов</h4> D1+ - Коричневый. В0- - Белый. 0V - Жёлтый. SH - Экран.';
dataSheetBD.iem3255_iem_3255 = `
  <h4>Настройка счётчика iEM3255</h4>
  Нажать и придержать кнопки OK и ESC до появления полей ввода пароля.
  Пароль вводится по одной цифре.
  V - увеличивает текущую цифру на один.
  OK - переходит к вводу следующей цифры.
  После ввода последней цифры счётчик сам входит в режим настройки.
  Пароль 0010. Попыток на ввод - 5 (вероятно, но лучше не проверять).
  В режиме настроек V листает разделы, OK входит в текущий раздел.
  CT & VT - Раздел для указатия типа трансформатора тока.
  CT Secondary - указывает нижний параметр, если трансформатор 120/5, то сюда вводится 5.
  CT Primary - указывает верхний параметр, в данном примере - это 120.
  ..Проверка.
  Для проверки счётчика следует нажимать кнопку V, без входа в меню настроек, выбрав пункт V & I или P,Q,& S.
  На VMA используется нагреватель мощностью 8,4 ампера при 220 вольтах.
  При входе в раздел V & I можно посмотреть напряжение сети, частоту сети и силу тока на каждой фазе.
  Поэтому выбрать фазу 1 и подключить нагреватель на фазу 1, если покажет 8,4 ампера, то всё работает.
  Так-же проверить остальные фазы. В примере нагреватель в VMA.
`;
dataSheetBD.EBECO_ebeco_Ebeco_EB_Therm_therm_800 = `<div class="card" style="max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #dee2e6;">
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

dataSheetBD.PM5300_5300 = `<div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
  <h2 style="text-align: center; color: #0066cc; margin-bottom: 20px;">Настройка счётчика PM5300</h2>
  <p>Опции листаются <strong>правой кнопкой</strong> под экраном, стрелкой вправо. Нажимая правую стрелку, необходимо найти пункт <strong>Maint</strong>. Одновременно на экране помещаются три опции, для выбора <strong>Maint</strong> необходимо под надписью нажать кнопку.</p>
  <p>Далее:</p>
  <ol style="padding-left: 20px; margin-top: 10px; margin-bottom: 20px;">
    <li>Выберите <strong>Setup</strong>.</li>
    <li>На экране появится поле для ввода пароля (с нулями). Ничего не вводим, просто нажимаем <strong>OK</strong>.</li>
    <li>Выберите <strong>Meter</strong>, затем <strong>Basic</strong>.</li>
  </ol>
  <p>Таким образом, вы попадёте в меню настроек счётчика. Чтобы задать параметры:</p>
  <ul style="padding-left: 20px; margin-top: 10px; margin-bottom: 20px;">
    <li>Найдите параметр <strong>CT Primary</strong> для задания высокого параметра трансформатора тока.</li>
    <li>Найдите параметр <strong>CT Secondary</strong> для настройки малого параметра.</li>
  </ul>

  <h2 style="text-align: center; color: #0066cc; margin-bottom: 20px;">Проверка счётчика</h2>
  <p>Находясь в режиме работы, на главной странице, листайте подпункты и ищите <strong>I - сила тока</strong>. Откройте эту позицию и, нагрузив фазы, проверьте силу тока.</p>
  <p><strong>Важно:</strong> величина должна быть положительной. Если это не так, трансформатор тока подключён неправильно.</p>
</div>
`;
