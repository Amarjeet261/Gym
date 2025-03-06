// Set the countdown date
var countDownDate = new Date("Jun 5, 2025 15:37:25").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
  var hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
  var minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
  var seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');

  document.getElementById("demo").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // Show live current time
  document.getElementById("current-time").innerHTML = "Current Time: " + new Date().toLocaleTimeString();

  if (distance < 0) {
    clearInterval(x);
    let demo = document.getElementById("demo");
    demo.innerHTML = "EXPIRED";
    demo.style.color = "red";
    demo.style.transition = "opacity 1s";
    demo.style.opacity = "0.5";
  }
}, 1000);
