;(() => {
  const toggleBtn = document.querySelector('.toggle');
  const oHourHand = document.querySelector('.hour');
  const oMiniuteHand = document.querySelector('.miniute');
  const oSecondHand = document.querySelector('.second');
  const oDate = document.querySelector('.date');
  const oTime = document.querySelector('.time');

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  function toggleClass(e) {
    const oHtml = document.documentElement;
    oHtml.classList.toggle('dark');
    toggleBtn.textContent = toggleBtn.textContent === 'Dark mode' ? 'Light mode' : 'Dark mode';
  }

  function mapToScale(target, targetMax, objectMax) {
    return target * (objectMax / targetMax);
  }

  function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const miniute = time.getMinutes();
    const second = time.getSeconds();
    const hourForClock = hour % 12;
    const AMorPM = hour > 11 ? 'PM' : 'AM';

    oHourHand.style.transform = `translate(-50%,-100%) rotate(${mapToScale(hourForClock, 12, 360)}deg)`;
    oMiniuteHand.style.transform = `translate(-50%,-100%) rotate(${mapToScale(miniute, 60, 360)}deg)`;
    oSecondHand.style.transform = `translate(-50%,-100%) rotate(${mapToScale(second, 60, 360)}deg)`;

    oTime.textContent = `${hourForClock}:${miniute} ${AMorPM}`;
    oDate.innerHTML = `<div class="date">${days[day]}, ${months[month]} <span class="circle">${date}</span></div>`;
    
  }

  function bindEvent() {
    toggleBtn.addEventListener('click', toggleClass);
  }

  function init() {
    setInterval(setTime, 1000);
    bindEvent();
  }

  init();
})()
