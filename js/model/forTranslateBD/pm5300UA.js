function pm5300UA()
{
    return `<div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
  <h2 style="text-align: center; color: #0066cc; margin-bottom: 20px;">Налаштування лічильника PM5300</h2>
  <p>Опції перегортаються <strong>правою кнопкою</strong> під екраном, стрілкою вправо. Натискаючи праву стрілку, необхідно знайти пункт <strong>Maint</strong>. Одночасно на екрані відображаються три опції, для вибору <strong>Maint</strong> потрібно натиснути кнопку під написом.</p>
  <p>Далі:</p>
  <ol style="padding-left: 20px; margin-top: 10px; margin-bottom: 20px;">
    <li>Виберіть <strong>Setup</strong>.</li>
    <li>На екрані з’явиться поле для введення пароля (з нулями). Нічого не вводимо, просто натискаємо <strong>OK</strong>.</li>
    <li>Виберіть <strong>Meter</strong>, потім <strong>Basic</strong>.</li>
  </ol>
  <p>Таким чином, ви потрапите в меню налаштувань лічильника. Щоб задати параметри:</p>
  <ul style="padding-left: 20px; margin-top: 10px; margin-bottom: 20px;">
    <li>Знайдіть параметр <strong>CT Primary</strong> для задання високого параметра трансформатора струму.</li>
    <li>Знайдіть параметр <strong>CT Secondary</strong> для налаштування малого параметра.</li>
  </ul>

  <h2 style="text-align: center; color: #0066cc; margin-bottom: 20px;">Перевірка лічильника</h2>
  <p>Перебуваючи в режимі роботи, на головній сторінці, перегортайте підпункти і шукайте <strong>I - сила струму</strong>. Відкрийте цю позицію і, навантаживши фази, перевірте силу струму.</p>
  <p><strong>Важливо:</strong> величина повинна бути додатною. Якщо це не так, трансформатор струму підключений неправильно.</p>
</div>
`;
}