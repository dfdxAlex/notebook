// класс содержит переводы на разные языки разных фраз

class TranslateBD
{
    static get translateArray()
    {
        return this._translateBD;
    }

    static _translateBD = [ //
      [
        ``,
        ``,
        ``,
        ``
      ],
      [
        ``,
        ``,
        ``,
        ``
      ],
      [
        `Настройки перемычек. Предпоследние с обеих сторон переключены к желтому проводу.`,
        `Налаштування перемичок. Передостанні з обох боків переключені до жовтого дроту.`,
        `Ustawienia zworek. Przedostatnie po obu stronach są przełączane na żółty przewód.`,
        `Jumper settings. The last but one on both sides are switched to the yellow wire.`
      ],
      [
        `Призма. Пластиковые уголки на месте.`,
        `Пластикові куточки на місці.`,
        `Pryzmat. Plastikowe narożniki są na swoim miejscu.`,
        `Prism. Plastic corners in place.`
      ],
      [
        `Проверить качество петель на дверях, что ничего не отлетает.`,
        `Перевірити якість петель на дверях, що нічого не відлітає.`,
        `Sprawdź jakość zawiasów w drzwiach, aby upewnić się, że nic nie odlatuje.`,
        `Check the quality of the hinges on the doors to make sure nothing falls off.`
      ],
      [
        `Проверить подключение лампы на призмах, в тулейках.`,
        `Перевірити підключення лампи на призмах у тулейках.`,
        `Sprawdź podłączenie lampy na pryzmatach, w tubusach.`,
        `Check the connection of the lamp on the prisms, in the tubes.`
      ],
      [
        `На призмах P, пластиковые перегородки НЕ в нахлёст.`,
        `На призмах P, пластикові перегородки не нахльостують.`,
        `Na pryzmatach P plastikowe przegrody NIE zachodzą na siebie.`,
        `On P prisms, the plastic partitions are NOT overlapping.`
      ],
      [
        `На призмах P, металлические перегородки заземлены специальной выгнутой пластинкой.`,
        `На призмі P металеві перегородки заземлені попередньо вигнутою пластиною.`,
        `Na pryzmacie P metalowe przegrody są uziemione za pomocą wstępnie zakrzywionej płyty.`,
        `On the prism P, the metal partitions are grounded by a pre-bent plate.`
      ],
      [
        `На призмах P, зуги всегда крючком к клиенту.`,
        `На призмах P, зуги завжди є гачком до клієнта.`,
        `Na pryzmatach P zugi są zawsze szydełkowane w kierunku klienta.`,
        `On P prisms, the zugs are always hooked towards the client.`
      ],
      [
        `На призмах P на зугах до 16мм должна быть зуга заземления.`,
        `На призмах P на зугах до 16мм має бути зуга заземлення.`,
        `W przypadku pryzmatów P na krawędziach do 16 mm musi znajdować się pętla uziemiająca.`,
        `On prisms P on grooves up to 16 mm there must be a ground groove.`
      ],
      [
        `Если торы запитаны автоматом на 400А, то отводы 6мм должны быть Штудером.`,
        `Якщо тори запитані автоматично на 400А, то відведення 6мм мають бути Штудером.`,
        `Jeśli tori są zasilane przez wyłącznik automatyczny 400A, wówczas krany 6mm powinny być typu Studer.`,
        `If the toroids are powered by a 400A circuit breaker, then the 6mm taps must be Studer.`
      ],
      [
        `Призма. Короткие болты вверху и внизу держат лицевую панель.`,
        `Призма. Короткі болти вгорі та внизу тримають лицьову панель.`,
        `Pryzmat. Krótkie śruby u góry i u dołu utrzymują płytę czołową na miejscu.`,
        `Prism: Short bolts at the top and bottom hold the faceplate in place.`
      ],
      [
        `Проверка тока шин Linergy, INS, NSX`,
        `Перевірка струму шин Linergy, INS, NSX`,
        `Sprawdzenie prądu magistrali Linergy, INS, NSX`,
        `Checking the current of Linergy, INS, NSX buses`
      ],
      [
        `Проверка мест подключения мультиклипов, не выломаны квадратные пластики.`,
        `Перевірка місць підключення мультикліпів, чи не виламані квадратні пластики.`,
        `Sprawdzenie punktów połączeń multiklipsów pod kątem pęknięć kwadratowych plastików.`,
        `Checking the connection points of the multi-clips, the square plastics are not broken.`
      ],
      [
        `На всех колодках есть боковая крышка`,
        `На всіх колодках є бічна кришка`,
        `Wszystkie podkładki posiadają boczną osłonę`,
        `All pads have a side cover.`
      ],
      [
        `Красная наклейка над автоматом от лампочек:"STEEDS ONDER SPANNING  ..."`,
        `Червона наклейка над автоматом від лампочок: "STEEDS ONDER SPANNING ..."`,
        `Czerwona naklejka nad dozownikiem żarówek: „STEEDS ONDER SPANNING…”`,
        `Red sticker above the machine from the light bulbs: "STEEDS ONDER SPANNING ..."`
      ],
      [
        `Красная наклейка над главным автоматом:"HOOFDSCHAKELAR ..."`,
        `Червона наклейка над головним автоматом: "HOOFDSCHAKELAAR..."`,
        `Czerwona naklejka nad maszyną główną: „HOOFDSCHAKELAAR …”`,
        `Red sticker above the main machine: "HOOFDSCHAKELAAR ..."`
      ],
      [
        `Зуги установлены крючком вверх, с кнопкой, направленной в сторону клиента.`,
        `Зуги встановлені гачком нагору, з кнопкою, спрямованою у бік клієнта.`,
        `Zugi montuje się za pomocą zaczepu, przyciskiem skierowanym w stronę klienta.`,
        `The zugs are installed with the hook facing upwards, with the button facing the client.`
      ],
      [
        `Без напряжения проверить правильную запитку PLC и другой электроники.`,
        `Без напруги перевірити правильну запитку PLC та іншої електроніки.`,
        `Bez napięcia sprawdź, czy sterownik PLC i inna elektronika są prawidłowo zasilane.`,
        `Without voltage, check the correct power supply of the PLC and other electronics.`
      ],
      [
        `Хорошо прикручена ручка`,
        `Добре прикручена ручка`,
        `Uchwyt jest dobrze przykręcony`,
        `The handle is screwed on well.`
      ],
      [
        `<div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
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
`,
        `<div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
  <h2 style="text-align: center; color: #0066cc; margin-bottom: 20px;">Налаштування лічильника PM5300</h2>
  <p>Опції перегортаються <strong>правою кнопкою</strong> під екраном, стрілкою вправо. Натискаючи праву стрілку, необхідно знайти пункт <strong>Maint</strong>. Одночасно на екрані відображаються три опції, для вибору <strong>Maint</strong> потрібно натиснути кнопку під написом.</p>
  <p>Далі:</p>
  <ol style="padding-left: 20px; margin-top: 10px; margin-bottom: 20px;">
    <li>Виберіть <strong>Setup</strong>.</li>
    <li>На екрані з’явиться поле для введення пароля (з нулями). Нічого не вводимо, просто натискаємо <strong>OK</strong>.</li>
    <li>Виберіть <strong>Meter</strong>, потім <strong>Basic</strong>.</li>
  </ol>
  <p>Таким чином, ви потрапите в меню налаштувань лічильника. Щоб задати параметри:</p>
  <ul style="padding-left: 20px; margin-top: 10px; margin-bottom: 20px;">
    <li>Знайдіть параметр <strong>CT Primary</strong> для задання високого параметра трансформатора струму.</li>
    <li>Знайдіть параметр <strong>CT Secondary</strong> для налаштування малого параметра.</li>
  </ul>

  <h2 style="text-align: center; color: #0066cc; margin-bottom: 20px;">Перевірка лічильника</h2>
  <p>Перебуваючи в режимі роботи, на головній сторінці, перегортайте підпункти і шукайте <strong>I - сила струму</strong>. Відкрийте цю позицію і, навантаживши фази, перевірте силу струму.</p>
  <p><strong>Важливо:</strong> величина повинна бути додатною. Якщо це не так, трансформатор струму підключений неправильно.</p>
</div>
`,
        `<div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
  <h2 style="text-align: center; color: #0066cc; margin-bottom: 20px;">Konfiguracja licznika PM5300</h2>
  <p>Opcje można przeglądać <strong>prawym przyciskiem</strong> pod ekranem, strzałką w prawo. Naciskając prawą strzałkę, należy znaleźć opcję <strong>Maint</strong>. Na ekranie wyświetlane są jednocześnie trzy opcje, aby wybrać <strong>Maint</strong>, należy nacisnąć przycisk pod napisem.</p>
  <p>Dalej:</p>
  <ol style="padding-left: 20px; margin-top: 10px; margin-bottom: 20px;">
    <li>Wybierz <strong>Setup</strong>.</li>
    <li>Na ekranie pojawi się pole do wprowadzenia hasła (z zerami). Nic nie wprowadzaj, po prostu naciśnij <strong>OK</strong>.</li>
    <li>Wybierz <strong>Meter</strong>, a następnie <strong>Basic</strong>.</li>
  </ol>
  <p>W ten sposób trafisz do menu konfiguracji licznika. Aby ustawić parametry:</p>
  <ul style="padding-left: 20px; margin-top: 10px; margin-bottom: 20px;">
    <li>Znajdź parametr <strong>CT Primary</strong>, aby ustawić wysoki parametr przekładnika prądowego.</li>
    <li>Znajdź parametr <strong>CT Secondary</strong>, aby skonfigurować niski parametr.</li>
  </ul>

  <h2 style="text-align: center; color: #0066cc; margin-bottom: 20px;">Sprawdzanie licznika</h2>
  <p>Będąc w trybie pracy, na stronie głównej, przeglądaj podpunkty i szukaj <strong>I - natężenie prądu</strong>. Otwórz tę pozycję i obciążając fazy, sprawdź natężenie prądu.</p>
  <p><strong>Ważne:</strong> wartość powinna być dodatnia. Jeśli tak nie jest, przekładnik prądowy jest podłączony nieprawidłowo.</p>
</div>
`,
        `<div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
  <h2 style="text-align: center; color: #0066cc; margin-bottom: 20px;">PM5300 Meter Configuration</h2>
  <p>The options can be browsed using the <strong>right button</strong> below the screen, by pressing the right arrow. To select the <strong>Maint</strong> option, press the button located directly under the text "Maint" on the screen. (Note: Only three options are displayed on the screen at a time.)</p>
  <p>Next steps:</p>
  <ol style="padding-left: 20px; margin-top: 10px; margin-bottom: 20px;">
    <li>Select <strong>Setup</strong>.</li>
    <li>A password input screen will appear (initially filled with zeros). Do not enter anything; simply press <strong>OK</strong>.</li>
    <li>Choose <strong>Meter</strong>, then <strong>Basic</strong>.</li>
  </ol>
  <p>By following these steps, you will enter the meter configuration menu. To set the required parameters:</p>
  <ul style="padding-left: 20px; margin-top: 10px; margin-bottom: 20px;">
    <li>Locate the <strong>CT Primary</strong> parameter to configure the high value of the current transformer.</li>
    <li>Locate the <strong>CT Secondary</strong> parameter to configure the low value of the transformer.</li>
  </ul>

  <h2 style="text-align: center; color: #0066cc; margin-bottom: 20px;">Meter Verification</h2>
  <p>While in operating mode, on the main screen, browse through the submenus and find <strong>I - current strength</strong>. Open this option and load the phases to check the current strength.</p>
  <p><strong>Important:</strong> The value should be positive. If not, the current transformer is incorrectly connected.</p>
  <p style="font-style: italic; color: #555; margin-top: 20px;">Note: Ensure that all connections and settings comply with the manufacturer's guidelines and safety protocols to avoid equipment damage or inaccurate measurements.</p>
</div>
`
      ],
      [
        `Пластиковые перегородки между реле-реле, реле-оборудование.`,
        `Пластикові перегородки між реле-реле, реле-обладнання.`,
        `Przegrody plastikowe pomiędzy przekaźnikami-przekaźnikami, urządzeniami-przekaźnikami.`,
        `Plastic partitions between relay-relay, relay-equipment.`
      ],
      [
        `<h2>*****Электрика*****</h2>`,
        `<h2>*****Електрика*****</h2>`,
        `<h2>*****Elektryczne*****</h2>`,
        `<h2>*****Electrics*****</h2>`
      ],
      [
        `<h2>*****Механика*****</h2>`,
        `<h2>*****Механіка*****</h2>`,
        `<h2>*****Mechanika*****</h2>`,
        `<h2>*****Mechanics*****</h2>`
      ],
      [
        `<h2>*****ВНЕШНИЙ ОСМОТР*****</h2>`,
        `<h2>*****ЗОВНІШНІЙ ОГЛЯД*****</h2>`,
        `<h2>*****INSPEKCJA ZEWNĘTRZNA*****</h2>`,
        `<h2>*****EXTERNAL INSPECTION*****</h2>`
      ],
      [
        `Зеленые BUS-бары, проверить чтобы тулейка выходила сверху и не зажимался пластик.`,
        `Зелені BUS-бари, перевірити, щоб тулейка виходила зверху і не затискався пластик.`,
        `Zielone listwy BUS, sprawdź czy tiul wychodzi od góry i czy plastik nie jest zaciśnięty.`,
        `Green BUS bars, check that the connector comes out from the top and the plastic is not pinched.`
      ],
      [
        `Стягивающие шкаф бляхи внизу прикручены на один винт по середине.`,
        `Стягуючи шафу бляхи внизу прикручені на один вінт посередині.`,
        `Płytki łączące szafkę od dołu są przykręcone jednym elementem pośrodku.`,
        `The plates that hold the cabinet together at the bottom are screwed on with one twist in the middle.`
      ],
      [
        `Призма: прикручены все винты на пластиковых уголках. Углы - подставки под лицевую панель.`,
        `Призма: прикручені усі гвинти на пластикових куточках. Кути – підставки під лицьову панель.`,
        `Pryzmat: wszystkie śruby na plastikowych narożnikach są przykręcone. Narożniki stanowią podstawki pod panel przedni.`,
        `Prism: all screws are screwed on the plastic corners. The corners are supports for the front panel.`
      ],
        [
            `Заклепки на дверях и других элементах не повреждены.`,
            `Заклепки на дверях та інших елементах не пошкоджені.`,
            `Nity na drzwiach i pozostałych elementach są nienaruszone.`,
            `The rivets on the doors and other elements are not damaged.`
        ],
        [
            `Экраны всех экранированных кабелей подключены на землю.`,
            `Екрани всіх кабелів, що екрануються, підключені на землю.`,
            `Ekrany wszystkich kabli ekranowanych są uziemione.`,
            `The shields of all shielded cables are connected to ground.`
        ],
        [
            `Медные шайбы на красных шинах где сечение провода меньше 25 мм.`,
            `Мідні шайби на червоних шинах, де перетин дроту менше 25 мм.`,
            `Podkładki miedziane na czerwonych szynach zbiorczych, gdzie przekrój drutu jest mniejszy niż 25 mm.`,
            `Copper washers on red buses where the wire cross-section is less than 25 mm.`
        ],
        [
            `Проверить наличие контактных шайб где заземление на краске.`,
            `Перевірити наявність контактних шайб, де заземлення на фарбі.`,
            `Sprawdź obecność podkładek kontaktowych w miejscach, w których znajduje się masa na lakierze.`,
            `Check for contact washers where the ground is on the paint.`
        ],
        [
            `Дополнительная визуальная проверка N и F1, F2, F3 вверх-низ`,
            `Додаткова візуальна перевірка N та F1, F2, F3 вгору-низ`,
            `Dodatkowa kontrola wzrokowa N i F1, F2, F3 w górę i w dół`,
            `Additional visual check N and F1, F2, F3 up-down`
        ],
        [
            `Номерки на всех дополнительных коммуникационных устройствах: разделители LAN, USB ...`,
            `Номери на всіх додаткових комунікаційних пристроях: роздільники LAN, USB...`,
            `Numery na wszystkich dodatkowych urządzeniach komunikacyjnych: rozdzielacze LAN, USB...`,
            `Numbers on all additional communication devices: LAN separators, USB ...`
        ],
        [
            'Номерки на всех кабелях типа LAN и других информационных',
            'Номери на всіх кабелях типу LAN та інших інформаційних',
            'Numery na wszystkich kablach typu LAN i inne informacje',
            'Numbers on all LAN and other information cables'
        ],
        [
            `<div class="card" style="max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #dee2e6;">
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
`,
            `<div class="card" style="max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #dee2e6;">
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
`,
            `<div class="card" style="max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #dee2e6;">
  <div class="card-body">
    <h5 class="card-title" style="font-weight: bold;">Ustawienia timera EBECO EB-Therm 800</h5>
    
    <h6 class="card-subtitle mb-2 text-muted">Sterowanie:</h6>
    <ul class="list-group list-group-flush" style="margin-bottom: 15px;">
      <li class="list-group-item" style="border: 0; padding-left: 0;">
        <strong>Boczne strzałki</strong> — przyciski do przewijania menu lub zmiany danych.
      </li>
      <li class="list-group-item" style="border: 0; padding-left: 0;">
        <strong>Środkowy przycisk</strong> wybiera aktywną opcję menu lub zatwierdza wartość.
      </li>
    </ul>
    
    <h6 class="card-subtitle mb-2 text-muted">Tryb przeglądania ustawień</h6>
    <p class="card-text" style="margin-bottom: 15px;">
      To proste przewijanie strzałkami podczas uruchamiania urządzenia lub wychodzenia z menu ustawień.
    </p>
    
    <p class="card-text" style="margin-bottom: 15px;">
      Timer współpracuje z dwoma czujnikami. Jeśli używany jest tylko jeden czujnik, drugi należy wyłączyć w ustawieniach.
    </p>
    
    <h6 class="card-subtitle mb-2 text-muted">Wejście do menu ustawień:</h6>
    <ul class="list-group list-group-flush" style="margin-bottom: 15px;">
      <li class="list-group-item" style="border: 0; padding-left: 0;">
        Naciśnij środkowy przycisk, aż pojawi się <code>"main menu"</code>.
      </li>
    </ul>
    
    <h6 class="card-subtitle mb-2 text-muted">Niektóre pozycje menu:</h6>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" style="border: 0; padding-left: 0;">
        <strong>Exit</strong> — wyjście z menu.
      </li>
      <li class="list-group-item" style="border: 0; padding-left: 0;">
        <strong>TEMP</strong> — wejście do menu ustawień temperatury.
        <ul>
          <li>Set Temp — strzałkami ustaw temperaturę, którą termostat ma utrzymać.</li>
        </ul>
      </li>
      <li class="list-group-item" style="border: 0; padding-left: 0;">
        <strong>System-Sensor</strong> — ustawienia kombinacji czujników. Na przykład, przy jednym czujniku wybierz opcję <code>A-Room, B-off</code>.
      </li>
    </ul>
    
    <p class="card-text" style="margin-top: 15px;">
      System wprowadza zmiany po wyjściu z edytowanego menu.
    </p>
  </div>
</div>
`,
            `<div class="card" style="max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #dee2e6;">
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
</div>
`
        ],
        [
            'Проверка под электричеством',
            'Перевірка під електрикою',
            'Próba elektryczna',
            'Testing under electricity'
        ],
        [
            `
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
`,
            `<h4>Налаштування лічильника iEM3255</h4>
 Натисніть і утримуйте OK та ESC до появи полів введення пароля.
 Пароль вводиться за однією цифрою.
 V – збільшує поточну цифру на один.
 OK - введення наступної цифри.
 Після введення останньої цифри лічильник сам входить у режим настройки.
 Пароль 0010. Спроб на введення – 5 (ймовірно, але краще не перевіряти).
 У режимі налаштувань V гортає розділи, OK входить до поточного розділу.
 CT&VT - Розділ для вказівки типу трансформатора струму.
 CT Secondary - вказує нижній параметр, якщо трансформатор 120/5, сюди вводиться 5.
 CT Primary – вказує верхній параметр, у даному прикладі – це 120.
 ..Перевірка.
 Для перевірки лічильника слід натискати кнопку V без входу в меню налаштувань, вибравши пункт V & I або P, Q, & S.
 На VMA використовується нагрівач потужністю 8,4 ампера при 220 вольтах.
 При вході до розділу V&I можна переглянути напругу мережі, частоту мережі та силу струму на кожній фазі.
 Тому вибрати фазу 1 і підключити нагрівач на фазу 1 якщо покаже 8,4 ампера, то все працює.
 Також перевірити інші фази. У прикладі нагрівач VMA.`,
            `<h4>Konfiguracja licznika iEM3255</h4>
 Naciśnij i przytrzymaj przyciski OK i ESC, aż pojawią się pola do wpisania hasła.
 Hasło jest wprowadzane jedną cyfrą na raz.
 V - zwiększa aktualną cyfrę o jeden.
 OK - przechodzi do wpisania kolejnej cyfry.
 Po wpisaniu ostatniej cyfry miernik sam wchodzi w tryb konfiguracji.
 Hasło 0010. Próby wejścia - 5 (prawdopodobnie, ale lepiej nie sprawdzać).
 W trybie ustawień V przewija sekcje, OK powoduje przejście do bieżącej sekcji.
 CT i VT – Sekcja wskazująca typ przekładnika prądowego.
 CT Secondary - wskazuje dolny parametr, jeśli transformator ma wartość 120/5, to tutaj wprowadza się 5.
 CT Primary - wskazuje najwyższy parametr, w tym przykładzie jest to 120.
 ..Badanie.
 Aby sprawdzić licznik należy wcisnąć przycisk V bez wchodzenia do menu ustawień wybierając V&I lub P,Q,&S.
 VMA wykorzystuje grzejnik 8,4 A przy napięciu 220 woltów.
 Wchodząc do sekcji V & I, możesz zobaczyć napięcie sieciowe, częstotliwość sieci i prąd na każdej fazie.
 Dlatego wybierz fazę 1 i podłącz grzałkę do fazy 1, jeśli pokazuje 8,4 ampera, to wszystko działa.
 Sprawdź także pozostałe fazy. W przykładzie grzejnik jest w trybie VMA.`,
            `<h4>Configuring the iEM3255 meter</h4>
Press and hold the OK and ESC buttons until the password entry fields appear.
The password is entered one digit at a time.
V - increases the current digit by one.
OK - proceeds to entering the next digit.
After entering the last digit, the meter automatically enters the setup mode.
Password 0010. Input attempts - 5 (probably, but it is better not to check).
In the setup mode, V scrolls through the sections, OK enters the current section.
CT & VT - Section for specifying the type of current transformer.
CT Secondary - specifies the lower parameter, if the transformer is 120/5, then 5 is entered here.
CT Primary - specifies the upper parameter, in this example it is 120.
..Checking.
To check the meter, press the V button without entering the settings menu, selecting the V & I or P, Q, & S item.
The VMA uses a heater with a power of 8.4 amperes at 220 volts.
When entering the V & I section, you can see the network voltage, network frequency and current strength in each phase.
Therefore, select phase 1 and connect the heater to phase 1, if it shows 8.4 amperes, then everything works.
Also check the other phases. In the example, the heater is in the VMA.`
        ],
        [
            'Подключение проводов. D1+ - Коричневый. В0- - Белый. 0V - Жёлтый. SH - Экран.',
            'Підключення дротів. D1+ - Коричневий. В0 - Білий. 0V - Жовтий. SH – Екран.',
            'Podłączanie przewodów. D1+ - Brązowy. B0- - Biały. 0 V – żółty. SH – Ekran.',
            'Connecting the wires. D1+ - Brown. B0- - White. 0V - Yellow. SH - Screen.'
        ],
        [
            'Нет касания проводов на корпус.',
            'Немає торкання дротів на корпус.',
            'Żadnych przewodów dotykających korpusu.',
            'No wires touching the body.'
        ],
        [
            'Лицевая панель на призмах',
            'Лицьова панель на призмах',
            'Panel przedni na pryzmatach',
            'Front panel on prisms'
        ],
        [
            'Закрутить все винты',
            'Закрутити всі гвинти',
            'Dokręć wszystkie śruby',
            'Tighten all screws'
        ],
        [
            'Гайка металлическая с резьбой М12 затягивается моментом в 70 ньютон.',
            'Гайка металева з різьбленням М12 затягується моментом 70 ньютон.',
            'Metalową nakrętkę z gwintem M12 dokręca się momentem obrotowym 70 Newtonów.',
            'The metal nut with M12 thread is tightened with a torque of 70 Newton.'
        ],
        [
            'Гайка металлическая с резьбой М10 затягивается моментом в 50 ньютон.',
            'Гайка металева з різьбленням М10 затягується моментом 50 ньютон.',
            'Metalową nakrętkę z gwintem M10 dokręca się momentem obrotowym 50 Newtonów.',
            'The metal nut with M10 thread is tightened with a torque of 50 Newton.'
        ],
        [
            'Результат поиска',
            'Результат пошуку',
            'Wynik wyszukiwania',
            'Search result'
        ],
        [
            'Название проекта',
            'Назва проекту',
            'Nazwa projektu',
            'Project name'
        ],
        [
            'Правильная установка названия шкафа',
            'Правильне встановлення назви шафи',
            'Prawidłowe ustawienie nazwy szafki',
            'Correct installation of the cabinet name'
        ],
        [
            'Цвет гравировки данные',
            'Дані кольорового гравіювання',
            'Color grawerki dane',
            'Color engraving data'
        ],
        [
            'Названия кнопок, счётчиков, включателей',
            'Назви кнопок, лічильників, вимикачів',
            'Nazwy przycisków, liczników, przełączników',
            'Names of buttons, counters, switches'
        ],
        [
            'Тип питания, под напряжением, опасно',
            'Тип живлення, під напругою, небезпечно',
            'Rodzaj zasilania, pod napięciem, pioruny',
            'Power type, under voltage, dangerous'
        ],
        [
            'Проверка повреждений',
            'Перевірка пошкоджень',
            'Sprawdzanie uszkodzeń',
            'Checking for damage'
        ],
        [
            'Сборка шкафа и недостатки',
            'Складання шафи та недоліки',
            'Poskręcanie szafy i braki',
            'Cabinet assembly and disadvantages'
        ],
        [
            'Проверка вкладыша замка (в проекте)',
            'Перевірка вкладки замку (у проекті)',
            'Sprawdzenie wkładki zamka (w projekcie)',
            'Checking the lock insert (in the project)'
        ],
        [
            'Ключи в шкафу',
            'Ключі у шафі',
            'Klucze w szafie',
            'The keys are in the closet'
        ],
        [
            'Кабельные наконечники для клиента и Helawia',
            'Кабельні наконечники для клієнта i Helawia',
            'Końcówki dla klienta i Helawia',
            'Cable lugs for the customer and Helawia'
        ],
        [
            'Проверка комплектации шкафа согласно схеме',
            'Перевірка комплектації шафи згідно зі схемою',
            'Sprawdzenie ukladu szafy zgodnie ze schematem',
            'Checking the cabinet configuration according to the diagram'
        ],
        [
            'Названия и моменты на оборудовании',
            'Назви та моменти на устаткуванні',
            'Nazwy i momenty na sprzęcie',
            'Names and moments on the equipment'
        ],
        [
            'Соответствие Граверок с оборудованием',
            'Відповідність Граверок з обладнанням',
            'Zgodność grawerów ze sprzętem',
            'Compliance of Engravers with Equipment'
        ],
        [
            'Полное описание всех зуг и прочих колодок',
            'Повний опис всіх зуг та інших колодок',
            'Kompletnosc opisu zlanczek oraz listw',
            'Full description of all ZUG and other pads'
        ],
        [
            'Наличие предупреждающих наклеек, L1, L2, L3, N, PE, на бусбарах/под напряжением',
            'Наявність попереджувальних наклейок, L1, L2, L3, N, PE, на бусбарах/під напругою',
            'Obecność naklejek ostrzegawczych L1, L2, L3, N, PE, na busbarach/pod napięciem',
            'Presence of warning stickers, L1, L2, L3, N, PE, on busbars/under voltage'
        ],
        [
            'Порядок фаз: N, L1, L2, L3',
            'Порядок фаз: N, L1, L2, L3. Найвище становище N',
            'Kolejność faz: N, L1, L2, L3. Najwyższa pozycja N',
            'Phase order: N, L1, L2, L3. The highest position N'
        ],
        [
            'Наличие всех наклеек',
            'Наявність усіх наклейок',
            'Dostępne wszystkie naklejki',
            'All stickers are present'
        ],
        [
            'Список нехватки WS3 на дверях.',
            'Список нестачі WS3 на дверях.',
            'Lista braków WS3 na drzwiach.',
            'WS3 door shortage list.'
        ],
        [
            'Соответствующая длина тулеек',
            'Відповідна довжина тулубок',
            'Odpowiednia długość tulejek',
            'The appropriate length of the crowns'
        ],
        [
            'Правильное и в полном объеме подключение заземлений PE.',
            'Правильне та у повному обсязі підключення заземлень PE.',
            'Prawidłowe i kompletne podłączenie uziemienia PE.',
            'Correct and complete connection of PE grounding.'
        ],
        [
            'Наклейки елочки на всех заземленных элементах',
            'Наклейки ялинки на всіх заземлених елементах',
            'Naklejki choinkowe na wszystkie uziemione elementy',
            'Christmas tree stickers on all grounded elements'
        ],
        [
            'Красный лак на главном включателе, на всех бусбарах и элементах под шестигранник',
            'Червоний лак на головному вмикачі, на всіх бусбарах та елементах під шестигранник',
            'Czerwony lakier na wyłączniku głównym, na busbarach i zatiskach pod imbus',
            'Red varnish on the main switch, on all the busbars and allen keys'
        ],
        [
            'Красный лак на соединениях заземляющих шин и нулевых, на заземлении главной плиты',
            'Червоний лак на з\'єднаннях шин і нульових заземлюючих, на заземленні головної плити',
            'Czerwony lakier na połączeniach listw uziemiających i listw N, na uziemieniu płyty głównej',
            'Red varnish on the connections of the busbar and neutral, on the grounding of the main plate'
        ],
        [
            'Монтаж и подключение главной запитки',
            'Монтаж та підключення головної запитки',
            'Montaż i podłączenie głównego zasilania',
            'Installation and connection of the main power supply'
        ],
        [
            'Очередность фаз',
            'Черговість фаз',
            'Kolejność faz',
            'Sequence of phases'
        ],
        [
            'Соответствие сечений и цветов проводов',
            'Відповідність перерізів та кольорів проводів',
            'Zgodność przekrojów przewodów i kolorów',
            'Correspondence of wire cross-sections and colors'
        ],
        [
            'Укомплектованость описания проводов и правильное направление',
            'Укомплектованість опису проводів та правильний напрямок',
            'Kompletność opisów przewodów i prawidłowy kierunek',
            'Completeness of the wire description and correct direction'
        ],
        [
            'Правильное размещение проводов в зугах и тулейках',
            'Правильне розміщення проводів у зугах та тулейках',
            'Prawidłowe ułożenie przewodów w zugach i tulejkach',
            'Correct placement of wires in connectors and tubulars'
        ],
        [
            'Тулейки в зажимах слева-снизу или справа-сверху от винта',
            'Тулійки в затискачах зліва-знизу або праворуч-зверху від гвинта',
            'Tuleye w zaciskach po lewej stronie u dołu lub po prawej u góry śruby',
            'The connectors are in the clamps to the left-bottom or to the right-top of the screw'
        ],
        [
            'Проверка настроек настраиваемых приборов',
            'Перевірка налаштувань настроюваних приладів',
            'Sprawdzanie ustawień konfigurowalnych urządzeń',
            'Checking the settings of configurable devices'
        ],
        [
            'Жёсткие мосты над включателями затянуты, по концам не торчит медь, описаны фазы.',
            'Жорсткі мости над вмикачами затягнуті, по кінцях не стирчить мідь, описані фази.',
            'Sztywne mostki nad przełącznikami są dokręcone, na końcach nie wystająca miedź, fazy są opisane.',
            'The rigid bridges above the switches are tightened, there is no copper sticking out at the ends, the phases are described.'
        ],
        [
            'Чистота в шкафу',
            'Чистота у шафі',
            'Czystość w szafie',
            'Cleanliness in the closet'
        ],
    ];
}
