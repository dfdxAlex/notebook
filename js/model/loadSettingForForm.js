function loadSettingForForm()
{
    // Поместить информацию о выбранном ранее языке в селект
    let language = localStorage.getItem('language');
    if (language != null) 
        document.getElementById('select-lenguage').value = language;
    else 
        document.getElementById('select-lenguage').value = "en";

    // поместить значение шрифта в поле настроек.
    let fontSiza = localStorage.getItem('fontSize');
    const fontSizeValue = document.getElementById('font-size-setting');
    if (fontSiza != null) {
        fontSizeValue.value = fontSiza;
    } else {
        fontSizeValue.value = 16;
    }
}
