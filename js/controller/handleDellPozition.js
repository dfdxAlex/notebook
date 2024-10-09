// функция - обработчик события.
// клик по крестику должен удалить из массива строку.
// строка передается через параметр val
function handleDellPozition(val)
{
    const mas = loadDataWithStorage();
    
    mas.splice(val, 1); // Удалить элемент по индексу
    // преобразовать массив в строку джейсон
    let save = JSON.stringify(mas);
    // записать новый массив в хранилище
    localStorage.setItem('amatorDed_notePad_Data', save);
}
