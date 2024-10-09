// функция вытягивает данные из локального хранилища
// и помещает их в массив.
// данные записанные в записной книжке
class SyncDataArray
{
    static dataArray = [];

    static get dataArray()
    {
        let mas = JSON.parse(localStorage.getItem('amatorDed_notePad_Data'));
        if (mas === null) return [];
        return mas;
    }

    static set dataArray(property)
    {
        this.dataArray = property;
    }

    static saveArray()
    {
        localStorage.setItem('amatorDed_notePad_Data', JSON.stringify(this.dataArray));
    }
}
