//✔ Один экземпляр – класс должен создавать только один объект и возвращать его при повторных вызовах.
//✔ Глобальная точка доступа – объект Singleton доступен отовсюду.
//✔ Хранение ссылки – должен сохранять ссылку на созданный экземпляр.
//✔ Защита от пересоздания – повторный вызов конструктора должен возвращать тот же объект.

class VMATestTimer {
    static #instance;

    searchButtonStart = document.getElementById('start_timer');
    searchButtonStop = document.getElementById('stop_timer');
    insertTimeRezult = document.getElementById('insert_time');
  
    constructor() {
      if (VMATestTimer.#instance) {
        return VMATestTimer.#instance;
      }
      VMATestTimer.#instance = this;
      
      this.startTime = null;
      this.endTime = null;
      this.realTime = null;
      this.timerOnOff = false;
    }
  
    startTimer(event) {
      
      if (event)
          event.stopPropagation();

      if (this.timerOnOff) return;
      this.timerOnOff = true;

      this.startTime = Date.now();
      this.endTime = Date.now();

      this.searchButtonStart.classList.add('start-stop-timer-active');
      this.searchButtonStart.classList.remove('start-stop-timer-pasive');
      this.searchButtonStop.classList.remove('start-stop-timer-active');
      this.searchButtonStop.classList.add('start-stop-timer-pasive');
    }
  
    stopTimer(event) {
      if (event)
        event.stopPropagation();

      if (!this.timerOnOff) return;
      this.timerOnOff = false;

      this.endTime = Date.now();
      if (this.endTime > this.startTime)
          this.realTime +=  this.endTime - this.startTime;
      
      this.searchButtonStop.classList.add('start-stop-timer-active');
      this.searchButtonStop.classList.remove('start-stop-timer-pasive');
      this.searchButtonStart.classList.remove('start-stop-timer-active');
      this.searchButtonStart.classList.add('start-stop-timer-pasive');
      this.insertTime();
    }
  
    getElapsedTime() {
      return this.realTime;
    }

    insertTime()
    {
      if (this.realTime === null) this.realTime = 0;
      this.insertTimeRezult.innerText = 'Time testing: '+this.convertMilliseconds(this.realTime);
    }

    convertMilliseconds(ms) {
      const hours = Math.floor(ms / 3600000); // Часы (1 час = 3600000 миллисекунд)
      const minutes = Math.floor((ms % 3600000) / 60000); // Минуты (1 минута = 60000 миллисекунд)
      const seconds = Math.floor((ms % 60000) / 1000); // Секунды (1 секунда = 1000 миллисекунд)
    
      // Возвращаем в формате ЧЧ:ММ:СС
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
  }
