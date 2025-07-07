// Новый класс для переводов, более универсальный.
// Старый класс предназначен для переводов по ID
// Данный класс - разновидность обкатанного метода.
// Русский язык базовый, к нему привязаны переводы, т.е.
// Текст поступает в метод русский, но если выбран другой язык,
// то метод возвращает соответствующий перевод

class Translate extends TranslateBD
{
    static lang = localStorage.getItem('language');
    static translate(str)
    {
        if (this.lang === null) this.lang = 'en';
        if (this.lang === 'ru') return str;
        for(let val of super.translateArray) {
            if (str === val[0]) {
                switch (this.lang) {
                    case "en":
                        return val[3];
                    case "ua":
                        return val[1];
                    case "pl":
                        return val[2];
                    // case "ru":
                    //     return val[0];
                }
            }
        }
        return str;
    }
}
