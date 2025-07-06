function pm5300RU()
{
    return `<div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
  <h2 style="text-align: center; color: #0066cc; margin-bottom: 20px;">Настройка счётчика PM5300</h2>
  <p>Опции листаются <strong>правой кнопкой</strong> под экраном, стрелкой вправо. Нажимая правую стрелку, необходимо найти пункт <strong>Maint</strong>. Одновременно на экране помещаются три опции, для выбора <strong>Maint</strong> необходимо под надписью нажать кнопку.</p>
  <p>Далее:</p>
  <ol style="padding-left: 20px; margin-top: 10px; margin-bottom: 20px;">
    <li>Выберите <strong>Setup</strong>.</li>
    <li>На экране появится поле для ввода пароля (с нулями). Ничего не вводим, просто нажимаем <strong>OK</strong>.</li>
    <li>Выберите <strong>Meter</strong>, затем <strong>Basic</strong>.</li>
  </ol>
  <p>Таким образом, вы попадёте в меню настроек счётчика. Чтобы задать параметры:</p>
  <ul style="padding-left: 20px; margin-top: 10px; margin-bottom: 20px;">
    <li>Найдите параметр <strong>CT Primary</strong> для задания высокого параметра трансформатора тока.</li>
    <li>Найдите параметр <strong>CT Secondary</strong> для настройки малого параметра.</li>
  </ul>

  <h2 style="text-align: center; color: #0066cc; margin-bottom: 20px;">Проверка счётчика</h2>
  <p>Находясь в режиме работы, на главной странице, листайте подпункты и ищите <strong>I - сила тока</strong>. Откройте эту позицию и, нагрузив фазы, проверьте силу тока.</p>
  <p><strong>Важно:</strong> величина должна быть положительной. Если это не так, трансформатор тока подключён неправильно.</p>
</div>
`;
}