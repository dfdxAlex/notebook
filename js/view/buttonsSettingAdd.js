function buttonsSettingAdd(out = true)
{
    const buttonsSettingAdd = document.getElementById('buttons-setting-add');
    if (out) {
        buttonsSettingAdd.innerHTML = `
                    <button
              type="button" 
              onclick="cleanBookList(1);
                       lenguageSelect();
                       setFontSize();
                       loadSettingForForm();
                       buttonSetSetting();
                       myTranslate();" 
              class="button-setting" 
              id="button_setting"
            >
              &#9881;
            </button>

            <div class="on menu-add-ok" id="item-menu-ok" >
              <button 
                class="item-menu" 
                onclick="saveData(); 
                         createLine();
                         myTranslate();
                         " 
                type="button"
                id="button-add"
              >
                Добавить
              </button>
            </div>
        `;
    }

    if (!out) {
        buttonsSettingAdd.innerHTML = '';
    }
}
