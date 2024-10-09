function saveData() 
{
    // добыть данные из класса и поместить в рабочий массив
    let mas = SyncDataArray.dataArray;

    // найти форму с текстом
    const name = document.getElementById('name');
    if (name.value!='') {
        mas.push(name.value);
        SyncDataArray.dataArray = mas;
        SyncDataArray.saveArray();

        name.value='';
    }
}
