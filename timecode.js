function myCountdown(myCountdownDate, elementID) {

    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = myCountdownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Output the result in an element with id="demo"
    document.getElementById(elementID).innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  
  
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(this);
      document.getElementById(elementID).innerHTML = "EXPIRED";
    }
  }

  myCountdown(new Date("Apr 10, 2024 16:00:00"), "CM2101");
  myCountdown(new Date("Apr 16, 2024 16:00:00"), "CM2110");
  myCountdown(new Date("Apr 24, 2024 16:00:00"), "CM2104");
  myCountdown(new Date("Apr 29, 2024 10:00:00"), "CM2116");

// Update the count down every 1 second
var x = setInterval(function(){myCountdown(new Date("Apr 10, 2024 09:00:00"), "CM2101")}, 1000);
var z = setInterval(function(){myCountdown(new Date("Apr 16, 2024 16:00:00"), "CM2110")}, 1000);
var y = setInterval(function(){myCountdown(new Date("Apr 24, 2024 16:00:00"), "CM2104")}, 1000);
var a = setInterval(function(){myCountdown(new Date("Apr 29, 2024 10:00:00"), "CM2116")}, 1000);

