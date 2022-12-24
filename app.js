//  Grab the required elements
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.card h4');

//  Remaining Time 14Days in seconds  
let rtime = 10;

//  Function To calculate Remaining Time
function getRemainingTime() {
  
  rtime -= 1;

  /**
   * 1s = 1s
   * 1min = 60s
   * 1hour = 60min
   * 1day = 24hrs
   */

  const oneDay = 24 * 60 * 60;
  const oneHour = 60 * 60;
  const oneMin = 60;
  const oneSec = 1;

  //  Remaining time in days, hours, minutes, and seconds
  const rdays = Math.floor(rtime / oneDay);
  const rhours = Math.floor((rtime % oneDay) / oneHour);
  const rmins = Math.floor((rtime % oneHour) / oneMin);
  const rsecs = Math.floor((rtime % oneMin) / oneSec);

  //  Store the remaining time in a list
  const remaining = [rdays, rhours, rmins, rsecs];

  //  Function to format values less than 10
  function format(item)
  {
    if (item < 10)
    {
      return (`0${item}`);
    }
    else
    {
      return (item);
    }
  }

  items.forEach((item, index) => {
      item.innerHTML = format(remaining[index]);
  });

  //  When the countdown runs up
  if (rtime < 0)
  {
    clearInterval(countDown);
    deadline.innerHTML = `<h4 class="launch">launch! launch! launch!</h4>`;
  }

}
let countDown = setInterval(getRemainingTime, 1000);

getRemainingTime();
