function avg()
{
    return `<div style="border: 1px solid #ddd; border-radius: 8px; padding: 20px; max-width: 600px; margin: 0 auto; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); background-color: #f9f9f9;">
  <h4 style="text-align: center; color: #333; margin-bottom: 20px;">${Translate.translate('Таблица соответствий сечений AWG с миллиметрами квадратными')}</h4>
  <table style="width: 100%; border-collapse: collapse; text-align: center;">
    <thead>
      <tr style="background-color: #007bff; color: white;">
        <th style="padding: 8px; border: 1px solid #ddd;">AWG</th>
        <th style="padding: 8px; border: 1px solid #ddd;">${Translate.translate('Площадь сечения (мм²)')}</th>
      </tr>
    </thead>
    ${avgPartTbody()}
  </table>
</div>`;
}