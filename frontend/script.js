function updateUTCTime() {
  const currentTimeElement = document.querySelector(
    '[data-testid="currentTimeUTC"]'
  );
  const now = new Date();
  const utcTime = now.toUTCString();
  currentTimeElement.textContent = `Current Time (UTC): ${utcTime}`;
}

updateUTCTime();
setInterval(updateUTCTime, 1000);
