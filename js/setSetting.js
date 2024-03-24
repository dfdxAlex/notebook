function setSetting()
{
    let fontSiza = 16;
    // Если в хранилище есть инфа о размере шрифта
    if (localStorage.getItem('fontSize')!=null) {
        fontSiza = localStorage.getItem('fontSize');
    }

    // Устанавливаем новый размер шрифта в px для корневого элемента
    document.documentElement.style.fontSize = fontSiza+"px";
}
