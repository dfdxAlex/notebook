function saveData() 
{
    // добыть данные из хранилища и поместить их в массив
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
