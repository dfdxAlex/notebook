// функция - обработчик события.
// клик по крестику должен удалить из массива строку.
// строка передается через параметр val
function handleDellPozition(ev)
{
    const val = ev.target.dataset.val;
    if (val == undefined) {
        return;
    }

    const mas = SyncDataArray.dataArray;
    mas.splice(val, 1);

    SyncDataArray.dataArray = mas;
    SyncDataArray.saveArray();
}
