var masForTranslate = [];

function createLine() {

    SyncDataArray.loadArray();
    const mas = SyncDataArray.dataArray;

    const pozition = document.getElementById('pozition');
    let innerOut='<ul>';

    for (val in mas) {
        masForTranslate.push('create-pozition-legend-label'+ val +'/Disposable/Jednorazowe/Одноразові/Одноразовые');
        innerOut += `<fieldset class="create-pozition-fieldswt" style="border: 1px solid #ced4da; border-radius: 8px; padding: 15px; margin-bottom: 15px; max-width: 100%; width: 100%; background-color: ${val % 2 === 0 ? '#f8f9fa' : '#e9ecef'};">
        <legend style="font-weight: normal; color: #495057;">
            <label id="create-pozition-legend-label${val}" style="font-size: 0.6em; color: #28a745;">
                Одноразовые
            </label>
        </legend>
        <button
            class="btn btn-danger btn-sm"
            onclick="handleDellPozition(${val}); createLine(); myTranslate();"
            type="button"
            style="float: right; margin-top: -10px; margin-right: -10px; font-size: 0.8em; padding: 0.25em 0.5em;">
            X
        </button>
        <ul style="list-style-type: none; padding-left: 0; margin-top: 15px;">
            <li class="button-poz" style="font-weight: bold; font-size: 1.4em; color: #28a745;">${mas[val]}</li>
        </ul>
     </fieldset>`;



    }
    innerOut += '</ul>';
    pozition.innerHTML = innerOut;
}


