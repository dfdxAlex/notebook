function saveSetting()
{
    // Найти поле с размером шрифта
    const newFontSize = document.getElementById('font-size-setting').value;
    // Если размер шрифта введен, то записать его в хранилище
    if (newFontSize>0) {
        localStorage.setItem('fontSize', newFontSize);
    }

    // Найти поле с языком
    const selectLenguage = document.getElementById('select-lenguage').value;
    // В этом поле всегда что-то будет
    localStorage.setItem('language', selectLenguage);
}
