function showVideo(src) {
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("exerciseVideo");
    video.src = src;
    modal.style.display = "block";
  }
  
  function closeVideo() {
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("exerciseVideo");
    video.pause();
    modal.style.display = "none";
  }
  
  function startWorkout() {
    document.getElementById("videoModal").style.display = "none";
    document.getElementById("levelSelection").style.display = "block";
  }
  
  function startTimer(seconds) {
    document.getElementById("levelSelection").style.display = "none";
    const display = document.getElementById("timerDisplay");
  
    let timeLeft = seconds;
    const interval = setInterval(() => {
      display.innerText = `Time Left: ${timeLeft}s`;
      timeLeft--;
  
      if (timeLeft < 0) {
        clearInterval(interval);
        display.innerText = "Workout Complete!";
      }
    }, 1000);
  }
  