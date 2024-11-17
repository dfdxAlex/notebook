function buttonSetSetting(outParam = true)
{
    if (!outParam) {
        document.getElementById('button-set-setting').innerHTML = '';
        return;
    }
    
    document.getElementById('button-set-setting').innerHTML = `
    <button 
        type="button" 
        class="btn btn-success" 
        onclick="saveSetting();
                 setSetting(); 
                 setFontSize(false);
                 lenguageSelect(false);
                 buttonSetSetting(false);
                 cleanBookList(0);
                 myTranslate();" 
        style="background-color: #28a745; border-color: #28a745; font-size: 18px; padding: 12px 24px; color: white; border-radius: 8px; font-weight: bold;"
    >
        <span id="text-button-ok">Применить</span>
    </button>
    `;
}
