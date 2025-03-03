function arrayVmaTester()
{
    const [str] = arguments;

    const arrayVmaTester = [];
    arrayVmaTester.push(`${Translate.translate('Название проекта')}:${str} <br>
                          &nbsp;Test started:${new Date().toLocaleString()} <span id="insert_time"></span><br>
                          <button class="start-stop-timer" type="button" id="start_timer">Start Timer</button>
                          <button class="start-stop-timer" type="button" id="stop_timer">Pause Timer</button>
                         `);
    
    arrayVmaTester.push('<h2>'+Translate.translate('О проекте')+'</h2>');
    arrayVmaTester.push(Translate.translate('WS3 and WS5'));
    arrayVmaTester.push('QR-code');
    arrayVmaTester.push(Translate.translate('Правильная установка названия шкафа'));
    arrayVmaTester.push(Translate.translate('Цвет гравировки данные'));
    arrayVmaTester.push(Translate.translate('Красная наклейка над главным автоматом:"HOOFDSCHAKELAR ..."'));
    arrayVmaTester.push(Translate.translate('Красная наклейка над автоматом от лампочек:"STEEDS ONDER SPANNING  ..."'));
    
    arrayVmaTester.push('<h2>'+Translate.translate('Наклейки')+'</h2>');
    arrayVmaTester.push(Translate.translate('Названия кнопок, счётчиков, включателей'));
    arrayVmaTester.push(Translate.translate('Тип питания, под напряжением, опасно'));
    arrayVmaTester.push(Translate.translate('Соответствие Граверок с оборудованием'));
    arrayVmaTester.push(Translate.translate('Полное описание всех зуг и прочих колодок'));
    arrayVmaTester.push(Translate.translate('Наличие предупреждающих наклеек, L1, L2, L3, N, PE, на бусбарах/под напряжением'));
    
    arrayVmaTester.push(Translate.translate('<h2>*****ВНЕШНИЙ ОСМОТР*****</h2>'));
    arrayVmaTester.push(Translate.translate('Зуги установлены крючком вверх, с кнопкой, направленной в сторону клиента.'));
    arrayVmaTester.push(Translate.translate('На всех колодках есть боковая крышка'));
    arrayVmaTester.push(Translate.translate('Проверка мест подключения мультиклипов, не выломаны квадратные пластики.'));
    arrayVmaTester.push(Translate.translate('Призма. Пластиковые уголки на месте.'));

    arrayVmaTester.push(Translate.translate('<h2>*****Механика*****</h2>'));
    arrayVmaTester.push(Translate.translate('Проверка повреждений'));
    arrayVmaTester.push(Translate.translate('Сборка шкафа и недостатки'));
    arrayVmaTester.push(Translate.translate('Проверить качество петель на дверях, что ничего не отлетает.'));
    arrayVmaTester.push(Translate.translate('Призма. Короткие болты вверху и внизу держат лицевую панель.'));
    arrayVmaTester.push(Translate.translate('Заклепки на дверях и других элементах не повреждены.'));
    arrayVmaTester.push(Translate.translate('Призма: прикручены все винты на пластиковых уголках. Углы - подставки под лицевую панель.'));
    arrayVmaTester.push(Translate.translate('Стягивающие шкаф бляхи внизу прикручены на один винт по середине.'));
    arrayVmaTester.push(Translate.translate('Лицевая панель на призмах'));
    arrayVmaTester.push(Translate.translate('Проверка вкладыша замка (в проекте)'));
    arrayVmaTester.push(Translate.translate('Ключи в шкафу'));
    arrayVmaTester.push(Translate.translate('Хорошо прикручена ручка'));

    arrayVmaTester.push(Translate.translate('<h2>*****Электрика*****</h2>'));
    arrayVmaTester.push(Translate.translate('Кабельные наконечники для клиента и Helawia'));
    arrayVmaTester.push(Translate.translate('Если торы запитаны автоматом на 400А, то отводы 6мм должны быть Штудером.'));
    arrayVmaTester.push(Translate.translate('На призмах P на зугах до 16мм должна быть зуга заземления.'));
    arrayVmaTester.push(Translate.translate('Нет касания проводов на корпус.'));
    arrayVmaTester.push(Translate.translate('Проверить подключение лампы на призмах, в тулейках.'));
    arrayVmaTester.push(Translate.translate('Настройки перемычек. Предпоследние с обеих сторон переключены к желтому проводу.'));
    arrayVmaTester.push(Translate.translate('На призмах P, зуги всегда крючком к клиенту.'));
    arrayVmaTester.push(Translate.translate('На призмах P, металлические перегородки заземлены специальной выгнутой пластинкой.'));
    arrayVmaTester.push(Translate.translate('На призмах P, пластиковые перегородки НЕ в нахлёст.'));
    arrayVmaTester.push(Translate.translate('Пластиковые перегородки между реле-реле, реле-оборудование.'));
    arrayVmaTester.push(Translate.translate('Названия и моменты на оборудовании'));
    arrayVmaTester.push(Translate.translate('Linergy, INS, NSX(rowniez pod oslonami) sprawdzenie oslon'));
    arrayVmaTester.push(Translate.translate('Проверка тока шин Linergy, INS, NSX'));
    arrayVmaTester.push(Translate.translate('Соответствующая длина тулеек'));
    arrayVmaTester.push(Translate.translate('Правильное и в полном объеме подключение заземлений PE.'));
    arrayVmaTester.push(Translate.translate('Проверить наличие контактных шайб где заземление на краске.'));
    arrayVmaTester.push(Translate.translate('Медные шайбы на красных шинах где сечение провода меньше 25 мм.'));
    arrayVmaTester.push(Translate.translate('Красный лак на главном включателе, на всех бусбарах и элементах под шестигранник'));
    arrayVmaTester.push(Translate.translate('Красный лак на соединениях заземляющих шин и нулевых, на заземлении главной плиты'));
    arrayVmaTester.push(Translate.translate('Монтаж и подключение главной запитки'));
    arrayVmaTester.push(Translate.translate('Укомплектованость описания проводов и правильное направление'));
    arrayVmaTester.push(Translate.translate('Номерки на всех дополнительных коммуникационных устройствах: разделители LAN, USB ...'));
    arrayVmaTester.push(Translate.translate('Номерки на всех кабелях типа LAN и других информационных'));
    arrayVmaTester.push(Translate.translate('Экраны всех экранированных кабелей подключены на землю.'));
    arrayVmaTester.push(Translate.translate('Правильное размещение проводов в зугах и тулейках'));
    arrayVmaTester.push(Translate.translate('Тулейки в зажимах слева-снизу или справа-сверху от винта'));
    arrayVmaTester.push(Translate.translate('Зеленые BUS-бары, проверить чтобы тулейка выходила сверху и не зажимался пластик.'));
    arrayVmaTester.push(Translate.translate('Порядок фаз: N, L1, L2, L3'));
    arrayVmaTester.push(Translate.translate('Жёсткие мосты над включателями затянуты, по концам не торчит медь, описаны фазы.'));
    arrayVmaTester.push(Translate.translate('Проверка комплектации шкафа согласно схеме'));
    arrayVmaTester.push(Translate.translate('Соответствие сечений и цветов проводов'));
    arrayVmaTester.push(Translate.translate('Без напряжения проверить правильную запитку PLC и другой электроники.'));
    arrayVmaTester.push(Translate.translate('Проверка под электричеством'));
    arrayVmaTester.push(Translate.translate('Проверка настроек настраиваемых приборов'));
    arrayVmaTester.push(Translate.translate('Дополнительная визуальная проверка N и F1, F2, F3 вверх-низ'));
    arrayVmaTester.push(Translate.translate('Закрутить все винты'));
    arrayVmaTester.push(Translate.translate('Чистота в шкафу'));
    arrayVmaTester.push('***************************************');
    return arrayVmaTester;
}


