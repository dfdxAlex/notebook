function buttonSetSetting()
{
    document.getElementById('button-set-setting').innerHTML = `
    <button 
        type="button" 
        class="btn btn-success" 
        id="button-set-setting"
        onclick="saveSetting();
                 setSetting(); 
                 cleanBookList(0);
                 myTranslate();" 
        style="background-color: #28a745; border-color: #28a745; font-size: 18px; padding: 12px 24px; color: white; border-radius: 8px; font-weight: bold;"
    >
        <span id="text-button-ok">Применить</span>
    </button>

    `;
}
