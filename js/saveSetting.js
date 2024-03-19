function saveSetting()
{
    // Найти поле с размером шрифта
    const fontSize = document.getElementById('font-size-setting');
    // Если размер шрифта введен, то записать его в хранилище
    if (fontSize.value != '') {
        localStorage.setItem('fontSize', fontSize.value);
    }

}
