document.addEventListener('DOMContentLoaded', function () {
    const scene = document.querySelector('a-scene');
  
    const marker = document.createElement('a-marker');
    marker.setAttribute('type', 'hiro');
  
    const plane = document.createElement('a-plane');
    plane.setAttribute('position', '0 0 0');
    plane.setAttribute('rotation', '-90 0 0');
    plane.setAttribute('width', '1.6');
    plane.setAttribute('height', '1.6');
    plane.setAttribute('color', 'white');
    plane.setAttribute('opacity', '0');
    plane.setAttribute('visible', 'false');
  
    marker.appendChild(plane);
  
    marker.addEventListener('markerFound', () => {
      plane.setAttribute('visible', 'true');
      plane.setAttribute('opacity', '0.8');
    });
  
    marker.addEventListener('markerLost', () => {
      plane.setAttribute('visible', 'false');
      plane.setAttribute('opacity', '0');
    });
  
    scene.appendChild(marker);
  });
  