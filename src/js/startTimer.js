 
import CountdownTimer from "./myTimer";


const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: ('Jan 01, 2022'),
});

timer.intervalId();