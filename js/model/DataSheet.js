// класс - справочник. предоставляет методы для поиска жёстко
// запрограммированных данных в блокнот
class DataSheet extends Translate
{
    static query;
    // по запросу в str функция ищет данные в массиве и возвращает 
    // их или пустую строку
    static searchInfoDataSheet(str)
    {
        let rez = '';
        // Подготовить запрос.
        let query = str.toLowerCase();
        query = query.replace(/\/help/gi, '').trim();
        this.query = query;

        // алгоритм поиска информации в массиве
        let prop;
        // Начать просматривать весь массив
        for (prop in dataSheetBD) {
            if (!prop.includes(query)) continue;
            let propArray = prop.split('_');
            let propTest;
            // просмотреть текущий элемент. Ищется совпадение с запросом
            for (propTest in propArray) {
                if (propArray[propTest] == query) {
                    rez += dataSheetBD[prop];
                }
            }
        }
        return rez;
    }
    
    // пока функция, но потом можно сделать класс в представлениях
    static viewCard(str)
    {
     let modalBody = this.translate(this.searchInfoDataSheet(str));
     modalBody = modalBody.replaceAll("\.", '\.<br>');

     const modalOut = `
     <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#customModal">
       ${this.translate('Результат поиска')}
     </button>

     <!-- Modal Structure -->
     <div class="modal fade" id="customModal" tabindex="-1" aria-labelledby="customModalLabel" aria-hidden="true">
       <div class="modal-dialog modal-dialog-centered">
         <div class="modal-content" style="border-radius: 12px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);">
           
           <!-- Modal Header with Icon -->
           <div class="modal-header" style="background-color: #4a90e2; color: white; border-top-left-radius: 12px; border-top-right-radius: 12px;">
             <h5 class="modal-title" id="customModalLabel"><i class="bi bi-info-circle me-2"></i>${this.query}</h5>
             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style="color: white;"></button>
           </div>
           
           <!-- Modal Body -->
           <div class="modal-body" style="padding: 20px; font-size: 16px;">
             <p>${modalBody}</p>
           </div>
      
           <!-- Modal Footer -->
           <div class="modal-footer" style="border-top: none; justify-content: center;">
             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
           </div>
         </div>
       </div>
     </div>`;

     document.querySelector('#modal').innerHTML = modalOut;
    }
}


