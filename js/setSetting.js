function setSetting()
{
    let fontSiza = 45;
    // Если в хранилище есть инфа о размере шрифта
    if (localStorage.getItem('fontSize')!=null) {
        fontSiza = localStorage.getItem('fontSize');
    }

    const fontSize = document.getElementById('text-button-ok');
    fontSize.style.fontSize = fontSiza+'px';

    const buttonHeight = document.getElementById('button-set-setting');
    if (fontSiza<20) fontSiza = 20;
    buttonHeight.style.height = fontSiza*1.40+'px';
    // // createLine();
    // console.log(fontSize.style.fontSize);
}
