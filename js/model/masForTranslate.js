// Массив для переводов. объявлен в функции createLine() - the old
// Функция переводит статические элементы по их id=""
// массив для переводов состоит из строки
// в строке есть раздлитель - это "/"
// дальше элементы для перевода:
// 1 - id элемента, который нужно перевести
// 2 - английский перевод
// 3 - польский
// 4 - украинский
// 5 - русский
// динамическая часть массива, отвечающая за настройку переводов - the old
// позиций заполняется в функции createLine() в момент формирования - the old
// позиций. - the old

var masForTranslate = [];

(
    () => {
    // loadDataArray в данном случае это геттер класса SyncDataArray
    const mas = SyncDataArray.loadDataArray;

    mas.forEach((el, index) => {
        masForTranslate.push('create-pozition-legend-label'+ index +'/Disposable/Jednorazowe/Одноразові/Одноразовые');
    });

    masForTranslate.push("text-button-ok/Apply/Stosować/Застосувати/Применить");
    masForTranslate.push("button-add/Add/Dodać/Додати/Добавить");
    masForTranslate.push("font-size-setting-label/Font height/Wysokość czcionki/Висота шрифту/Высота шрифта");
    masForTranslate.push("select-lenguage-label/Language selection/Wybór języka/Вибір мови/Выбор языка");
    }

)();




