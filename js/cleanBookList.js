function cleanBookList(regim)
{
    const list_id = document.getElementById('pozition');
    const button_ok = document.getElementById('item-menu-setting-ok');
    const button_add = document.getElementById('item-menu-ok');

    if (regim) {
        list_id.style.display = "none";

        button_add.style.display = "none";

        button_ok.style.display = "inline";
    } else {
        list_id.style.display = "inline";

        button_add.style.display = "inline";

        button_ok.style.display = "none";
    }
}
