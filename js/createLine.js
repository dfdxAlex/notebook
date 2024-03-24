var masForTranslate = [];

function createLine() {
    // добыть данные из хранилища и поместить их в массив
    const mas = JSON.parse(localStorage.getItem('amatorDed_notePad_Data'));
    const pozition = document.getElementById('pozition');
    let innerOut='<ul>';

    for (val in mas) {
        masForTranslate.push('create-pozition-legend-label'+ val +'/Disposable/Jednorazowe/Одноразові/Одноразовые');
        innerOut += '<fieldset class="create-pozition-fieldswt">' + 
                       '<legend>' +
                         '<label ' +
                           'id="create-pozition-legend-label' + val +
                          '">' +
                            'Одноразовые' +
                         '</label>' +
                        '</legend>' +
                       '<button ' +
                          'class="button-dell"' +
                          'onclick="dellPozition('+val+');' +
                          'createLine();"' +
                          'type="button">X' + 
                        '</button>' +
                        '<li class="button-poz">'+mas[val]+'</li> <br>' +
                    '</fieldset>';
    }
    innerOut += '</ul>';
    pozition.innerHTML = innerOut;

}
