function cleanBookList(regim)
{
    const list_id = document.getElementById('pozition');
    const button_ok = document.getElementById('item-menu-setting-ok');
    const button_add = document.getElementById('item-menu-ok');

    if (regim) {
        // Удалить текущий класс
        list_id.classList.remove("on");
        // Добавить новый класс
        list_id.classList.add("off");

        // Добавить новый класс
        button_add.style.display = "none";

        // Удалить текущий класс
        button_ok.classList.remove("off");
        // Добавить новый класс
        button_ok.classList.add("on");
    } else {
        // Удалить текущий класс
        list_id.classList.remove("off");
        // Добавить новый класс
        list_id.classList.add("on");

        // Добавить новый класс
        button_add.style.display = "inline";

        // Удалить текущий класс
        button_ok.classList.remove("on");
        // Добавить новый класс
        button_ok.classList.add("off");
    }
}
