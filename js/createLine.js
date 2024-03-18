function createLine() {
    // добыть данные из хранилища и поместить их в массив
    const mas = JSON.parse(localStorage.getItem('amatorDed_notePad_Data'));
    const pozition = document.getElementById('pozition');
    let innerOut='<ul>';
    for (val in mas) {
        innerOut += '<button onclick="dellPozition('+val+'); createLine();" type="button">x</button><li class="button-poz">'+mas[val]+'</li> <br>';
    }
    innerOut += '</ul>';
    pozition.innerHTML = innerOut;
}
