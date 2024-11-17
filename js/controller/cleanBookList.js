// функция переключает программу между режимами работы и настроек
// навести порядок. Функция устарела и дублируется джаваскриптом

function cleanBookList(regim)
{
    const list_id = document.getElementById('pozition');
    const button_ok = document.getElementById('item-menu-setting-ok');
    const button_add = document.getElementById('item-menu-ok');
    const input_text_pozition = document.getElementById('name');
    const button_setting = document.getElementById('button_setting');

    // Если передали в функцию true, то спрятать:
    // основное поле с позициями
    // кнопку Добавить
    // показать меню настроек
    if (regim) {
        list_id.style.display = "none";

        button_add.style.display = "none";

        button_ok.style.display = "inline";

        input_text_pozition.style.display = "none";

        button_setting.style.display = "none";

        // setFontSize(); 
    // Если в функцию приходит false то:
    // показать главное поле с позициями
    // показать кнопку добавления
    // спрятать меню настроек
    } else {
        list_id.style.display = "inline";

        button_add.style.display = "inline";

        button_ok.style.display = "none";

        input_text_pozition.style.display = "inline";

        button_setting.style.display = "inline";
    }
}
