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
        `Гайка металлическая с резьбой М10 затягивается моментом в 50 ньютон.`,
        `Таблиця відповідностей перерізів AWG з квадратними міліметрами`,
        `Tabela odpowiedniości przekrojów AWG z milimetrami kwadratowymi`,
        `Table of correspondences of AWG sections with square millimeters`
      ],
      [
        `Таблица соответствий сечений AWG с миллиметрами квадратными`,
        `Таблиця відповідностей перерізів AWG з квадратними міліметрами`,
        `Tabela odpowiedniości przekrojów AWG z milimetrami kwadratowymi`,
        `Table of correspondences of AWG sections with square millimeters`
      ],
      [
        `Площадь сечения (мм²)`,
        `Площа перерізу (мм²)`,
        `Powierzchnia przekroju poprzecznego (mm²)`,
        `Cross-sectional area (mm²)`
      ],
      [
        `Наклейки для недостающих приборов`,
        `Наклейки для приладів, що бракують`,
        `Naklejki na brakujące urządzenia`,
        `Stickers for missing devices`
      ],
      [
        `Призма P, двери всегда заземлены.`,
        `Призма P, двері завжди заземлені.`,
        `Prisma P, drzwi są zawsze uziemione.`,
        `Prisma P, doors are always grounded.`
      ],
      [
        `Зуги повернуты открытой частью в одну сторону - нет замыкания между ними.`,
        `Зуги повернуті відкритою частиною в один бік - немає замикання між ними.`,
        `Zugi są obracane otwartą częścią w jednym kierunku - nie ma między nimi zwarcia.`,
        `The zugs are turned with the open part in one direction - there is no short circuit between them.`
      ],
      [
        `Закрутить все винты заземлений`,
        `Закрутити всі гвинти заземлень`,
        `Dokręć wszystkie śruby uziemiające`,
        `Tighten all ground screws`
      ],
      [
        `Нормальное положение контактов NC и NO . Для проверки нормального положения контактов необходимо представить, что NO замкнётся в рабочем состоянии. То есть при включении автомата NO замыкается и УЗО в рабочем состоянии тоже замыкает NO. NC соответственно замкнут когда автомат выключается или cрабатывает УЗО.`,
        `Нормальне положення контактів NC і NO. Для перевірки нормального положення контактів необхідно уявити, що NO замкнеться у стані. Тобто при включенні автомата NO замикається і ПЗВ у робочому стані теж замикає NO. NC відповідно замкнуті коли автомат вимикається або cпрацьовує ПЗВ.`,
        `Normalne położenie styków NC i NO. Aby sprawdzić normalne położenie styków, należy wyobrazić sobie, że NO zamknie się w stanie roboczym. Oznacza to, że gdy maszyna jest włączona, NO zamyka się, a RCD w stanie roboczym również zamyka NO. NC jest odpowiednio zamykane, gdy maszyna jest wyłączona lub wyzwalany jest RCD.`,
        `Normal position of contacts NC and NO. To check the normal position of contacts, it is necessary to imagine that NO closes in the working state. That is, when the machine is turned on, NO closes and the RCD in the working state also closes NO. NC is accordingly closed when the machine is turned off or the RCD is triggered.`
      ],
      [
        `Наклейки`,
        `Наклейки`,
        `Naklejki`,
        `Stickers`
      ],
      [
        `О проекте`,
        `Про проект`,
        `O projekcie`,
        `About the project`
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
        pm5300RU(),
        pm5300UA(),
        pm5300PL(),
        pm5300EN()
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
            `Медные шайбы на красных шинах где сечение провода <= 25 мм.`,
            `Мідні шайби на червоних шинах, де перетин дроту <= 25 мм.`,
            `Podkładki miedziane na czerwonych szynach zbiorczych, gdzie przekrój drutu jest <= 25 mm.`,
            `Copper washers on red buses where wire cross-section <= 25 mm.`
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
            therm800RU(),
            therm800UA(),
            therm800PL(),
            therm800EN()
        ],
        [
            'Проверка под электричеством',
            'Перевірка під електрикою',
            'Próba elektryczna',
            'Testing under electricity'
        ],
        [iEM3255RU(),
         iEM3255UA(),
         iEM3255PL(),
         iEM3255EN()
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
            'Наклейка на дверях "Опасное напряжение"',
            'Наклейка на дверях "Небезпечна напруга"',
            'Naklejka na drzwi „Niebezpieczne napięcie”',
            'Door sticker "Dangerous Voltage"'
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
            'Достаточная длина тулеек на заземляющей шине.',
            'Достатня довжина тулеек на заземлюючій шині.',
            'Wystarczająca długość tulejek na szynie uziemiającej.',
            'Sufficient length of the sleeves on the grounding bus.'
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
