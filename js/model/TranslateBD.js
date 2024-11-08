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
