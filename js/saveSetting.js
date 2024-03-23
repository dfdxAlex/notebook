function saveSetting(fontSiza)
{
    // Найти поле с размером шрифта
    const newFontSize = document.getElementById('font-size-setting').value;
    // Если размер шрифта введен, то записать его в хранилище
    if (newFontSize>0 && newFontSize!=fontSiza) {
        localStorage.setItem('fontSize', newFontSize);
        fontSiza = newFontSize;
    }
    return fontSiza;
}
