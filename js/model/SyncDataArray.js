// Статический класс содержит методы для чтения и записи 
// массива с данными записной книжки.
// SyncDataArray.dataArray как геттер всегда читает данные из хранилища
// SyncDataArray.dataArray как сеттер сохраняет в статической переменной
// информацию.
// Отдельная функция SyncDataArray.saveArray() записывает массив в хранилище
// данные записанные в записной книжке
class SyncDataArray extends Translate
{
    static #dataArray = [];
    static #arrayVmaTester = [];
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
        this.#arrayVmaTester = [];
        this.#arrayVmaTester.push(Translate.translate('Название проекта')+' : '+str);
        this.#arrayVmaTester.push(Translate.translate('Правильная установка названия шкафа'));
        this.#arrayVmaTester.push(Translate.translate('Цвет гравировки данные'));
        this.#arrayVmaTester.push(Translate.translate('Названия кнопок, счётчиков, включателей'));
        this.#arrayVmaTester.push(Translate.translate('Тип питания, под напряжением, опасно'));
        this.#arrayVmaTester.push(Translate.translate('Проверка повреждений'));
        this.#arrayVmaTester.push(Translate.translate('Сборка шкафа и недостатки'));
        this.#arrayVmaTester.push(Translate.translate('Проверка вкладыша замка (в проекте)'));
        this.#arrayVmaTester.push(Translate.translate('Ключи в шкафу'));
        this.#arrayVmaTester.push(Translate.translate('Кабельные наконечники для клиента и Helawia'));
        this.#arrayVmaTester.push(Translate.translate('Проверка комплектации шкафа согласно схеме'));
        this.#arrayVmaTester.push(Translate.translate('Названия и моменты на оборудовании'));
        this.#arrayVmaTester.push(Translate.translate('Соответствие Граверок с оборудованием'));
        this.#arrayVmaTester.push(Translate.translate('Полное описание всех зуг и прочих колодок'));
        this.#arrayVmaTester.push(Translate.translate('Наличие предупреждающих наклеек, L1, L2, L3, N, PE, на бусбарах/под напряжением'));
        this.#arrayVmaTester.push(Translate.translate('Linergy, INS, NSX(rowniez pod oslonami) sprawdzenie oslon'));
        this.#arrayVmaTester.push(Translate.translate('Порядок фаз: N, L1, L2, L3'));
        this.#arrayVmaTester.push(Translate.translate('Присутствие красных граверек на главном включателе, освещения, и перенапряжения'));
        this.#arrayVmaTester.push(Translate.translate('Наличие всех наклеек'));
        this.#arrayVmaTester.push(Translate.translate('Список нехватки WS3 на дверях.'));
        this.#arrayVmaTester.push(Translate.translate('Соответствующая длина тулеек'));
        this.#arrayVmaTester.push(Translate.translate('Правильное и в полном объеме подключение заземлений PE.'));
        this.#arrayVmaTester.push(Translate.translate('Красный лак на главном включателе, на всех бусбарах и элементах под шестигранник'));
        this.#arrayVmaTester.push(Translate.translate('Красный лак на соединениях заземляющих шин и нулевых, на заземлении главной плиты'));
        this.#arrayVmaTester.push(Translate.translate('Монтаж и подключение главной запитки'));
        this.#arrayVmaTester.push(Translate.translate('Очередность фаз'));
        this.#arrayVmaTester.push(Translate.translate('Соответствие сечений и цветов проводов'));
        this.#arrayVmaTester.push(Translate.translate('Укомплектованость описания проводов и правильное направление'));
        this.#arrayVmaTester.push(Translate.translate('Правильное размещение проводов в зугах и тулейках'));
        this.#arrayVmaTester.push(Translate.translate('Тулейки в зажимах слева-снизу или справа-сверху от винта'));
        this.#arrayVmaTester.push(Translate.translate('Проверка настроек настраиваемых приборов'));
        this.#arrayVmaTester.push(Translate.translate('Жёсткие мосты над включателями затянуты, по концам не торчит медь, описаны фазы.'));
        this.#arrayVmaTester.push(Translate.translate('Чистота в шкафу'));
        this.#arrayVmaTester.push('***************************************');
        return this.#arrayVmaTester;
    }
}
