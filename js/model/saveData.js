function saveData() 
{
    // добыть данные из класса и поместить в рабочий массив 
    let mas = SyncDataArray.dataArray;

    // найти форму с текстом
    const name = document.getElementById('name');

    const theContentInput = name.value;
    
    //проверяет нет ли в сообщении записной книги /vma
    //только если этого сообщения нет программа работает 
    //как блокнот.
    let theContentBool = name.value;
    let returnTheNoteBookBool = theContentBool;
    let workingHelp = theContentBool;
    let cabinet = theContentBool;

    theContentBool = theContentBool.toLowerCase().includes('/vma');
    returnTheNoteBookBool = returnTheNoteBookBool.toLowerCase().includes('/return');
    workingHelp = workingHelp.toLowerCase().includes('/help');
    cabinet = cabinet.toLowerCase().includes('/cabinet');

    if (theContentInput!='') {
        if (!theContentBool 
            && !returnTheNoteBookBool
                && !workingHelp
                    && !cabinet) {

            mas.push(theContentInput);
            SyncDataArray.dataArray = mas;
            SyncDataArray.saveArray();
            name.value='';

        } else if (theContentBool) {
            SyncDataArray.createNewStorage(theContentInput);
        } else if (returnTheNoteBookBool) {
            SyncDataArray.returnTheNoteBook();
        } else if (workingHelp) {
            DataSheet.viewCard(name.value);
        } else if (cabinet) {
            SyncDataArray.createNewCabitet(theContentInput);
        } 
    }
    
}
