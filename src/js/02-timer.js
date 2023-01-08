import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

let ms = null;

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

const ref = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
  inputValue: document.querySelector('[input]'),
  startBtn: document.querySelector('[data-start]'),
};
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    inputDate(selectedDates[0]);
  },
};

flatpickr('input[type="text"]', options);
ref.startBtn.setAttribute('disabled', 'disabled');

function inputDate(selectedDates) {
  if (selectedDates <= Date.now()) {
    alert('Please choose a date in the future');
  } else {
    ref.startBtn.removeAttribute('disabled', 'disabled');
    timeStart(selectedDates);
  }
}

let timerId = null;

function addLeadingZero(x) {
  return x.toString().padStart(2, '');
}

function timeStart(selectedDates) {
  ms = Date.parse(selectedDates) - Date.now();

  let newConvert = convertMs(ms);

  ref.startBtn.addEventListener('click', () => {
    ref.startBtn.setAttribute('disabled', 'disabled');
    timerId = setInterval(() => {
      if (ms <= 0) {
        clearInterval(timerId);
        return;
      }
  
      newConvert = convertMs(ms);

      ref.days.textContent = addLeadingZero(newConvert.days);
      ref.hours.textContent = addLeadingZero(newConvert.hours);
      ref.minutes.textContent = addLeadingZero(newConvert.minutes);
      ref.seconds.textContent = addLeadingZero(newConvert.seconds);
      ms -= 1000;
    }, 1000);
  });
}