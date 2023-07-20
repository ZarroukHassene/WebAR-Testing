// Sample video URLs
const videoUrls = [
  "./media/1_sekou.mp4",
  "./media/2_naim.mp4",
  "./media/3_juliette.mp4"
];

let currentIndex = 0;
const videoPlayer = document.getElementById("videoPlayer");

function playVideo() {
  videoPlayer.src = videoUrls[currentIndex];
  videoPlayer.play();
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

// Start playing the first video in the playlist
playVideo();
