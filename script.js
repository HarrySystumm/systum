document.addEventListener("DOMContentLoaded", function() {
  var audio = document.getElementById('backgroundAudio');
  var video = document.querySelector('video');
  var isPlaying = false;

  function toggleMedia() {
    if (isPlaying) {
      audio.pause();
      video.pause();
      isPlaying = false;
    } else {
      audio.play();
      video.play();
      isPlaying = true;
    }
  }

  document.addEventListener('click', function() {
    toggleMedia();
  });
});
