document.addEventListener('DOMContentLoaded', function () {
  const scene = document.querySelector('a-scene');

  const marker = document.createElement('a-marker');
  marker.setAttribute('type', 'hiro');

  const video = document.createElement('a-video');
  video.setAttribute('position', '0 0 -1.2');
  video.setAttribute('rotation', '-90 0 0');
  video.setAttribute('width', '2');
  video.setAttribute('height', '2');
  video.setAttribute('src', './media/1_sekou.mp4');
  video.setAttribute('visible', 'false');

  marker.appendChild(video);

  marker.addEventListener('markerFound', () => {
    if (!video.isPlaying) {
      video.setAttribute('visible', 'true');
      video.play();
    }
  });

  marker.addEventListener('markerLost', () => {
    video.setAttribute('visible', 'false');
    video.pause();
  });

  scene.appendChild(marker);
});
