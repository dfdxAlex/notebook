function setSetting()
{
    let fontSiza = 16;
    // Если в хранилище есть инфа о размере шрифта
    if (localStorage.getItem('fontSize')!=null) {
        fontSiza = localStorage.getItem('fontSize');
    }

    // Найти форму в которой может быть указан новый размер базового шрифта
    // const newFontSize = document.getElementById('font-size-setting').value;

    // Проверить больше ли 0 шрифт и не равен ли он старому значению
    // Если шрифт не 0 и отличается от старого то изменить его в хранилище
    fontSiza = saveSetting(fontSiza);

    // Устанавливаем новый размер шрифта в px для корневого элемента
    document.documentElement.style.fontSize = fontSiza+"px";

    // поместить значение шрифта в поле настроек.
    const fontSizeValue = document.getElementById('font-size-setting');
    fontSizeValue.value = fontSiza;
}
