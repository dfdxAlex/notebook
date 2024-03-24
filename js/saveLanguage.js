function saveLanguage()
{
    let language = 'en';
    // Если в хранилище есть инфа о языке
    if (localStorage.getItem('language')!=null) {
        language = localStorage.getItem('language');
    } else {
        localStorage.setItem('language', language);
    }

    const newLang = document.getElementById('select-lenguage');
    if (newLang.value != language) {
        localStorage.setItem('language', newLang.value);
        language = newLang.value;
        switch (language) {
            case "en":
                document.getElementById('lang-en').selectedIndex = 1;
                break;
            case "ru":
                document.getElementById('lang-ru').selectedIndex = 1;
                break;
            case "pl":
                document.getElementById('lang-pl').selectedIndex = 1;
                    break;
            case "ua":
                document.getElementById('lang-ua').selectedIndex = 1;
                break;
        }
    }

    console.log(newLang.value);
}
