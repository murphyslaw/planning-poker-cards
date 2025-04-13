function toggleFullScreen(event) {
  if (!document.fullscreenEnabled) return;

  if (!document.fullscreenElement) {
    event.currentTarget.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }

  document.body.classList.toggle('fullscreen');
}

const cards = document.querySelectorAll('button');
cards.forEach((card) => {
  card.addEventListener('click', toggleFullScreen);
});
