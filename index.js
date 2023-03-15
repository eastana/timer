var countDownDate = new Date("Mar 18, 2023 08:00:00").getTime();

var x = setInterval(function() {

  let now = new Date().getTime();


  let interval = countDownDate - now;

  let days = Math.floor(interval / (1000 * 60 * 60 * 24));
  let hours = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((interval % (1000 * 60)) / 1000);

  let namingDays = days > 1 ? "days" : "day";

  document.getElementById("demo").innerHTML = days + " " + namingDays + " " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (interval <= 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "YOU ARE AT HOME";
  }
}, 1000);