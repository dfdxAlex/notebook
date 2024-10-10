// Статический класс содержит методы для чтения и записи 
// массива с данными записной книжки.
// SyncDataArray.dataArray как геттер всегда читает данные из хранилища
// SyncDataArray.dataArray как сеттер сохраняет в статической переменной
// информацию.
// Отдельная функция SyncDataArray.saveArray() записывает массив в хранилище
// данные записанные в записной книжке
class SyncDataArray
{
    static #dataArray = [];
    static #arrayVmaTester = [];
    static #dataTime;
    constructor() 
    {

    }

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
        str = str.replace(/\/vma/gi, '');
        str = str.trim();

        // обновить массив записной книги
        //this.loadArray();
        // записать массив записной книжки как дополнительный
        //this.saveArray('temp_amatorDed_notePad_Data');
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
        this.#arrayVmaTester.push('Проект: '+str);
        this.#arrayVmaTester.push('Проверка таблички');
        this.#arrayVmaTester.push('Проверка граверек');
        this.#arrayVmaTester.push('Проверка повреждений');
        return this.#arrayVmaTester;
    }
}
