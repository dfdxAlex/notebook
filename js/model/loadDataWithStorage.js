// функция вытягивает данные из локального хранилища
// и помещает их в массив.
// данные записанные в записной книжке
function loadDataWithStorage()
{
    let mas = JSON.parse(localStorage.getItem('amatorDed_notePad_Data'));
    if (mas === null) return [];
    return mas;
}
