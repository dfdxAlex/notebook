function iEM3255RU()
{
    return `<h4>Настройка счётчика iEM3255</h4>
  Нажать и придержать кнопки OK и ESC до появления полей ввода пароля.
  Пароль вводится по одной цифре.
  V - увеличивает текущую цифру на один.
  OK - переходит к вводу следующей цифры.
  После ввода последней цифры счётчик сам входит в режим настройки.
  Пароль 0010. Попыток на ввод - 5 (вероятно, но лучше не проверять).
  В режиме настроек V листает разделы, OK входит в текущий раздел.
  CT & VT - Раздел для указатия типа трансформатора тока.
  CT Secondary - указывает нижний параметр, если трансформатор 120/5, то сюда вводится 5.
  CT Primary - указывает верхний параметр, в данном примере - это 120.
  ..Проверка.
  Для проверки счётчика следует нажимать кнопку V, без входа в меню настроек, выбрав пункт V & I или P,Q,& S.
  На VMA используется нагреватель мощностью 8,4 ампера при 220 вольтах.
  При входе в раздел V & I можно посмотреть напряжение сети, частоту сети и силу тока на каждой фазе.
  Поэтому выбрать фазу 1 и подключить нагреватель на фазу 1, если покажет 8,4 ампера, то всё работает.
  Так-же проверить остальные фазы. В примере нагреватель в VMA.`
}