function pm5300PL()
{
    return `<div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
  <h2 style="text-align: center; color: #0066cc; margin-bottom: 20px;">Konfiguracja licznika PM5300</h2>
  <p>Opcje można przeglądać <strong>prawym przyciskiem</strong> pod ekranem, strzałką w prawo. Naciskając prawą strzałkę, należy znaleźć opcję <strong>Maint</strong>. Na ekranie wyświetlane są jednocześnie trzy opcje, aby wybrać <strong>Maint</strong>, należy nacisnąć przycisk pod napisem.</p>
  <p>Dalej:</p>
  <ol style="padding-left: 20px; margin-top: 10px; margin-bottom: 20px;">
    <li>Wybierz <strong>Setup</strong>.</li>
    <li>Na ekranie pojawi się pole do wprowadzenia hasła (z zerami). Nic nie wprowadzaj, po prostu naciśnij <strong>OK</strong>.</li>
    <li>Wybierz <strong>Meter</strong>, a następnie <strong>Basic</strong>.</li>
  </ol>
  <p>W ten sposób trafisz do menu konfiguracji licznika. Aby ustawić parametry:</p>
  <ul style="padding-left: 20px; margin-top: 10px; margin-bottom: 20px;">
    <li>Znajdź parametr <strong>CT Primary</strong>, aby ustawić wysoki parametr przekładnika prądowego.</li>
    <li>Znajdź parametr <strong>CT Secondary</strong>, aby skonfigurować niski parametr.</li>
  </ul>

  <h2 style="text-align: center; color: #0066cc; margin-bottom: 20px;">Sprawdzanie licznika</h2>
  <p>Będąc w trybie pracy, na stronie głównej, przeglądaj podpunkty i szukaj <strong>I - natężenie prądu</strong>. Otwórz tę pozycję i obciążając fazy, sprawdź natężenie prądu.</p>
  <p><strong>Ważne:</strong> wartość powinna być dodatnia. Jeśli tak nie jest, przekładnik prądowy jest podłączony nieprawidłowo.</p>
</div>`;
}