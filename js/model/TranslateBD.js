// класс содержит переводы на разные языки разных фраз

class TranslateBD
{
    static get translateArray()
    {
        return this._translateBD;
    }

    static _translateBD = [ //
        [
            '',
            '',
            '',
            ''
        ],
        [
            '',
            '',
            '',
            ''
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
            ``,
            ``,
            ``
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
            'Название шкафа соответствует названию на наклейке со штрих-кодом.',
            'Назва шафи відповідає назві на наклейці зі штрих-кодом.',
            'Nazwa szafki odpowiada nazwie na naklejce z kodem kreskowym.',
            'The name of the cabinet corresponds to the name on the barcode sticker.'
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
            'Присутствие красных граверек на главном включателе, освещения, и перенапряжения',
            'Присутність червоних граверок на головному вмикачі, освітлення, та перенапруги',
            'Obecność czerwonych znaków nad wył. głów., oświetlenie i przepięciowka',
            'The presence of red engravers on the main switch, lighting, and overvoltage'
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
