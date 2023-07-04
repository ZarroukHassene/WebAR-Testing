document.addEventListener('DOMContentLoaded', function () {
  const scene = document.querySelector('a-scene');
  const container = document.querySelector('#container');
  const nextButton = document.querySelector('#next-button');

  let vids = ["1_sekou.mp4", "2_naim.mp4", "3_juliette.mp4"];
  let i = 0;

  const marker = document.createElement('a-marker');
  marker.setAttribute('type', 'hiro');

  const video = document.createElement('a-video');
  video.setAttribute('position', '0 0 -1.2');
  video.setAttribute('rotation', '-90 0 0');
  video.setAttribute('width', '2');
  video.setAttribute('height', '2');
  video.setAttribute('src', './media/' + vids[i]);
  video.setAttribute('visible', 'false');

  marker.appendChild(video);

  let isMarkerFound = false;

  marker.addEventListener('markerFound', () => {
    isMarkerFound = true;
    video.setAttribute('visible', 'true');
    if (!video.isPlaying) {
      video.play();
    }
  });

  marker.addEventListener('markerLost', () => {
    isMarkerFound = false;
    video.setAttribute('visible', 'false');
    video.pause();
  });

  scene.appendChild(marker);

  nextButton.addEventListener('click', () => {
    if (isMarkerFound) {
      i = (i + 1) % vids.length;
      video.setAttribute('src', './media/' + vids[i]);
      video.pause();
      video.play();
    }
  });
});
