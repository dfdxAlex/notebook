function saveData() 
{
    // добыть данные из хранилища и поместить их в массив
    let mas = loadDataWithStorage();

    // найти форму с текстом
    const name = document.getElementById('name');
    // если текстовое поле не пустое, то запустить блок сохранения текста
    if (name.value!='') {
        // добавить новый элемент в конец массива
        mas.push(name.value);
        // преобразовать массив в строку джейсон
        let save = JSON.stringify(mas);
        // записать новый массив в хранилище
        localStorage.setItem('amatorDed_notePad_Data', save);

        name.value='';
    }
}
