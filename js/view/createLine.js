function createLine() {

    // loadDataArray в данном случае это геттер класса SyncDataArray
    // loadDataArray возвращает массив с тем, что должно быть в рабочем поле
    const mas = SyncDataArray.loadDataArray;

    let innerOut='<ul>';

    // Здесь просматривается весь массив с данными и формируются
    // позиции записной книги. 
    for (val in mas) {
        innerOut += `
        <fieldset 
            class="create-pozition-fieldswt" 
            style="background-color: ${val % 2 === 0 ? '#f8f9fa' : '#e9ecef'};"
        >
        <legend style="font-weight: normal; color: #495057;">
            <label id="create-pozition-legend-label${val}" 
                   style="font-size: 0.6em; color: #28a745;">
                Одноразовые
            </label>
        </legend>
        <button
            class="btn btn-danger btn-sm buttonX"
            data-val = ${val}
            type="button"
        >
            X
        </button>
        <ul style="list-style-type: none; padding-left: 0; margin-top: 15px;">
            <li class="button-poz">${mas[val]}</li>
        </ul>
     </fieldset>`;
    }
    innerOut += '</ul>';

    // Здесь находится нужный элемент и данные в него рендерятся
    const pozition = document.getElementById('pozition') 
    pozition.innerHTML = innerOut;
}


