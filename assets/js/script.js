let digitalElement = document.querySelector('.digital');
let secondElement = document.querySelector('.p_s');
let minuteElement = document.querySelector('.p_m');
let hourElement = document.querySelector('.p_h');

function updateClock() {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(
    second
  )}`;

  let secondDeg = (360 / 60) * second - 90;
  secondElement.style.transform = `rotate(${secondDeg}deg)`;

  let minuteDeg = (360 / 60) * minute - 90;
  minuteElement.style.transform = `rotate(${minuteDeg}deg)`;
}

function fixZero(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000);
