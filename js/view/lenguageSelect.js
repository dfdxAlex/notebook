function lenguageSelect(outParam = true)
{
    let out = `
    <!-- Работа с языками -->
    <div>
      <label for="select-lenguage" id="select-lenguage-label" class="form-label">
        Выбор языка
      </label>
      <select 
        name="leng" 
        class="form-select" 
        id="select-lenguage"
        aria-label="Выбор языка"
      >
        <option id="lang-en" value="en">English</option>
        <option id="lang-ru" value="ru">Русский</option>
        <option id="lang-pl" value="pl">Polish</option>
        <option id="lang-ua" value="ua">Українська</option>
      </select>
    </div>
    `;
    if (!outParam) out = '';
    document.getElementById('language-select').innerHTML = out;
}
