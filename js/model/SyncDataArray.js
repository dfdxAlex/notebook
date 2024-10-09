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

    static get dataArray()
    {
        if (this.#dataArray === null) return [];
        return this.#dataArray;
    }

    static set dataArray(property)
    {
        this.#dataArray = property;
    }

    static saveArray()
    {
        localStorage.setItem('amatorDed_notePad_Data', JSON.stringify(this.#dataArray));
    }

    static loadArray()
    {
        this.#dataArray = JSON.parse(localStorage.getItem('amatorDed_notePad_Data'));
    }
}
