// функция - обработчик события.
// клик по крестику должен удалить из массива строку.
// строка передается через параметр val
function handleDellPozition(val)
{
    const mas = SyncDataArray.dataArray;
    mas.splice(val, 1);
    SyncDataArray.dataArray = mas;
    SyncDataArray.saveArray();
}
