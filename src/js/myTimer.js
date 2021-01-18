
export default

class CountdownTimer {
  constructor({targetDate }) {
    this.targetDate = new Date(targetDate);
    this.days = document.querySelector(`[data-value="days"]`);
    this.hours = document.querySelector(`[data-value="hours"]`);
    this.minutes = document.querySelector(`[data-value="mins"]`);
    this.seconds = document.querySelector(`[data-value="secs"]`);
  }
  
  pad(value) {
    return String(value).padStart(2, "0");
  };   

  countData() {
    const dateNow = Date.now();
    const time = this.targetDate - dateNow;
    const onTime = this.createValue(time);
    this.updateTime(onTime);
  }
    
  createValue(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const minutes = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const seconds = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, minutes, seconds };
  }
  
  updateTime({ days, hours, minutes, seconds }) {
    this.days.textContent = days;
    this.hours.textContent = hours;
    this.minutes.textContent = minutes;
    this.seconds.textContent = seconds;
  }

  intervalId() {
    this.countData();
    setInterval(() => this.countData(), 1000);
  }
};