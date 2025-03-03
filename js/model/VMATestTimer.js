//✔ Один экземпляр – класс должен создавать только один объект и возвращать его при повторных вызовах.
//✔ Глобальная точка доступа – объект Singleton доступен отовсюду.
//✔ Хранение ссылки – должен сохранять ссылку на созданный экземпляр.
//✔ Защита от пересоздания – повторный вызов конструктора должен возвращать тот же объект.

class VMATestTimer {
    static #instance;


  
    constructor() {

      if (VMATestTimer.#instance) {
        return VMATestTimer.#instance;
      }
      VMATestTimer.#instance = this;
      
      this.startTime = null;
      this.endTime = null;
      this.realTime = null;
      this.realTime2 = null;
      this.timerOnOff = false;


    }
  
    startTimer(event) {
      if (event.target.id === 'start_timer') {
        event.stopPropagation();
      }

      if (this.timerOnOff) return;
      this.timerOnOff = true;
      this.startTime = Date.now();
      this.endTime = Date.now();

      const searchButtonStart = document.getElementById('start_timer');
      const searchButtonStop = document.getElementById('stop_timer');

      searchButtonStart.classList.add('start-stop-timer-active');
      searchButtonStart.classList.remove('start-stop-timer-pasive');
      searchButtonStop.classList.remove('start-stop-timer-active');
      searchButtonStop.classList.add('start-stop-timer-pasive');
    }
  
    stopTimer(event) {

      if (event.target.id === "stop_timer") {
        event.stopPropagation();
      }

      if (!this.timerOnOff) return;
      this.timerOnOff = false;

      this.endTime = Date.now(); 
      if (this.endTime > this.startTime && localStorage.getItem('str_for_notepan') == '0')
          this.realTime +=  this.endTime - this.startTime;
      if (this.endTime > this.startTime && localStorage.getItem('str_for_notepan') == '1')
        this.realTime2 +=  this.endTime - this.startTime;   

      const searchButtonStart = document.getElementById('start_timer');
      const searchButtonStop = document.getElementById('stop_timer');

      searchButtonStop.classList.add('start-stop-timer-active');
      searchButtonStop.classList.remove('start-stop-timer-pasive');
      searchButtonStart.classList.remove('start-stop-timer-active');
      searchButtonStart.classList.add('start-stop-timer-pasive');
      
      // псевдопараллельный поток
      let intervalId = false;
      if (!intervalId)
      intervalId = setInterval(() => {
          this.insertTime();
      }, 500);

    }
  
    getElapsedTime() {
      if (localStorage.getItem('str_for_notepan') == '0')
       return this.realTime;
      return this.realTime2;
    }

    insertTime()
    {
      if (this.getElapsedTime() === null) return;
      document.getElementById('insert_time').innerText = 'Time testing: '+this.convertMilliseconds(this.getElapsedTime());
    }

    convertMilliseconds(ms) {
      const hours = Math.floor(ms / 3600000); // Часы (1 час = 3600000 миллисекунд)
      const minutes = Math.floor((ms % 3600000) / 60000); // Минуты (1 минута = 60000 миллисекунд)
      const seconds = Math.floor((ms % 60000) / 1000); // Секунды (1 секунда = 1000 миллисекунд)
    
      // Возвращаем в формате ЧЧ:ММ:СС
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
  }

  // последние изменения.
  // добавлена переменная в локалсторедж, которая - признак на какой странице
  // работаем. Нужно к ней привязаться и добавить переменные в локалсторадж
  // для хранения данных таймера.
  // Нужно придумать систему сбросса таймера
  // Нужно разобраться почему при команде return перестают работать 
  // события кнопок таймера, необходимо обновлять страницу.
