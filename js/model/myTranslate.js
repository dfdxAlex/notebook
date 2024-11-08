// старая функция переводчика
// эффективна для переводов по id
function myTranslate()
{
    // Узнать с каким языком работаем
    const language = localStorage.getItem('language');

    // Перебрать массив, содержащий переводы
    for (val of masForTranslate) {
        // получить из строки вспомогательный массив
        let mas = val.split("/");

        // выбрать элемент, который нужно перевести, из вспомогательного массива
        let buttonAdd = document.getElementById(mas[0]);

        if (buttonAdd!==null)
        switch (language) {
            case "en":
                //Перевести на английский
                buttonAdd.innerText = mas[1];
                break;
            case "ua":
                //перевести на украинский
                buttonAdd.innerText = mas[3];
                break;
            case "pl":
                //перевести на польский
                buttonAdd.innerText = mas[2];
                break;
            case "ru":
                //перевести на русский
                buttonAdd.innerText = mas[4];
                break;
        }
    }
}
