// Sample video URLs
const videoUrls = [
  "./media/1_sekou.mp4",
  "./media/2_naim.mp4",
  "./media/3_juliette.mp4"
];

let currentIndex = 0;
const videoPlayer = document.getElementById("videoPlayer");
const playPauseBtn = document.getElementById("playPauseBtn");
const playPauseIcon = document.getElementById("playPauseIcon");
const muteUnmuteBtn = document.getElementById("muteUnmuteBtn");
const muteUnmuteIcon = document.getElementById("muteUnmuteIcon");

let lastPlaybackPosition = 0;
let isMuted = false;

function playVideo() {
  videoPlayer.src = videoUrls[currentIndex];
  videoPlayer.currentTime = lastPlaybackPosition;
  videoPlayer.play();
  playPauseIcon.src = "./media/pauseBtn.png";
}

function pauseVideo() {
  videoPlayer.pause();
  lastPlaybackPosition = videoPlayer.currentTime;
  playPauseIcon.src = "./media/playBtn.png";
}

function togglePlayPause() {
  if (videoPlayer.paused || videoPlayer.ended) {
    playVideo();
  } else {
    pauseVideo();
  }
}

function toggleMuteUnmute() {
  if (isMuted) {
    videoPlayer.muted = false;
    muteUnmuteIcon.src = "./media/unmutedBtn.png";
  } else {
    videoPlayer.muted = true;
    muteUnmuteIcon.src = "./media/mutedBtn.png";
  }
  isMuted = !isMuted;
}

function nextVideo() {
  currentIndex = (currentIndex + 1) % videoUrls.length;
  playVideo();
}

function previousVideo() {
  currentIndex = (currentIndex - 1 + videoUrls.length) % videoUrls.length;
  playVideo();
}

// Add event listeners for buttons
document.getElementById("nextBtn").addEventListener("click", nextVideo);
document.getElementById("previousBtn").addEventListener("click", previousVideo);
playPauseBtn.addEventListener("click", togglePlayPause);
muteUnmuteBtn.addEventListener("click", toggleMuteUnmute);

// Start playing the first video in the playlist
playVideo();
