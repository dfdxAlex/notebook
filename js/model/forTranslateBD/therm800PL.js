function therm800PL()
{
    return `<div class="card" style="max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #dee2e6;">
  <div class="card-body">
    <h5 class="card-title" style="font-weight: bold;">Ustawienia timera EBECO EB-Therm 800</h5>
    
    <h6 class="card-subtitle mb-2 text-muted">Sterowanie:</h6>
    <ul class="list-group list-group-flush" style="margin-bottom: 15px;">
      <li class="list-group-item" style="border: 0; padding-left: 0;">
        <strong>Boczne strzałki</strong> — przyciski do przewijania menu lub zmiany danych.
      </li>
      <li class="list-group-item" style="border: 0; padding-left: 0;">
        <strong>Środkowy przycisk</strong> wybiera aktywną opcję menu lub zatwierdza wartość.
      </li>
    </ul>
    
    <h6 class="card-subtitle mb-2 text-muted">Tryb przeglądania ustawień</h6>
    <p class="card-text" style="margin-bottom: 15px;">
      To proste przewijanie strzałkami podczas uruchamiania urządzenia lub wychodzenia z menu ustawień.
    </p>
    
    <p class="card-text" style="margin-bottom: 15px;">
      Timer współpracuje z dwoma czujnikami. Jeśli używany jest tylko jeden czujnik, drugi należy wyłączyć w ustawieniach.
    </p>
    
    <h6 class="card-subtitle mb-2 text-muted">Wejście do menu ustawień:</h6>
    <ul class="list-group list-group-flush" style="margin-bottom: 15px;">
      <li class="list-group-item" style="border: 0; padding-left: 0;">
        Naciśnij środkowy przycisk, aż pojawi się <code>"main menu"</code>.
      </li>
    </ul>
    
    <h6 class="card-subtitle mb-2 text-muted">Niektóre pozycje menu:</h6>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" style="border: 0; padding-left: 0;">
        <strong>Exit</strong> — wyjście z menu.
      </li>
      <li class="list-group-item" style="border: 0; padding-left: 0;">
        <strong>TEMP</strong> — wejście do menu ustawień temperatury.
        <ul>
          <li>Set Temp — strzałkami ustaw temperaturę, którą termostat ma utrzymać.</li>
        </ul>
      </li>
      <li class="list-group-item" style="border: 0; padding-left: 0;">
        <strong>System-Sensor</strong> — ustawienia kombinacji czujników. Na przykład, przy jednym czujniku wybierz opcję <code>A-Room, B-off</code>.
      </li>
    </ul>
    
    <p class="card-text" style="margin-top: 15px;">
      System wprowadza zmiany po wyjściu z edytowanego menu.
    </p>
  </div>
</div>
`;
}