
function app()
{
    document.addEventListener('DOMContentLoaded', () => {
        createLine();
        setSetting();
        myTranslate();
        saveData();
        buttonsSettingAdd(); 

        // Когда загрузится весь документ нужно найти pozition
        // и накинуть на него три события.
        // Внутри элемента pozition есть много кнопок, и чтобы
        // не накидывать событие на каждую кнопку можно воспользоваться
        // всплытием, реализовать делегирование события.
        // Все кнопки внутри елемента pozition будут делегировать
        // обработку клика по себе данному элементу, который их родитель.
        const pozition = document.getElementById('pozition');
        pozition.onclick = (ev) => {
            handleDellPozition(ev);
            createLine(); 
            myTranslate();
        };
    });

}
