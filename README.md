# goit-js-hw-11-timer
Задание 3 - Таймер обратного отсчета

//для выдображення быльше чим 1 символа в щетчику
pad(value) {
  return String(value).padStart(2, "0");
};    

/////або////////
 _padZero(value) {
    return value > 9 ? `${value}` : `0${value}`;
  }

// для обнулення при стоп 
function reset(...arr) {
  return arr.map((el) => (el.textContent = "00"));
};        


// счеткик зворотнього выдлыку через ф-ю
let intervalId = null;

function setTime (time) {
  let days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  let hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  let mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  let secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  return {days, hours, mins, secs};
};

function pad(value) {
  return String(value).padStart(2, "0");
};

function timeToTheEnd(date, obj) {
  const targetDate = new Date(date);
  const timer = targetDate - currentDate;  
  let newTime = setTime(timer);
  console.log(newTime);

  obj.days.textContent = newTime.days;
  obj.hours.textContent = newTime.hours;
  obj.minutes.textContent = newTime.mins;
  obj.seconds.textContent = newTime.secs;
};

intervalId = setInterval(() => {
  timeToTheEnd(myDay, refs);
}, 1000);