function setFontSize(outParam = true)
{
    let out = `
               <div>
                <br>
                <fieldset class="field-set">
                  <legend>
                    <label 
                      for="font-size-setting"
                      id="font-size-setting-label"
                    >
                      Высота шрифта
                    </label>
                  </legend>
                  <input 
                    class="item-menu item-menu-text" 
                    type="number" 
                    id="font-size-setting" 
                    value=""
                  >
                </fieldset> 
           </div>
    `;
    if (!outParam) out = '';
    
    document.querySelector('#item-menu-setting-ok').innerHTML = out;
}
