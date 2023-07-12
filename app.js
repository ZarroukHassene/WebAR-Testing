window.addEventListener("DOMContentLoaded", () => {
  const playPauseBtn = document.getElementById("playPauseBtn");
  const playPauseIcon = document.getElementById("playPauseIcon");
  const muteUnmuteBtn = document.getElementById("muteUnmuteBtn");
  const muteUnmuteIcon = document.getElementById("muteUnmuteIcon");
  const nextBtn = document.getElementById("nextBtnn");
  const prevBtn = document.getElementById("prevBtn");
   video = document.querySelector("a-video");


 
  const marker = document.querySelector("a-marker");
  let isPlaying = false;
  let markerVisible = false;
  let isMuted = false;


let vids = ["1_sekou.mp4", "2_naim.mp4", "3_juliette.mp4"];
  let i = 0;
  
  // video.setAttribute('src', './media/' + vids[i]);

  //Initially video is paused
  document
  .querySelector(document.querySelector("a-video").getAttribute("src"))
  .pause();

  //Periodically (every 100ms) checks if the video is playing and modifies the text of id=playPauseText accordingly
  setInterval(() => {
    if (isPlaying) {
      playPauseText.innerText = "Playing";
    } else {
      playPauseText.innerText = "Paused";
    }
  }, 100);

//

//Toggles the video between playing and paused
  function toggleVideo() {
    if (isPlaying) {
      document
        .querySelector(document.querySelector("a-video").getAttribute("src"))
        .pause();
      playPauseIcon.src = "./media/playBtn.png";
      isPlaying = false;
    } else if(!isPlaying) {
      document
        .querySelector(document.querySelector("a-video").getAttribute("src"))
        .play();
      playPauseIcon.src = "./media/pauseBtn.png";
      isPlaying = true;
    }
  }

  //Toggles the video display based on the marker visibility
  function handleVideoDisplay() {
    if (markerVisible) {
      video.setAttribute("visible", "true");
      toggleVideo();
    } else {
      video.setAttribute("visible", "false");
      toggleVideo();
    }
  }
  //Toggles the video sound on and off via button of id=muteUnmuteIcon

  function toggleSound() {
    if(!isMuted) {
      document.querySelector(document.querySelector("a-video").getAttribute("src")).muted = true;
      muteUnmuteIcon.src = "./media/mutedBtn.png";
      isMuted = true;
    } else {
      document.querySelector(document.querySelector("a-video").getAttribute("src")).muted = false;
      muteUnmuteIcon.src = "./media/unmutedBtn.png";
      isMuted = false;
    }
  }
  
  function nextVideo() {

    
    //Increment the video index
    console.log(video.getAttribute('src'));
    if (i < vids.length - 1) {
      i++;
      video.setAttribute('src', './media/' + vids[i]);
    } else {
      i = 0;
      video.setAttribute('src', './media/' + vids[i]);
    }

 
  }

  // AR marker visibility event listeners

  marker.addEventListener("markerFound", () => {
    markerVisible = true;
    handleVideoDisplay();
  });
  marker.addEventListener("markerLost", () => {
    markerVisible = false;
    handleVideoDisplay();
  });

  playPauseBtn.addEventListener("click", toggleVideo);
  muteUnmuteBtn.addEventListener("click", toggleSound);
 nextBtn.addEventListener('click', nextVideo);
  
   
 
});
