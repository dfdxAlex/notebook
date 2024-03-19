function cleanBookList(regim)
{
    const list_id = document.getElementById('pozition');
    const button_ok = document.getElementById('item-menu-setting-ok');

    if (regim) {
        // Удалить текущий класс
        list_id.classList.remove("on");

        // Добавить новый класс
        list_id.classList.add("off");

        // Удалить текущий класс
        button_ok.classList.remove("off");

        // Добавить новый класс
        button_ok.classList.add("on");
    } else {
        // Удалить текущий класс
        list_id.classList.remove("off");

        // Добавить новый класс
        list_id.classList.add("on");
  
        // Удалить текущий класс
        button_ok.classList.remove("on");
  
        // Добавить новый класс
        button_ok.classList.add("off");
    }
}
