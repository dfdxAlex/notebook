function createLine() {
    // добыть данные из хранилища и поместить их в массив
    const mas = JSON.parse(localStorage.getItem('amatorDed_notePad_Data'));
    const pozition = document.getElementById('pozition');
    let innerOut='<ul>';
    for (val in mas) {
        innerOut += '<li>'+mas[val]+'</li>';
    }
    innerOut += '</ul>';
    pozition.innerHTML = innerOut;
}
