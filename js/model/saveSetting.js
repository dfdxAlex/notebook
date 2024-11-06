function saveSetting()
{
    // Найти поле с размером шрифта
    const newFontSize = document.getElementById('font-size-setting').value;
    if (newFontSize>0) {
        localStorage.setItem('fontSize', newFontSize);
    }

    // Найти поле с языком
    localStorage.setItem('language', document.getElementById('select-lenguage').value);
}
