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
        this.#arrayVmaTester = arrayVmaTester(str);
        return this.#arrayVmaTester;
    }

    static createNewArrayCabinet(str)
    {
        this.#arrayCabinet = arrayCabinet(str);
        return this.#arrayCabinet;
    }

    // обёртка для недопущения дублирования кода
    // функция возвращает готовый массив с тем, что должно 
    // быть отображено в рабочем поле
    static get loadDataArray()
    {
        // Функция loadArray() помещает актуальные данные пунктов записной книги в свой класс
        this.loadArray();
        // dataArray в данном случае это геттер класса SyncDataArray
        return this.dataArray;
    }
}
