// Статический класс содержит методы для чтения и записи 
// массива с данными записной книжки.
// SyncDataArray.dataArray как геттер всегда читает данные из хранилища
// SyncDataArray.dataArray как сеттер сохраняет в статической переменной
// информацию.
// Отдельная функция SyncDataArray.saveArray() записывает массив в хранилище
// данные записанные в записной книжке
// Добавлен функционал для Электриков

class SyncDataArray extends Translate
{
    static #dataArray = JSON.parse(localStorage.getItem('amatorDed_notePad_Data'));
    static #arrayVmaTester = [];
    static #arrayCabinet = [];
    static #dataTime;

    static get dataArray()
    {
        if (this.#dataArray === null) return [];
        return this.#dataArray;
    }

    static set dataArray(property)
    {
        this.#dataArray = property;
    }

    static saveArray(nameArray = 'amatorDed_notePad_Data')
    {
        localStorage.setItem(nameArray, JSON.stringify(this.#dataArray));
    }

    static loadArray(nameArray = 'amatorDed_notePad_Data')
    {
        this.#dataArray = JSON.parse(localStorage.getItem(nameArray));
    }

    static createNewStorage(str)
    {
        // создает страницу с текстом если в строке есть /vma
        str = str.replace(/\/vma/gi, '');
        str = str.trim();
        // поместить массив для тестера на место записной книги
        this.dataArray = this.createNewTest(str);
        this.saveArray();
    }

    static createNewCabitet(str)
    {
        // создает страницу с текстом если в строке есть /cabinet
        str = str.replace(/\/cabinet/gi, '');
        str = str.trim();
        // поместить массив для 'Електрика' на место записной книги
        this.dataArray = this.createNewArrayCabinet(str);
        this.saveArray(); 
    }

    static returnTheNoteBook()
    {
        // Сохранить текущий массив во временный буферный
        this.saveArray('b_temp_amatorDed_notePad_Data');
        // обновить массив записной книги
        this.loadArray('temp_amatorDed_notePad_Data');
        // поместить массив записной книги во временную переменную
        this.#dataTime = this.dataArray;
        // загрузить массив из буфера
        this.loadArray('b_temp_amatorDed_notePad_Data');
        // записать массив бывший в буфере в массив tmp
        this.saveArray('temp_amatorDed_notePad_Data');
        // вернуть рабочий массив из временной переменной в рабочую
        this.dataArray = this.#dataTime;
        // записать рабочий массив в локалсторадж
        this.saveArray();
    }

    static createNewTest(str)
    {
        // this.#arrayVmaTester = [];
        this.#arrayVmaTester.push(Translate.translate('Название проекта')+' : '+str);
        this.#arrayVmaTester.push(Translate.translate('Правильная установка названия шкафа'));
        this.#arrayVmaTester.push(Translate.translate('Название шкафа соответствует названию на наклейке со штрих-кодом.'));
        this.#arrayVmaTester.push(Translate.translate('Цвет гравировки данные'));
        this.#arrayVmaTester.push(Translate.translate('Названия кнопок, счётчиков, включателей'));
        this.#arrayVmaTester.push(Translate.translate('Тип питания, под напряжением, опасно'));
        this.#arrayVmaTester.push(Translate.translate('Проверка повреждений'));
        this.#arrayVmaTester.push(Translate.translate('Сборка шкафа и недостатки'));
        this.#arrayVmaTester.push(Translate.translate('Лицевая панель на призмах'));
        this.#arrayVmaTester.push(Translate.translate('Нет касания проводов на корпус.'));
        this.#arrayVmaTester.push(Translate.translate('Проверка вкладыша замка (в проекте)'));
        this.#arrayVmaTester.push(Translate.translate('Ключи в шкафу'));
        this.#arrayVmaTester.push(Translate.translate('Кабельные наконечники для клиента и Helawia'));
        this.#arrayVmaTester.push(Translate.translate('Названия и моменты на оборудовании'));
        this.#arrayVmaTester.push(Translate.translate('Соответствие Граверок с оборудованием'));
        this.#arrayVmaTester.push(Translate.translate('Полное описание всех зуг и прочих колодок'));
        this.#arrayVmaTester.push(Translate.translate('Наличие предупреждающих наклеек, L1, L2, L3, N, PE, на бусбарах/под напряжением'));
        this.#arrayVmaTester.push(Translate.translate('Linergy, INS, NSX(rowniez pod oslonami) sprawdzenie oslon'));
        this.#arrayVmaTester.push(Translate.translate('Присутствие красных граверек на главном включателе, освещения, и перенапряжения'));
        this.#arrayVmaTester.push(Translate.translate('Наличие всех наклеек'));
        this.#arrayVmaTester.push(Translate.translate('Список нехватки WS3 на дверях.'));
        this.#arrayVmaTester.push(Translate.translate('Соответствующая длина тулеек'));
        this.#arrayVmaTester.push(Translate.translate('Правильное и в полном объеме подключение заземлений PE.'));
        this.#arrayVmaTester.push(Translate.translate('Проверить наличие контактных шайб где заземление на краске.'));
        this.#arrayVmaTester.push(Translate.translate('Медные шайбы на красных шинах где сечение провода меньше 25 мм.'));
        this.#arrayVmaTester.push(Translate.translate('Красный лак на главном включателе, на всех бусбарах и элементах под шестигранник'));
        this.#arrayVmaTester.push(Translate.translate('Красный лак на соединениях заземляющих шин и нулевых, на заземлении главной плиты'));
        this.#arrayVmaTester.push(Translate.translate('Монтаж и подключение главной запитки'));
        this.#arrayVmaTester.push(Translate.translate('Укомплектованость описания проводов и правильное направление'));
        this.#arrayVmaTester.push(Translate.translate('Номерки на всех дополнительных коммуникационных устройствах: разделители LAN, USB ...'));
        this.#arrayVmaTester.push(Translate.translate('Номерки на всех кабелях типа LAN и других информационных'));
        this.#arrayVmaTester.push(Translate.translate('Правильное размещение проводов в зугах и тулейках'));
        this.#arrayVmaTester.push(Translate.translate('Тулейки в зажимах слева-снизу или справа-сверху от винта'));
        this.#arrayVmaTester.push(Translate.translate('Порядок фаз: N, L1, L2, L3'));
        this.#arrayVmaTester.push(Translate.translate('Проверка настроек настраиваемых приборов'));
        this.#arrayVmaTester.push(Translate.translate('Жёсткие мосты над включателями затянуты, по концам не торчит медь, описаны фазы.'));
        this.#arrayVmaTester.push(Translate.translate('Очередность фаз'));
        this.#arrayVmaTester.push(Translate.translate('Проверка комплектации шкафа согласно схеме'));
        this.#arrayVmaTester.push(Translate.translate('Соответствие сечений и цветов проводов'));
        this.#arrayVmaTester.push(Translate.translate('Проверка под электричеством'));
        this.#arrayVmaTester.push(Translate.translate('Дополнительная визуальная проверка N и F1, F2, F3 вверх-низ'));
        this.#arrayVmaTester.push(Translate.translate('Закрутить все винты'));
        this.#arrayVmaTester.push(Translate.translate('Чистота в шкафу'));
        this.#arrayVmaTester.push('***************************************');
        return this.#arrayVmaTester;
    }

    static createNewArrayCabinet(str)
    {
        // this.#arrayCabinet = [];
        this.#arrayCabinet.push(Translate.translate('Название проекта')+' : '+str);
        this.#arrayCabinet.push(Translate.translate('пункт 1')+' : '+str);
        this.#arrayCabinet.push(Translate.translate('Правильная установка названия шкафа'));
        this.#arrayCabinet.push(Translate.translate('Название шкафа соответствует названию на наклейке со штрих-кодом.'));
        this.#arrayCabinet.push(Translate.translate('Цвет гравировки данные'));
        this.#arrayCabinet.push(Translate.translate('Названия кнопок, счётчиков, включателей'));
        this.#arrayCabinet.push(Translate.translate('Тип питания, под напряжением, опасно'));
        this.#arrayCabinet.push(Translate.translate('Проверка повреждений'));
        this.#arrayCabinet.push(Translate.translate('Сборка шкафа и недостатки'));
        this.#arrayCabinet.push(Translate.translate('Лицевая панель на призмах'));
        this.#arrayCabinet.push(Translate.translate('Нет касания проводов на корпус.'));
        this.#arrayCabinet.push(Translate.translate('Проверка вкладыша замка (в проекте)'));
        this.#arrayCabinet.push(Translate.translate('Ключи в шкафу'));
        this.#arrayCabinet.push(Translate.translate('Кабельные наконечники для клиента и Helawia'));
        this.#arrayCabinet.push(Translate.translate('Названия и моменты на оборудовании'));
        this.#arrayCabinet.push(Translate.translate('Соответствие Граверок с оборудованием'));
        this.#arrayCabinet.push(Translate.translate('Полное описание всех зуг и прочих колодок'));
        this.#arrayCabinet.push(Translate.translate('Наличие предупреждающих наклеек, L1, L2, L3, N, PE, на бусбарах/под напряжением'));
        this.#arrayCabinet.push(Translate.translate('Linergy, INS, NSX(rowniez pod oslonami) sprawdzenie oslon'));
        this.#arrayCabinet.push(Translate.translate('Присутствие красных граверек на главном включателе, освещения, и перенапряжения'));
        this.#arrayCabinet.push(Translate.translate('Наличие всех наклеек'));
        this.#arrayCabinet.push(Translate.translate('Список нехватки WS3 на дверях.'));
        this.#arrayCabinet.push(Translate.translate('Соответствующая длина тулеек'));
        this.#arrayCabinet.push(Translate.translate('Правильное и в полном объеме подключение заземлений PE.'));
        this.#arrayCabinet.push(Translate.translate('Проверить наличие контактных шайб где заземление на краске.'));
        this.#arrayCabinet.push(Translate.translate('Медные шайбы на красных шинах где сечение провода меньше 25 мм.'));
        this.#arrayCabinet.push(Translate.translate('Красный лак на главном включателе, на всех бусбарах и элементах под шестигранник'));
        this.#arrayCabinet.push(Translate.translate('Красный лак на соединениях заземляющих шин и нулевых, на заземлении главной плиты'));
        this.#arrayCabinet.push(Translate.translate('Монтаж и подключение главной запитки'));
        this.#arrayCabinet.push(Translate.translate('Укомплектованость описания проводов и правильное направление'));
        this.#arrayCabinet.push(Translate.translate('Номерки на всех дополнительных коммуникационных устройствах: разделители LAN, USB ...'));
        this.#arrayCabinet.push(Translate.translate('Номерки на всех кабелях типа LAN и других информационных'));
        this.#arrayCabinet.push(Translate.translate('Правильное размещение проводов в зугах и тулейках'));
        this.#arrayCabinet.push(Translate.translate('Тулейки в зажимах слева-снизу или справа-сверху от винта'));
        this.#arrayCabinet.push(Translate.translate('Порядок фаз: N, L1, L2, L3'));
        this.#arrayCabinet.push(Translate.translate('Проверка настроек настраиваемых приборов'));
        this.#arrayCabinet.push(Translate.translate('Жёсткие мосты над включателями затянуты, по концам не торчит медь, описаны фазы.'));
        this.#arrayVmaTester.push('***************************************');
        return this.#arrayCabinet;
    }
}
