// функция - обработчик события.
// клик по крестику должен удалить из массива строку.
// строка передается через параметр val
function handleDellPozition(val)
{
    // добыть данные из хранилища и поместить их в массив
    const mas = JSON.parse(localStorage.getItem('amatorDed_notePad_Data'));
    mas.splice(val, 1); // Удалить элемент по индексу
    // преобразовать массив в строку джейсон
    let save = JSON.stringify(mas);
    // записать новый массив в хранилище
    localStorage.setItem('amatorDed_notePad_Data', save);
}
