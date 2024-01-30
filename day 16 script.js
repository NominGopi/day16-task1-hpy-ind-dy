document.addEventListener('DOMContentLoaded', function () {
    const countdownElement = document.getElementById('countdown');
    
    function countdown(num, callback) {
      setTimeout(function () {
        countdownElement.textContent = num;
  
        if (num === 1) {
          callback();
        } else {
          countdown(num - 1, callback);
        }
      }, 1000);
    }
  
    countdown(10, function () {
   
      countdownElement.textContent = "🥳🥳🥳Happy Independence Day🥳🥳🥳";
    
    });
  });
  