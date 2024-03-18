function saveData() 
{
    // объявить массив
    let mas = [];

    if (localStorage.getItem('amatorDed_notePad_Data')!=null)
        // добыть данные из хранилища и поместить их в массив
        mas = JSON.parse(localStorage.getItem('amatorDed_notePad_Data'));

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

// // Сохранение данных
// localStorage.setItem('key', 'value');

// // Получение данных
// const data = localStorage.getItem('key');
// console.log(data); // Выведет "value"

// // Удаление данных
// localStorage.removeItem('key');
